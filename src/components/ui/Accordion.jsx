import "./Accordion.css";

/**
 * Question/answer list built on native <details>, so it works with
 * keyboard and screen readers without extra state.
 *
 * items: [{ q, a }]
 */
function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <details className="accordion-item" key={item.q}>
          <summary>
            <span>{item.q}</span>
            <span className="accordion-icon" aria-hidden="true" />
          </summary>

          <p className="accordion-answer">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export default Accordion;
