import './StatsCard.css';

function StatsCard({ title, value }) {
  return (
    <div className="stats-card">
      <p className="stats-value">{value}</p>
      <p className="stats-title">{title}</p>
    </div>
  );
}

export default StatsCard;