function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendType = "positive",
}) {
  return (
    <div className="stat-card">

      <div className="stat-card-top">

        <div className="stat-icon">
          {icon}
        </div>

        {trend && (
          <span
            className={`stat-trend ${trendType}`}
          >
            {trend}
          </span>
        )}

      </div>

      <div className="stat-value">
        {value}
      </div>

      <div className="stat-title">
        {title}
      </div>

      {subtitle && (
        <div className="stat-subtitle">
          {subtitle}
        </div>
      )}

    </div>
  );
}

export default StatCard;