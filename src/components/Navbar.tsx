import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Palette, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAccent } from '../context/AccentContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/papers', label: 'Research' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { accent, toggleAccent } = useAccent();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-surface/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white no-underline">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent-strong shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_40%)]" />
          </div>
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Matthew</p>
            <p className="text-lg font-semibold text-white">Maccelari</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                classNames(
                  'relative rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-white' : 'text-muted hover:text-white',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-0 rounded-full bg-accent/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={toggleAccent}
            className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted transition hover:border-accent/50 hover:text-white"
          >
            <Palette size={16} />
            <span className="hidden lg:inline">Accent</span>
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] text-white">
              {accent === 'ocean' ? 'Neon' : 'Aurora'}
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex items-center gap-2 rounded-lg border border-border/80 bg-surface/80 p-2 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-t border-border/60 bg-surface/80 md:hidden"
          >
            <div className="container flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    classNames(
                      'flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium no-underline',
                      isActive
                        ? 'bg-accent-soft text-white'
                        : 'text-muted hover:bg-white/5 hover:text-white',
                    )
                  }
                >
                  <Sparkles size={16} className="text-accent" />
                  {link.label}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={toggleAccent}
                className="mt-2 flex items-center gap-2 rounded-xl border border-border/70 px-3 py-3 text-left text-sm font-semibold text-muted hover:border-accent/60 hover:text-white"
              >
                <Palette size={16} />
                Accent Palette: {accent === 'ocean' ? 'Neon Blue' : 'Aurora Cyan'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
