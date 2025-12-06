import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import Tag from '../components/Tag';
import Timeline from '../components/Timeline';
import { education, skills } from '../data/profile';

const AboutPage = () => (
  <PageTransition>
    <Section
      title="About"
      eyebrow="Who I am"
      description="Electrical & Information Engineering student curious about embedded security, cryptography, and the interfaces between hardware and cloud."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-border/70 bg-surface/70 p-6 shadow-card backdrop-blur"
        >
          <p className="text-lg text-white">
            I enjoy taking complex systems and distilling them into reliable, well-instrumented products.
            Whether it is a low-level bootloader, a cryptography benchmark harness, or a polished UI, I lean on
            principled engineering and calm, intentional visuals.
          </p>
          <p className="mt-3 text-muted">
            Outside coursework, I experiment with embedded security patterns, benchmark PQC implementations,
            and prototype dashboards that make technical insights accessible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-2xl border border-border/70 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-card backdrop-blur"
        >
          <h3 className="text-lg font-semibold text-white">Skills snapshot</h3>
          <div className="mt-3 space-y-3 text-sm text-muted">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Programming</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Domains</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.domains.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Tools</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>

    <Section
      title="Education"
      eyebrow="Path so far"
      description="A concise timeline of my academic journey and focus areas."
      className="pb-20"
    >
      <Timeline
        items={education.map((item) => ({
          title: item.institution,
          subtitle: item.program,
          period: item.period,
          description: item.details,
          badge: 'Engineering',
        }))}
      />
    </Section>
  </PageTransition>
);

export default AboutPage;
