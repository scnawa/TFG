import "./Section.css";

/**
 * Page section with consistent vertical rhythm and content width.
 *
 * tone:    "paper" | "paper-2" | "ink" | "navy"
 * width:   "default" (1100px) | "narrow" (820px)
 * spacing: "default" | "tight"
 */
function Section({
  tone = "paper",
  width = "default",
  spacing = "default",
  className = "",
  children,
  ...rest
}) {
  return (
    <section
      className={`section section-${tone} section-space-${spacing} ${className}`.trim()}
      {...rest}
    >
      <div className={`section-inner section-inner-${width}`}>{children}</div>
    </section>
  );
}

export default Section;
