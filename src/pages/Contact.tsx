import { Check, Copy, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import { PageHeader } from '../components/Section';
import { profile } from '../data/profile';

const channels = [
  { label: 'LinkedIn', value: 'matthew-maccelari', href: profile.links.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'maccelarimatt', href: profile.links.github, icon: Github },
];

const ContactPage = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <PageTransition>
      <PageHeader
        floor="5F"
        title="Contact"
        intro="Get in touch about research collaboration, optical or radio systems work, or engineering roles."
      />

      <section className="container pb-20">
        <div className="border-t-2 border-panel pt-10">
          <a
            href={`mailto:${profile.email}`}
            className="sign-text block text-[clamp(2rem,9.5vw,6rem)] text-panel no-underline transition-colors duration-75 [overflow-wrap:anywhere] hover:text-lantern"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button label="Write an email" href={`mailto:${profile.email}`} icon={<Mail size={18} strokeWidth={2.25} />} />
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex h-12 items-center gap-2.5 border-2 border-panel px-5 font-label text-base font-bold uppercase tracking-[0.08em] text-panel transition-colors duration-75 hover:bg-panel hover:text-ink"
            >
              {copied ? 'Copied' : 'Copy address'}
              {copied ? <Check size={18} strokeWidth={2.5} /> : <Copy size={18} strokeWidth={2.25} />}
            </button>
            <span role="status" className="sr-only">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <ul className="m-0 list-none border-t border-rule p-0">
            {channels.map((c) => (
              <li key={c.label} className="border-b border-rule">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-5 text-panel no-underline"
                >
                  <span className="flex items-center gap-4">
                    <c.icon size={22} strokeWidth={2} aria-hidden="true" className="text-lantern" />
                    <span className="sign-text text-4xl transition-colors duration-75 group-hover:text-lantern">{c.label}</span>
                  </span>
                  <span className="label text-ash">{c.value}</span>
                </a>
              </li>
            ))}
            <li className="border-b border-rule">
              <a
                href={profile.links.cv}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-5 text-panel no-underline"
              >
                <span className="flex items-center gap-4">
                  <Download size={22} strokeWidth={2} aria-hidden="true" className="text-lantern" />
                  <span className="sign-text text-4xl transition-colors duration-75 group-hover:text-lantern">CV</span>
                </span>
                <span className="label text-ash">PDF</span>
              </a>
            </li>
          </ul>

          <div className="self-start bg-panel p-6 text-ink md:p-8">
            <p className="sign-text text-4xl">Open to</p>
            <p className="mt-3 text-lg leading-relaxed">
              Research collaborations in free-space optics, channel modelling and applied ML, and conversations about
              future engineering roles.
            </p>
            <p className="mt-4 text-ink-soft">
              Based in {profile.location}. Please include context and timelines so I can reply with the most relevant
              work.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
