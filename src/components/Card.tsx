import classNames from 'classnames';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  className?: string;
  actions?: ReactNode;
  children: ReactNode;
}

const Card = ({ title, subtitle, actions, children, className }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className={classNames(
      'relative overflow-hidden rounded-glass border border-border/70 bg-surface/70 p-5 shadow-card backdrop-blur',
      'before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-60',
      className,
    )}
  >
    <div className="relative flex items-start justify-between gap-2">
      <div>
        {subtitle && <p className="text-xs uppercase tracking-[0.2em] text-accent">{subtitle}</p>}
        {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
    <div className="relative mt-3 text-sm text-muted">{children}</div>
  </motion.div>
);

export default Card;
