import "./SectionHeader.css";

/**
 * Eyebrow + heading (+ optional lead) used to open a section.
 *
 * tone:  "light" (on paper) | "dark" (on navy/ink)
 * align: "center" | "left"
 */
function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "center",
  as: Heading = "h2",
  className = "",
}) {
  return (
    <header
      className={`section-header section-header-${tone} section-header-${align} ${className}`.trim()}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className="section-title">{title}</Heading>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}

export default SectionHeader;
