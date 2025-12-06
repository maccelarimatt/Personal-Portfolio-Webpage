import { motion } from 'framer-motion';
import { ArrowDownCircle, Download, Github, Linkedin } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import Tag from '../components/Tag';

const highlightItems = [
  {
    title: 'Projects',
    description: 'Systems engineering, embedded security, and full-stack tooling with clean UX.',
    link: '/projects',
  },
  {
    title: 'Papers',
    description: 'Research notes and academic writing across cryptography and signal processing.',
    link: '/papers',
  },
  {
    title: 'Competitions',
    description: 'Hackathons and cybersecurity challenges with podium finishes.',
    link: '/competitions',
  },
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
            <ArrowDownCircle size={16} />
            Electrical & Information Engineering Student
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Matthew Maccelari
            </h1>
            <p className="text-lg text-muted md:text-xl">
              Passionate about embedded systems, cybersecurity, cryptography, and software engineering.
              Building resilient tools with intentional design and smooth motion.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button label="View Projects" to="/projects" />
            <Button
              label="Download CV"
              href="/cv.pdf"
              icon={<Download size={16} />}
              variant="ghost"
            />
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="font-semibold text-white">Connect:</span>
            <a
              className="flex items-center gap-2 rounded-full border border-border/70 px-3 py-2 text-muted transition hover:border-accent/60 hover:text-white"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              className="flex items-center gap-2 rounded-full border border-border/70 px-3 py-2 text-muted transition hover:border-accent/60 hover:text-white"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <Tag>Embedded</Tag>
            <Tag>Cybersecurity</Tag>
            <Tag>Cryptography</Tag>
            <Tag>Signal Processing</Tag>
            <Tag>Web Engineering</Tag>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md rounded-2xl border border-border/60 bg-surface/80 p-6 shadow-card backdrop-blur">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-accent-strong/20 blur-3xl" />
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Focus Areas</p>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-white">
                Always exploring
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {['Embedded Systems', 'Cyber Defense', 'PQC', 'UX Engineering'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-border/70 bg-white/5 p-4 text-sm font-semibold text-white/90 shadow-card"
                >
                  {item}
                </motion.div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-border/60 bg-gradient-to-r from-accent/10 via-transparent to-accent-strong/10 p-4 text-sm text-muted">
              <p className="text-white">
                Currently building secure, smooth experiences that bridge hardware and cloud dashboards.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Section
        title="Highlights"
        eyebrow="What I ship"
        description="A quick glance at the work I gravitate toward — robust systems, clear UX, and well-documented research."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlightItems.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              subtitle="Featured"
              actions={
                <a href={item.link} className="text-sm font-semibold text-accent">
                  Explore
                </a>
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
