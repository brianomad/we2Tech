import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function CountUp({
  end,
  duration = 1500,
  suffix = '',
  decimals = 0,
}) {
  const [value, setValue] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((end * eased).toFixed(decimals)));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration, decimals]);

  const display =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString();

  return <span ref={ref}>{display}{suffix}</span>;
}
