import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 40,
  as,
  ...rest
}) {
  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  const offset =
    direction === 'up' ? distance : direction === 'down' ? -distance : 0;
  const offsetX =
    direction === 'left' ? -distance : direction === 'right' ? distance : 0;

  const Component = motion[as || 'div'];

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={control}
      variants={{
        hidden: { opacity: 0, y: offset, x: offsetX },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration, delay, ease: 'easeOut' },
        },
      }}
      {...rest}>
      {children}
    </Component>
  );
}
