import { useEffect, useRef, useState } from "react";

export default function Counter({ target, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (reduceMotion) {
          setValue(target);
          observer.unobserve(el);
          return;
        }
        const duration = 1600;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setValue(target * eased);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const display = isDecimal ? value.toFixed(1) : Math.round(value);

  return (
    <span ref={ref} className="counter">
      {display}
      {suffix}
    </span>
  );
}
