import Reveal from "./Reveal";
import "./StatRow.css";

/**
 * Row of headline figures, ruled like a drawing-sheet title block.
 *
 * items: [{ value, label }]
 */
function StatRow({ items }) {
  return (
    <dl className="stat-row">
      {items.map((item, i) => (
        <Reveal className="stat-row-item" key={item.label} delay={i * 80}>
          <dt className="stat-row-label">{item.label}</dt>
          <dd className="stat-row-value">{item.value}</dd>
        </Reveal>
      ))}
    </dl>
  );
}

export default StatRow;
