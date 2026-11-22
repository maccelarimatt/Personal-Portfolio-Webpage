import classNames from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FloorSignProps {
  floor: string;
  label: ReactNode;
  spec?: ReactNode;
  to?: string;
  /** Red panel: the open or current floor. */
  lit?: boolean;
  /** Larger module used as a page or section heading. */
  size?: 'module' | 'heading';
  as?: 'h1' | 'h2' | 'span';
  powerDelay?: number;
  onActivate?: () => void;
  onDeactivate?: () => void;
  tabIndex?: number;
  className?: string;
}

/**
 * The one sign module the whole site repeats: floor cell, backlit panel, spec cell.
 */
const FloorSign = ({
  floor,
  label,
  spec,
  to,
  lit = false,
  size = 'module',
  as = 'span',
  powerDelay,
  onActivate,
  onDeactivate,
  tabIndex,
  className,
}: FloorSignProps) => {
  const Title = as;
  const heading = size === 'heading';
  const style = powerDelay !== undefined ? ({ '--power-delay': `${powerDelay}ms` } as CSSProperties) : undefined;

  const body = (
    <>
      <span
        className={classNames(
          'flex shrink-0 items-center justify-center border-r border-steel font-label font-bold tabular-nums',
          heading ? 'w-16 text-2xl md:w-24 md:text-3xl' : 'w-14 text-xl md:w-16',
          lit ? 'text-panel' : 'text-lantern',
        )}
      >
        {floor}
      </span>
      <span
        className={classNames(
          'flex min-w-0 flex-1 transition-colors duration-75',
          heading
            ? 'items-center px-4 py-3 md:px-6'
            : 'flex-col justify-center px-4 py-1.5 sm:flex-row sm:items-center sm:justify-start sm:py-0',
          lit ? 'bg-neon text-panel' : 'bg-panel text-ink',
          to && !lit && 'group-hover:bg-neon group-hover:text-panel group-focus-visible:bg-neon group-focus-visible:text-panel',
          powerDelay !== undefined && 'power-on',
        )}
        style={style}
      >
        <Title
          className={classNames(
            'sign-text',
            heading ? 'text-[2.75rem] sm:text-5xl md:text-7xl' : 'truncate text-[2rem] md:text-[2.5rem]',
          )}
        >
          {label}
        </Title>
        {spec && !heading && (
          <span
            className={classNames(
              'mt-0.5 font-label text-xs font-bold uppercase leading-tight tracking-[0.06em] sm:hidden',
              lit ? 'text-panel' : 'text-ink-soft',
              to && !lit && 'group-hover:text-panel group-focus-visible:text-panel',
            )}
          >
            {spec}
          </span>
        )}
      </span>
      {spec && (
        <span
          className={classNames(
            'hidden w-[15rem] shrink-0 items-center px-4 font-label text-sm font-semibold uppercase leading-tight tracking-[0.06em] sm:flex',
            lit ? 'text-panel' : 'text-ash',
          )}
        >
          {spec}
        </span>
      )}
    </>
  );

  const frame = classNames(
    'group flex border border-steel bg-street',
    heading ? 'min-h-[5rem] md:min-h-[7rem]' : 'min-h-[3.75rem] sm:h-16',
    lit && 'border-neon bg-neon',
    className,
  );

  if (to) {
    return (
      <Link
        to={to}
        className={classNames(frame, 'no-underline focus-visible:outline-offset-2')}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        tabIndex={tabIndex}
      >
        {body}
      </Link>
    );
  }

  return <div className={frame}>{body}</div>;
};

export default FloorSign;
