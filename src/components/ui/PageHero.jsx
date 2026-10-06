import "./PageHero.css";

/**
 * Navy blueprint hero used at the top of every inner page.
 * Wrap accent words in the title with <em> to colour them orange.
 */
function PageHero({ eyebrow = "TOTAL FACILITY GROUP", title, lead, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <p className="eyebrow hero-in" style={{ "--i": 0 }}>
          {eyebrow}
        </p>

        <h1 className="page-hero-title hero-in" style={{ "--i": 1 }}>
          {title}
        </h1>

        {lead && (
          <p className="page-hero-lead hero-in" style={{ "--i": 2 }}>
            {lead}
          </p>
        )}

        {children && (
          <div className="page-hero-actions hero-in" style={{ "--i": 3 }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export default PageHero;
