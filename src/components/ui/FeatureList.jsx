import "./FeatureList.css";

/**
 * Label + description list, e.g. "Why TFG" reasons or risk lists.
 *
 * items:   [[label, text]]
 * marker:  "bullet" | "number"
 * columns: 1 | 2
 * tone:    "light" | "dark"
 */
function FeatureList({ items, marker = "bullet", columns = 1, tone = "light" }) {
  const List = marker === "number" ? "ol" : "ul";

  return (
    <List
      className={`feature-list feature-list-${marker} feature-list-cols-${columns} feature-list-${tone}`}
    >
      {items.map(([label, text], i) => (
        <li key={label}>
          <span className="feature-list-marker" aria-hidden="true">
            {marker === "number" ? String(i + 1).padStart(2, "0") : null}
          </span>

          <div>
            <strong className="feature-list-label">{label}</strong>
            {text && <p className="feature-list-text">{text}</p>}
          </div>
        </li>
      ))}
    </List>
  );
}

export default FeatureList;
