import classNames from 'classnames';
import type { ReactNode } from 'react';

interface PlateProps {
  children: ReactNode;
  /** lit: solid red plate (settled or open). Default: outlined, unlit. */
  tone?: 'lit' | 'unlit' | 'panel';
  className?: string;
}

/** A small rectangular label plate, the sign world's tag. */
const Plate = ({ children, tone = 'unlit', className }: PlateProps) => (
  <span
    className={classNames(
      'inline-flex items-center px-2 py-0.5 font-label text-[0.8125rem] font-bold uppercase leading-5 tracking-[0.08em]',
      tone === 'lit' && 'bg-neon text-panel',
      tone === 'panel' && 'bg-panel text-ink',
      tone === 'unlit' && 'border border-steel text-ash',
      className,
    )}
  >
    {children}
  </span>
);

export default Plate;
