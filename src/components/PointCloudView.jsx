import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader.js";
import { Rotate3D, RefreshCw } from "lucide-react";

export default function PointCloudView() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("Loading point cloud...");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#080d16");

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      10000
    );

    camera.position.set(0, 10, 30);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    container.appendChild(renderer.domElement);

    const grid = new THREE.GridHelper(100, 50, "#28405c", "#17283a");
    scene.add(grid);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    let pointCloud = null;
    let animationId;

    const loader = new PCDLoader();

    loader.load(
      "/assets/sample.pcd",
      (points) => {
        pointCloud = points;
        pointCloud.geometry.center();
        pointCloud.material.size = 0.12;

        scene.add(pointCloud);
        controls.target.set(0, 0, 0);
        controls.update();

        setStatus("Point cloud loaded");
      },
      (progress) => {
        if (progress.total > 0) {
          const percent = Math.round(
            (progress.loaded / progress.total) * 100
          );

          setStatus(`Loading point cloud: ${percent}%`);
        }
      },
      () => {
        setStatus(
          "Could not load sample.pcd. Add a valid PCD file to public/assets."
        );
      }
    );

    function handleResize() {
      if (!container.clientWidth || !container.clientHeight) return;

      camera.aspect =
        container.clientWidth / container.clientHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        container.clientWidth,
        container.clientHeight
      );
    }

    window.addEventListener("resize", handleResize);

    function animate() {
      animationId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);

      controls.dispose();

      if (pointCloud) {
        scene.remove(pointCloud);
        pointCloud.geometry.dispose();
        pointCloud.material.dispose();
      }

      grid.geometry.dispose();
      grid.material.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="panel map-panel">
      <div className="panel-header">
        <div className="panel-title">
          <Rotate3D size={20} />
          <div>
            <h3>3D Map View</h3>
            <p>LiDAR point cloud visualization</p>
          </div>
        </div>

        <button
          className="icon-button"
          onClick={() => window.location.reload()}
          aria-label="Reload point cloud"
        >
          <RefreshCw size={17} />
        </button>
      </div>

      <div className="point-cloud-container" ref={containerRef} />

      <div className="panel-footer">
        <span>{status}</span>
        <span>Drag to rotate · Scroll to zoom</span>
      </div>
    </section>
  );
}