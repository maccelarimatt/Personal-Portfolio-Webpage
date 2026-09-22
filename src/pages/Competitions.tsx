import { ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import { competitions } from '../data/competitions';

const CompetitionsPage = () => (
  <PageTransition>
    <Section
      title="Achievements"
      eyebrow="On the record"
      description="Competitions, awards and representative honours, from international security challenges to national sporting colours."
      className="pb-20"
    >
      <Timeline
        items={competitions.map((item) => ({
          title: item.name,
          period: item.year.toString(),
          description: item.description,
          badge: item.placement,
          extra: item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-white"
            >
              Learn more <ExternalLink size={12} />
            </a>
          ) : undefined,
        }))}
      />
    </Section>
  </PageTransition>
);

export default CompetitionsPage;
