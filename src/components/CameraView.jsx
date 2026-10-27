import { useRef, useState } from "react";
import { Camera, Maximize, Video } from "lucide-react";

export default function CameraView() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  async function togglePlayback() {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  async function toggleFullscreen() {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await video.requestFullscreen();
      }
    } catch {
      console.error("Fullscreen is not available.");
    }
  }

  return (
    <section className="panel camera-panel">
      <div className="panel-header">
        <div className="panel-title">
          <Camera size={19} />
          <div>
            <h3>Camera View</h3>
            <p>Live visual feed simulation</p>
          </div>
        </div>

        <span className="status-pill">
          <span className="live-dot" />
          LOCAL FEED
        </span>
      </div>

      <div className="camera-screen">
        <video
          ref={videoRef}
          src="/assets/camera-demo.mp4"
          muted
          loop
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        <div className="camera-overlay">
          <span>CAM-01</span>
          <span>{playing ? "PLAYING" : "PAUSED"}</span>
        </div>

        <div className="camera-controls">
          <button onClick={togglePlayback}>
            <Video size={17} />
            {playing ? "Pause feed" : "Play feed"}
          </button>

          <button
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen"
          >
            <Maximize size={17} />
          </button>
        </div>
      </div>

      <div className="panel-footer">
        Source: Local MP4 · Simulation mode
      </div>
    </section>
  );
}