import Reveal from "./Reveal";
import "./CardGrid.css";

/**
 * Hairline grid of corner-tick cards.
 *
 * items:    [{ title, text?, code?, image?, alt? }]
 * numbered: label cards 01, 02… when an item has no code
 * columns:  2 | 3 | 4
 * align:    "left" | "center"
 */
function CardGrid({ items, numbered = false, columns = 3, align = "left" }) {
  return (
    <div className={`card-grid card-grid-cols-${columns} card-grid-${align}`}>
      {items.map((item, i) => {
        const code = item.code ?? (numbered ? String(i + 1).padStart(2, "0") : null);

        return (
          <Reveal
            as="article"
            className="tick-card"
            key={item.title}
            delay={(i % columns) * 80}
          >
            {item.image && (
              <div className="tick-card-media">
                <img src={item.image} alt={item.alt ?? item.title} loading="lazy" />
              </div>
            )}

            {code && <span className="tick-card-code">{code}</span>}

            <h3 className="tick-card-title">{item.title}</h3>

            {item.text && <p className="tick-card-text">{item.text}</p>}
          </Reveal>
        );
      })}
    </div>
  );
}

export default CardGrid;
