import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface TimelineEntry {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  badge?: string;
  image?: {
    src: string;
    alt: string;
  };
  extra?: ReactNode;
}

interface TimelineProps {
  items: TimelineEntry[];
}

const Timeline = ({ items }: TimelineProps) => (
  <div className="relative before:absolute before:left-4 before:top-1 before:bottom-1 before:w-px before:bg-gradient-to-b before:from-accent/70 before:to-accent-strong/60 md:before:left-1/2">
    <div className="space-y-8 md:pt-2">
      {items.map((item, index) => (
        <motion.div
          key={item.title + index}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="relative md:flex md:items-start md:gap-6"
        >
          <div className="absolute left-2 top-1 h-3 w-3 rounded-full border-2 border-accent/70 bg-surface md:left-[calc(50%-6px)]" />
          <div className="pl-10 md:w-1/2 md:text-right md:pl-0">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">{item.period}</p>
            <p className="text-lg font-semibold text-white">{item.title}</p>
            {item.subtitle && <p className="text-sm text-muted">{item.subtitle}</p>}
          </div>
          <div className="mt-3 overflow-hidden rounded-xl border border-border/60 bg-surface/70 p-4 text-sm text-muted shadow-card backdrop-blur md:mt-0 md:w-1/2">
            {item.image && (
              <img
                src={item.image.src}
                alt={item.image.alt}
                loading="lazy"
                className="-mx-4 -mt-4 mb-4 aspect-[16/9] w-[calc(100%+2rem)] max-w-none object-cover object-top"
              />
            )}
            <p className="leading-relaxed text-white/90">{item.description}</p>
            {item.badge && (
              <span className="mt-3 inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {item.badge}
              </span>
            )}
            {item.extra && <div className="mt-3">{item.extra}</div>}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Timeline;
