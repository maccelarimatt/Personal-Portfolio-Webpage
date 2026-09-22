import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import Card from '../components/Card';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import { papers } from '../data/papers';

const PapersPage = () => (
  <PageTransition>
    <Section
      title="Research & Publications"
      eyebrow="Writing"
      description="Conference submissions and dissertation work from the Wits Optical Communication Laboratory."
    >
      <div className="space-y-4">
        {papers.map((paper, idx) => (
          <Card
            key={paper.id}
            title={paper.title}
            subtitle={`${paper.authors} • ${paper.year}`}
            className="overflow-hidden"
            actions={
              paper.link ? (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-accent hover:text-white"
                >
                  Read
                  <ExternalLink size={14} />
                </a>
              ) : null
            }
          >
            <p className="text-sm leading-relaxed text-muted">{paper.abstract}</p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="mt-4 h-[1px] bg-gradient-to-r from-accent via-accent-strong/50 to-transparent"
            />
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                <BookOpen size={14} />
                {paper.venue}
              </span>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {paper.status}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  </PageTransition>
);

export default PapersPage;
