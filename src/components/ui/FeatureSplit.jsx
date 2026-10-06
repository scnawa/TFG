import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import "./FeatureSplit.css";

/**
 * Two-column media + copy block.
 *
 * media:   an <img> (framed with corner ticks) or any node, e.g. a video
 * reverse: put the media on the right
 * action:  optional node under the copy (usually a Button)
 */
function FeatureSplit({ media, reverse = false, eyebrow, title, action, children }) {
  return (
    <div className={`feature-split ${reverse ? "feature-split-reverse" : ""}`.trim()}>
      <Reveal className="feature-split-media">{media}</Reveal>

      <Reveal className="feature-split-body" delay={120}>
        <SectionHeader eyebrow={eyebrow} title={title} align="left" />

        <div className="feature-split-copy">{children}</div>

        {action && <div className="feature-split-action">{action}</div>}
      </Reveal>
    </div>
  );
}

export default FeatureSplit;
