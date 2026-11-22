import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const links = [
  { href: `mailto:${profile.email}`, label: 'Email', icon: Mail, external: false },
  { href: profile.links.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
  { href: profile.links.github, label: 'GitHub', icon: Github, external: true },
];

const Footer = () => (
  <footer className="border-t border-steel bg-street">
    <div className="container flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="sign-text text-4xl text-panel">{profile.name}</p>
        <p className="mt-2 text-ash">Optical communications, applied ML &amp; radio systems · {profile.location}</p>
        <p className="mt-1 text-sm text-ash">© {new Date().getFullYear()} {profile.name}</p>
      </div>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="flex h-11 items-center gap-2 border border-steel px-4 font-label font-bold uppercase tracking-[0.08em] text-panel no-underline transition-colors duration-75 hover:border-panel hover:bg-panel hover:text-ink"
            >
              <link.icon size={17} strokeWidth={2} aria-hidden="true" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
