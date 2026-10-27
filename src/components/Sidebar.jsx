import {
  LayoutDashboard,
  Camera,
  Map,
  Activity,
  Settings,
} from "lucide-react";

const menuItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Camera View", icon: Camera },
  { label: "3D Map", icon: Map },
  { label: "System Monitor", icon: Activity },
  { label: "Settings", icon: Settings },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <p className="sidebar-heading">WORKSPACE</p>

      <nav>
        {menuItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={`nav-item ${
              activePage === label ? "active" : ""
            }`}
            onClick={() => setActivePage(label)}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="live-dot" />
        Local simulation
      </div>
    </aside>
  );
}
