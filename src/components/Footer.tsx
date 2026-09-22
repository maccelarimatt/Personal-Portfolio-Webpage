import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const socials = [
  { href: profile.links.github, label: 'GitHub', icon: Github },
  { href: profile.links.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: `mailto:${profile.email}`, label: 'Email', icon: Mail },
];

const Footer = () => (
  <footer className="border-t border-border/60 bg-surface/70 backdrop-blur">
    <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-lg font-semibold text-white">Matthew Maccelari</p>
        <p className="text-sm text-muted">Optical communications, applied ML & radio systems · Johannesburg</p>
        <p className="mt-2 text-xs text-muted">© {new Date().getFullYear()} Matthew Maccelari. All rights reserved.</p>
      </div>
      <div className="flex items-center gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-surface/80 text-white transition hover:border-accent/60 hover:text-accent"
          >
            <social.icon size={18} />
            <span className="sr-only">{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
