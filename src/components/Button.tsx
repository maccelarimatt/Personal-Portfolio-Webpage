import classNames from 'classnames';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'ghost';

interface ButtonProps
  extends Pick<HTMLMotionProps<'button'>, 'type' | 'disabled' | 'onClick' | 'onMouseEnter' | 'onMouseLeave'> {
  label: string;
  variant?: Variant;
  icon?: ReactNode;
  href?: string;
  to?: string;
  target?: string;
}

const MotionLink = motion(Link);

const baseClasses =
  'relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-accent to-accent-strong text-white shadow-glow hover:brightness-110 active:scale-[0.98]',
  ghost:
    'border border-border/80 bg-surface/70 text-white hover:border-accent/60 hover:text-accent active:scale-[0.98]',
};

const Button = ({ label, variant = 'primary', icon, href, to, target, ...props }: ButtonProps) => {
  const content = (
    <>
      <span>{label}</span>
      {icon ?? <ArrowUpRight size={16} />}
    </>
  );

  if (to) {
    return (
      <MotionLink
        to={to}
        target={target}
        className={classNames(baseClasses, variants[variant])}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel="noreferrer"
        className={classNames(baseClasses, variants[variant])}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      {...props}
      className={classNames(baseClasses, variants[variant])}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;
