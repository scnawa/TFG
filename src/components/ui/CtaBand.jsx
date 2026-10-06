import { PHONE } from "../../siteConfig";
import Button from "./Button";
import Reveal from "./Reveal";
import "./CtaBand.css";

/**
 * Closing call-to-action band used at the foot of each page.
 * Wrap accent words in the title with <em>.
 */
function CtaBand({
  eyebrow,
  title,
  text,
  action = "CONTACT TFG",
  to = "/contact-page",
}) {
  return (
    <section className="cta-band">
      <Reveal className="cta-band-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}

        <h2 className="cta-band-title">{title}</h2>

        {text && <p className="cta-band-text">{text}</p>}

        <div className="cta-band-actions">
          <Button to={to} tilt>
            {action}
          </Button>

          <a className="cta-band-phone" href={PHONE.href}>
            OR CALL <span>{PHONE.display}</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default CtaBand;
