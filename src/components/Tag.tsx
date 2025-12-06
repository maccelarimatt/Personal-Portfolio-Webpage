import classNames from 'classnames';
import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  className?: string;
}

const Tag = ({ children, className }: TagProps) => (
  <span
    className={classNames(
      'rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-medium text-white/90 backdrop-blur',
      className,
    )}
  >
    {children}
  </span>
);

export default Tag;
