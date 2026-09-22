import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import Tag from '../components/Tag';
import WordBanner, { RotatingWords } from '../components/WordBanner';
import { profile, stats } from '../data/profile';

const highlightItems = [
  {
    title: 'Research',
    description:
      'Wave-optics turbulence modelling and neural channel prediction for hybrid free-space optical and TV White Space links.',
    link: '/papers',
  },
  {
    title: 'Projects',
    description:
      'From a live e-commerce platform to quantum kernel SVMs, lab digital twins and a 100 kb/s light-based data link.',
    link: '/projects',
  },
  {
    title: 'Achievements',
    description:
      'IEEE Computer Society global finalist, national cyber security podium, and Protea colours in kayak sprint.',
    link: '/achievements',
  },
];

const roles = [
  'Photonics Researcher',
  'ML Engineer',
  'Radio Systems Builder',
  'Software Engineer',
  'Science Communicator',
  'Protea Athlete',
];

const bannerRows = [
  [
    'Free-Space Optics',
    'Atmospheric Turbulence',
    'Channel Prediction',
    'Digital Twins',
    'Software-Defined Radio',
    'TV White Space',
    'Rural Connectivity',
    'GNU Radio',
  ],
  [
    'PyTorch',
    'Wave-Optics Simulation',
    'Quantum Machine Learning',
    'Cybersecurity',
    'IEEE Global Finalist',
    '2nd of 112',
    'Science Outreach',
    'Protea Colours',
  ],
];

const HomePage = () => (
  <PageTransition>
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,rgba(76,201,240,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.18),transparent_35%)]" />
      <section className="container relative mx-auto grid min-h-[70vh] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            <Radio size={16} />
            MSc (Eng) Candidate · Wits Optical Communication Lab
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              {profile.name}
              <span className="mt-2 block text-2xl font-semibold md:text-3xl">
                <RotatingWords words={roles} />
              </span>
            </h1>
            <p className="text-lg text-muted md:text-xl">
              I build machine learning that anticipates turbulence-induced fades on free-space optical links,
              so radio systems can adapt <span className="text-white">before</span> the channel degrades,
              supporting affordable rural connectivity in South Africa.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button label="View Research" to="/papers" />
            <Button
              label="Download CV"
              href={profile.links.cv}
              target="_blank"
              icon={<Download size={16} />}
              variant="ghost"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="font-semibold text-white">Connect:</span>
            <a
              className="flex items-center gap-2 rounded-full border border-border/70 px-3 py-2 text-muted transition hover:border-accent/60 hover:text-white"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              className="flex items-center gap-2 rounded-full border border-border/70 px-3 py-2 text-muted transition hover:border-accent/60 hover:text-white"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <Tag>Photonics</Tag>
            <Tag>PyTorch</Tag>
            <Tag>GNU Radio</Tag>
            <Tag>Signal Processing</Tag>
            <Tag>Quantum ML</Tag>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-accent-strong/30 blur-3xl" />
            <div className="rounded-[1.75rem] bg-gradient-to-br from-accent/60 via-white/10 to-accent-strong/60 p-[2px] shadow-glow">
              <img
                src={profile.photos.portrait}
                alt="Portrait of Matthew Maccelari"
                width={720}
                height={961}
                className="aspect-[3/4] w-full rounded-[calc(1.75rem-2px)] bg-white object-cover object-top"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 left-4 right-4 rounded-xl border border-border/60 bg-surface p-4 text-sm shadow-card md:-left-10 md:right-auto md:w-[85%]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Now</p>
              <p className="mt-1 text-white">
                Turning a physics-validated FSO digital twin into a real-time channel emulator on the lab's 800 m
                outdoor link.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <WordBanner rows={bannerRows} />

      <section className="container mx-auto pt-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="rounded-2xl border border-border/70 bg-surface/70 p-5 shadow-card backdrop-blur"
            >
              <p className="bg-gradient-to-r from-accent to-accent-strong bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Section
        title="Highlights"
        eyebrow="What I work on"
        description="Photonics, machine learning and radio systems engineering, grounded in real hardware and real deployments."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlightItems.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              subtitle="Explore"
              actions={
                <Link to={item.link} className="text-sm font-semibold text-accent">
                  View
                </Link>
              }
            >
              {item.description}
            </Card>
          ))}
        </div>
      </Section>
    </div>
  </PageTransition>
);

export default HomePage;
