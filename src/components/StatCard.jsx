import {
  Activity,
  Camera,
  Scan,
  Gauge,
} from "lucide-react";

const icons = {
  activity: Activity,
  camera: Camera,
  scan: Scan,
  gauge: Gauge,
};

export default function StatCard({ stat }) {
  const Icon = icons[stat.icon] || Activity;

  return (
    <article className="stat-card">
      <div className="stat-top">
        <span>{stat.title}</span>
        <Icon size={20} />
      </div>

      <h3>{stat.value}</h3>
      <p>{stat.subtitle}</p>
    </article>
  );
}