import { Activity, Bell, CircleUserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-icon">
          <Activity size={22} />
        </div>

        <div>
          <h2>Insight.IO</h2>
          <p>Robotics Intelligence Platform</p>
        </div>
      </div>

      <div className="header-actions">
        <span className="live-indicator">
          <span className="live-dot" />
          SYSTEM ONLINE
        </span>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={19} />
        </button>

        <button className="icon-button" aria-label="User profile">
          <CircleUserRound size={20} />
        </button>
      </div>
    </header>
  );
}
