import { ArrowRight, Download, Mail } from 'lucide-react';
import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Lightbox from '../components/Lightbox';
import PageTransition from '../components/PageTransition';
import Plate from '../components/Plate';
import FloorSign from '../components/Sign';
import { competitions } from '../data/competitions';
import { floors } from '../data/floors';
import { papers } from '../data/papers';
import { experience, profile } from '../data/profile';
import { projects } from '../data/projects';

const leadProject = projects.find((p) => p.id === 'fso-digital-twin');
const otherProjects = ['pureherb', 'fso-demonstrator']
  .map((id) => projects.find((p) => p.id === id))
  .filter((p): p is (typeof projects)[number] => Boolean(p));

/* Power-on order: ground sign first, then each floor upward. */
const POWER_STEP = 140;

interface SpineProps {
  hovered: string | null;
  setHovered?: (floor: string | null) => void;
  mirror?: boolean;
}

const FloorStack = ({ hovered, setHovered, mirror }: SpineProps) => (
  <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
    {floors.map((f, i) => (
      <li key={f.floor}>
        <FloorSign
          floor={f.floor}
          label={f.label}
          spec={f.spec}
          to={f.to}
          lit={f.open || hovered === f.floor}
          powerDelay={(floors.length - i) * POWER_STEP}
          onActivate={setHovered ? () => setHovered(f.floor) : undefined}
          onDeactivate={setHovered ? () => setHovered(null) : undefined}
          tabIndex={mirror ? -1 : undefined}
        />
      </li>
    ))}
  </ul>
);

const GroundSign = ({ mirror }: { mirror?: boolean }) => {
  const Title = mirror ? 'p' : 'h1';
  return (
    <div className="border border-steel bg-street">
      <div className="power-on bg-panel px-5 pb-4 pt-5 text-ink md:px-7 md:pt-6" style={{ '--power-delay': '0ms' } as CSSProperties}>
        <Title className="sign-text text-[3.75rem] sm:text-7xl">{profile.name}</Title>
      </div>
      <p className="m-0 flex min-h-[3rem] items-center bg-neon px-5 py-2 font-label text-base font-bold uppercase leading-tight tracking-[0.08em] text-panel md:px-7 md:text-lg">
        {profile.headline}
      </p>
    </div>
  );
};

const HomePage = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <PageTransition>
      {/* First viewport: the building, its reflection, and the way in. */}
      <section className="container grid grid-cols-1 gap-x-12 gap-y-8 pb-6 pt-8 [grid-template-areas:'ground'_'copy'_'floors'_'photo'] md:pt-10 lg:grid-cols-[7fr_5fr] lg:gap-y-1.5 lg:[grid-template-areas:'floors_photo'_'ground_copy'_'reflect_copy']">
        <nav aria-label="Floors" className="self-end [grid-area:floors]">
          <FloorStack hovered={hovered} setHovered={setHovered} />
        </nav>

        <div className="[grid-area:ground]">
          <GroundSign />
        </div>

        {/* The wet street doubles the building. Decorative: hidden from assistive tech and focus. */}
        <div
          aria-hidden="true"
          inert
          className="pointer-events-none hidden h-40 select-none border-t border-steel bg-street shadow-[0_0_0_100vmax_var(--street)] [clip-path:inset(0_-100vmax)] [grid-area:reflect] lg:block"
        >
          <div className="h-full overflow-hidden [mask-image:linear-gradient(to_bottom,#000_0%,transparent_90%)]">
            <div className="origin-top opacity-[0.22] [filter:url(#wet-street)]" style={{ transform: 'scaleY(-1) translateY(-100%)' }}>
              <FloorStack hovered={hovered} mirror />
              <div className="mt-1.5">
                <GroundSign mirror />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 self-end [grid-area:photo]">
          <Lightbox
            src={profile.photos.portrait}
            alt="Portrait of Matthew Maccelari"
            aspect="portrait"
            width={720}
            height={961}
            eager
            className="w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-[18rem]"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-6 [grid-area:copy] lg:pt-1">
          <div className="border-t-2 border-lantern pt-4">
            <p className="m-0 text-panel">
              <Plate tone="lit" className="mr-2 align-[0.1em]">
                Now
              </Plate>
              Turning a physics-validated FSO digital twin into a real-time channel emulator on the lab's 800 m outdoor
              link.
            </p>
          </div>
          <p className="text-lg text-ash">
            I build machine learning that anticipates turbulence-induced fades on free-space optical links, so radio
            systems can adapt <em className="not-italic text-panel">before</em> the channel degrades, supporting
            affordable rural connectivity in South Africa.
          </p>
          <div className="flex flex-wrap gap-3" data-hero-actions>
            <Button label="Email Matthew" href={`mailto:${profile.email}`} icon={<Mail size={18} strokeWidth={2.25} />} />
            <Button
              label="Download CV"
              variant="secondary"
              href={profile.links.cv}
              target="_blank"
              icon={<Download size={18} strokeWidth={2.25} />}
            />
          </div>
        </div>
      </section>

      {/* SVG filter for the reflection's rain ripple. */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <filter id="wet-street" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5 7" result="streak" />
          <feTurbulence type="fractalNoise" baseFrequency="0.002 0.045" numOctaves="2" seed="7" result="rain" />
          <feDisplacementMap in="streak" in2="rain" scale="12" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* 1F Research */}
      <section className="container pb-14 pt-12 md:pt-16">
        <FloorSign floor="1F" label="Research" size="heading" as="h2" to="/papers" />
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <p className="max-w-measure text-xl leading-relaxed text-panel">{profile.summary}</p>
          <ul className="m-0 list-none p-0">
            {papers.map((paper) => (
              <li key={paper.id} className="border-t border-rule py-5 first:border-t-2 first:border-panel">
                <div className="flex flex-wrap items-center gap-2">
                  <Plate tone={paper.status === 'In progress' ? 'unlit' : 'lit'}>{paper.status}</Plate>
                  <span className="label text-ash">{paper.year}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold leading-snug">{paper.title}</h3>
                <p className="mt-1 text-ash">{paper.venue}</p>
              </li>
            ))}
            <li className="border-t border-rule pt-5">
              <Link to="/papers" className="text-link">
                Abstracts and status <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 2F Projects */}
      <section className="container py-14">
        <FloorSign floor="2F" label="Projects" size="heading" as="h2" to="/projects" />
        {leadProject && (
          <article className="mt-10 grid grid-cols-1 gap-8 border-t-2 border-panel pt-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Plate tone="panel">{leadProject.category}</Plate>
                <span className="label text-ash">{leadProject.role}</span>
              </div>
              <h3 className="mt-4 text-3xl font-bold leading-tight">{leadProject.title}</h3>
              <p className="mt-4 max-w-measure text-lg text-ash">{leadProject.summary}</p>
              <p className="mt-5 font-label font-semibold uppercase tracking-[0.06em] text-ash">
                {leadProject.tech.join(' · ')}
              </p>
            </div>
            {leadProject.highlight && (
              <p className="sign-text m-0 self-center text-[3rem] text-lantern sm:text-6xl xl:text-7xl">
                {leadProject.highlight}
              </p>
            )}
          </article>
        )}
        <ul className="m-0 mt-10 grid list-none grid-cols-1 gap-x-16 p-0 md:grid-cols-2">
          {otherProjects.map((project) => (
            <li key={project.id} className="border-t border-rule py-6">
              <div className="flex flex-wrap items-center gap-2">
                <Plate tone="panel">{project.category}</Plate>
                <span className="label text-ash">{project.role}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold leading-tight">{project.title}</h3>
              <p className="mt-3 text-ash">{project.summary}</p>
              {project.highlight && (
                <p className="mt-4 font-label text-lg font-bold uppercase leading-snug tracking-[0.04em] text-lantern">
                  {project.highlight}
                </p>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-rule pt-5">
          <Link to="/projects" className="text-link">
            All six projects <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 3F About */}
      <section className="container py-14">
        <FloorSign floor="3F" label="About" size="heading" as="h2" to="/about" />
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Lightbox
            src="/images/graduation.webp"
            alt="Matthew being hooded on stage at his Wits BSc (Eng) graduation ceremony"
            caption="BSc (Eng) Electrical (Information) Engineering · Wits, 2025"
            aspect="wide"
            className="self-start"
          />
          <div className="max-w-measure">
            <p className="text-xl leading-relaxed text-panel">{profile.summaryExtra}</p>
            <p className="mt-4 text-lg text-ash">
              Away from the lab I have represented South Africa in kayak sprint, earning Protea colours at the 2021
              Junior and U23 World Championships.
            </p>
            <ul className="m-0 mt-8 list-none border-t-2 border-panel p-0">
              {experience.map((item) => (
                <li key={item.organisation} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-rule py-3">
                  <span className="font-bold">{item.organisation}</span>
                  <span className="label text-ash">{item.period}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="text-link mt-6">
              Experience, education and outreach <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4F Record: a results board, not stat tiles. */}
      <section className="container py-14">
        <FloorSign floor="4F" label="Record" size="heading" as="h2" to="/achievements" />
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Competitions and awards</caption>
            <thead className="hidden md:table-header-group">
              <tr className="border-b-2 border-panel">
                <th scope="col" className="label w-20 pb-2 font-semibold text-ash">Year</th>
                <th scope="col" className="label w-44 pb-2 font-semibold text-ash">Result</th>
                <th scope="col" className="label pb-2 font-semibold text-ash">Event</th>
              </tr>
            </thead>
            <tbody>
              {competitions.map((c) => (
                <tr
                  key={c.id}
                  className="grid grid-cols-[4rem_minmax(0,1fr)] gap-y-1 border-b border-rule py-3.5 align-baseline first:border-t-2 first:border-t-panel md:table-row md:py-0 md:first:border-t-0"
                >
                  <td className="font-label text-lg font-bold text-lantern md:py-3.5 md:pr-4">{c.year}</td>
                  <td className="font-label text-lg font-bold uppercase leading-tight tracking-[0.04em] md:py-3.5 md:pr-4">
                    {c.placement}
                  </td>
                  <td className="col-start-2 leading-snug text-panel md:py-3.5">{c.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Lightbox
            src="/images/kayak-protea.webp"
            alt="Matthew racing a K2 sprint kayak in South African colours at the 2021 World Championships"
            caption="Protea colours · 2021 Junior & U23 Kayak Sprint Worlds, Portugal"
            aspect="portrait"
            className="self-start"
          />
        </div>
        <div className="mt-8 border-t border-rule pt-5">
          <Link to="/achievements" className="text-link">
            Full record with photos <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 5F Contact: the close. */}
      <section className="container pb-20 pt-14">
        <FloorSign floor="5F" label="Contact" size="heading" as="h2" lit />
        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="sign-text text-[clamp(2rem,9.5vw,4.5rem)] text-panel no-underline transition-colors duration-75 [overflow-wrap:anywhere] hover:text-lantern"
            >
              {profile.email}
            </a>
            <p className="mt-4 max-w-measure text-lg text-ash">
              Open to research collaborations in free-space optics, channel modelling and applied ML, and to
              conversations about future engineering roles.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button label="Email Matthew" href={`mailto:${profile.email}`} icon={<Mail size={18} strokeWidth={2.25} />} />
            <Button label="Contact details" variant="secondary" to="/contact" icon={<ArrowRight size={18} strokeWidth={2.25} />} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;
