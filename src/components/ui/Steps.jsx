import Reveal from "./Reveal";
import "./Steps.css";

/**
 * Numbered process steps laid out along a dimension line.
 *
 * items: [[title, text]]
 */
function Steps({ items }) {
  return (
    <ol className="steps">
      {items.map(([title, text], i) => (
        <Reveal as="li" className="step" key={title} delay={(i % 3) * 80}>
          <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="step-title">{title}</h3>
          <p className="step-text">{text}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export default Steps;
