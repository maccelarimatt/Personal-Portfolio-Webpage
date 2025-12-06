import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import { competitions } from '../data/competitions';

const CompetitionsPage = () => (
  <PageTransition>
    <Section
      title="Competitions & Achievements"
      eyebrow="On the record"
      description="Moments where engineering met competition — from cybersecurity challenges to buildathons."
    >
      <Timeline
        items={competitions.map((item) => ({
          title: item.name,
          period: item.year.toString(),
          description: item.description,
          badge: item.placement,
        }))}
      />
    </Section>
  </PageTransition>
);

export default CompetitionsPage;
