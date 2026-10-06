import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Site-wide button / call-to-action.
 *
 * variant: "primary" (orange stamp) | "outline"
 * tone:    "light" (on paper) | "dark" (on navy)
 * tilt:    rotate slightly, like a stamped mark (hero use only)
 * arrow:   append an animated arrow
 *
 * Renders a router <Link> when `to` is set, an <a> when `href` is set,
 * otherwise a <button>.
 */
function Button({
  to,
  href,
  variant = "primary",
  tone = "light",
  tilt = false,
  arrow = false,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "btn",
    `btn-${variant}`,
    `btn-on-${tone}`,
    tilt && "btn-tilt",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="btn-arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}

export default Button;
