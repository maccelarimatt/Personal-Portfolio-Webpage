import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RotatingWordsProps {
  words: string[];
  interval?: number;
}

export const RotatingWords = ({ words, interval = 2600 }: RotatingWordsProps) => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduceMotion]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom" aria-live="polite">
      {/* Invisible copies reserve the width of the longest word so surrounding text never shifts. */}
      {words.map((word) => (
        <span key={word} className="invisible col-start-1 row-start-1" aria-hidden="true">
          {word}
        </span>
      ))}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 bg-gradient-to-r from-accent to-accent-strong bg-clip-text text-transparent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

interface MarqueeRowProps {
  words: string[];
  reverse?: boolean;
  duration?: number;
}

const MarqueeRow = ({ words, reverse, duration = 40 }: MarqueeRowProps) => (
  <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    {/* Two identical tracks: the animation slides by one track width, so the loop is seamless. */}
    {[0, 1].map((copy) => (
      <ul
        key={copy}
        aria-hidden={copy === 1}
        className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {words.map((word) => (
          <li
            key={word}
            className="flex items-center gap-4 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-white/70 md:text-base"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent-strong" />
          </li>
        ))}
      </ul>
    ))}
  </div>
);

interface WordBannerProps {
  rows: string[][];
}

const WordBanner = ({ rows }: WordBannerProps) => (
  <div className="relative space-y-4 border-y border-border/60 bg-surface/40 py-6 backdrop-blur">
    {rows.map((words, idx) => (
      <MarqueeRow key={idx} words={words} reverse={idx % 2 === 1} duration={45 + idx * 10} />
    ))}
  </div>
);

export default WordBanner;
