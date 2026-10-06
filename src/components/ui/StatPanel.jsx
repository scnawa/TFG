import "./StatPanel.css";

/**
 * Large figure in a ruled, corner-ticked frame — a drawing-sheet callout.
 * Designed for dark sections.
 */
function StatPanel({ label, value, caption }) {
  return (
    <div className="stat-panel">
      <p className="stat-panel-label">{label}</p>
      <strong className="stat-panel-value">{value}</strong>
      <p className="stat-panel-caption">{caption}</p>
    </div>
  );
}

export default StatPanel;
