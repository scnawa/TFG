import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

/**
 * Fades its content up the first time it scrolls into view.
 * Motion is disabled automatically under prefers-reduced-motion.
 */
function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  // Pages loaded in a hidden tab skip the animation, so content is never
  // left invisible waiting for an observer that hasn't run yet.
  const [visible, setVisible] = useState(
    () => typeof document !== "undefined" && document.visibilityState === "hidden"
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
