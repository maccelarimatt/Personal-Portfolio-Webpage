import classNames from 'classnames';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { floorsAscending } from '../data/floors';
import { profile } from '../data/profile';
import FloorSign from './Sign';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-steel bg-asphalt">
      <nav aria-label="Main" className="container flex h-14 items-center justify-between gap-6">
        <Link
          to="/"
          className="sign-text flex h-9 items-center bg-panel px-3 text-[1.625rem] text-ink no-underline transition-colors duration-75 hover:bg-neon hover:text-panel"
        >
          {profile.name}
        </Link>

        <ul className="m-0 hidden list-none items-stretch gap-1 p-0 lg:flex">
          {floorsAscending.map((f) => (
            <li key={f.to}>
              <NavLink
                to={f.to}
                className={({ isActive }) =>
                  classNames(
                    'flex h-9 items-center gap-2 px-3 font-label text-[0.9375rem] font-bold uppercase tracking-[0.08em] no-underline transition-colors duration-75',
                    isActive ? 'bg-neon text-panel' : 'text-panel hover:bg-panel hover:text-ink',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={isActive ? 'text-panel' : 'text-lantern'}>{f.floor}</span>
                    {f.label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
          <li className="ml-3 flex items-center border-l border-steel pl-4">
            <a
              href={profile.links.cv}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 items-center border-2 border-panel px-3 font-label text-[0.9375rem] font-bold uppercase tracking-[0.08em] text-panel no-underline transition-colors duration-75 hover:bg-panel hover:text-ink"
            >
              CV (PDF)
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="floor-menu"
          className="flex h-10 w-10 items-center justify-center border-2 border-panel text-panel lg:hidden"
        >
          {open ? <X size={20} strokeWidth={2.25} /> : <Menu size={20} strokeWidth={2.25} />}
        </button>
      </nav>

      {open && (
        <div id="floor-menu" className="border-t border-steel bg-asphalt lg:hidden">
          <ul className="container m-0 flex list-none flex-col gap-1.5 py-4" onClick={() => setOpen(false)}>
            {[...floorsAscending].reverse().map((f) => (
              <li key={f.to}>
                <FloorSign
                  floor={f.floor}
                  label={f.label}
                  to={f.to}
                  lit={location.pathname === f.to}
                />
              </li>
            ))}
            <li className="mt-2">
              <a
                href={profile.links.cv}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 items-center justify-center border-2 border-panel font-label font-bold uppercase tracking-[0.08em] text-panel no-underline"
              >
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
