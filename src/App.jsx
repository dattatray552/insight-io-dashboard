import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import CameraView from "./components/CameraView";
import PointCloudView from "./components/PointCloudView";
import StatusBar from "./components/StatusBar";

import { dashboardStats, sensorInfo } from "./data/dashboardData";

import "./styles/global.css";
import "./styles/dashboard.css";
import "./styles/components.css";

export default function App() {
  const [activePage, setActivePage] = useState("Overview");

  return (
    <div className="app-shell">
      <Header />

      <div className="app-body">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <main className="main-content">
          <div className="page-heading">
            <div>
              <p className="eyebrow">ROBOTICS / MONITORING</p>
              <h1>{activePage}</h1>
              <p className="page-description">
                Monitor your robot's camera, sensors, and spatial data.
              </p>
            </div>

            <span className="simulation-badge">
              SIMULATION MODE
            </span>
          </div>

          {activePage === "Overview" && (
            <>
              <section className="stats-grid">
                {dashboardStats.map((stat) => (
                  <StatCard key={stat.title} stat={stat} />
                ))}
              </section>

              <section className="visual-grid">
                <CameraView />
                <PointCloudView />
              </section>

              <section className="panel sensor-panel">
                <div className="panel-header">
                  <div className="panel-title">
                    <h3>Sensor Overview</h3>
                  </div>
                  <span className="status-pill">LOCAL STATUS</span>
                </div>

                <div className="sensor-grid">
                  {sensorInfo.map((sensor) => (
                    <div className="sensor-item" key={sensor.label}>
                      <span>{sensor.label}</span>
                      <strong>{sensor.value}</strong>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {activePage === "Camera View" && <CameraView />}
          {activePage === "3D Map" && <PointCloudView />}

          {activePage === "System Monitor" && (
            <section className="panel sensor-panel">
              <div className="panel-header">
                <h3>System Monitor</h3>
              </div>

              {sensorInfo.map((sensor) => (
                <div className="sensor-item" key={sensor.label}>
                  <span>{sensor.label}</span>
                  <strong>{sensor.value}</strong>
                </div>
              ))}
            </section>
          )}

          {activePage === "Settings" && (
            <section className="panel sensor-panel">
              <h3>Settings</h3>
              <p>
                Current environment: Local development.
                Data source: Local media files.
              </p>
            </section>
          )}

          <StatusBar />
        </main>
      </div>
    </div>
  );
}