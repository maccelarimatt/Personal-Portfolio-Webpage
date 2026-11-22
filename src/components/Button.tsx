import classNames from 'classnames';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary';

interface ButtonProps {
  label: string;
  variant?: Variant;
  icon?: ReactNode;
  href?: string;
  to?: string;
  target?: string;
  download?: boolean;
  className?: string;
}

const base =
  'inline-flex h-12 items-center gap-2.5 px-5 font-label text-base font-bold uppercase tracking-[0.08em] no-underline transition-colors duration-75';

const variants: Record<Variant, string> = {
  primary: 'bg-neon text-panel hover:bg-panel hover:text-ink',
  secondary: 'border-2 border-panel text-panel hover:bg-panel hover:text-ink',
};

const Button = ({ label, variant = 'primary', icon, href, to, target, download, className }: ButtonProps) => {
  const classes = classNames(base, variants[variant], className);
  const content = (
    <>
      <span>{label}</span>
      {icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      download={download || undefined}
      className={classes}
    >
      {content}
    </a>
  );
};

export default Button;
