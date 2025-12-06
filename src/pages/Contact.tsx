import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      nextErrors.email = 'Valid email required';
    if (!form.message.trim()) nextErrors.message = 'Message cannot be empty';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => setSent(false), 3200);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <PageTransition>
      <Section
        title="Contact"
        eyebrow="Let's talk"
        description="Reach out for collaboration, research, or engineering roles. The form below is a demo — feel free to use the mailto link if you prefer."
        className="pb-16"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-border/70 bg-surface/70 p-6 shadow-card backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Send a message</h3>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-accent">Name</label>
                <input
                  className="mt-2 w-full rounded-xl border border-border/70 bg-transparent px-3 py-3 text-white outline-none ring-0 transition focus:border-accent/80"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-accent">Email</label>
                <input
                  className="mt-2 w-full rounded-xl border border-border/70 bg-transparent px-3 py-3 text-white outline-none ring-0 transition focus:border-accent/80"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="name@email.com"
                  type="email"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-accent">Message</label>
                <textarea
                  className="mt-2 h-32 w-full rounded-xl border border-border/70 bg-transparent px-3 py-3 text-white outline-none ring-0 transition focus:border-accent/80"
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="What would you like to build?"
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button label="Send message" icon={<Send size={16} />} type="submit" />
                <a
                  className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                  href="mailto:matthew@example.com"
                >
                  Prefer email? Use mailto
                </a>
              </div>
            </form>
            <AnimateToast visible={sent} />
          </div>

          <div className="space-y-4 rounded-2xl border border-border/70 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-card backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Stay connected</h3>
            <p className="text-muted">
              I reply quickly to concise, clear requests. Include context and timelines where possible — it helps me
              share the most relevant work samples.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { label: 'GitHub', href: 'https://github.com', icon: Github },
                { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
                { label: 'Email', href: 'mailto:matthew@example.com', icon: Mail },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-white/5 px-4 py-3 text-white transition hover:border-accent/60 hover:text-accent"
                >
                  <item.icon size={18} />
                  {item.label}
                </a>
              ))}
            </div>
            <div className="rounded-xl border border-accent/40 bg-accent-soft px-4 py-3 text-sm text-white">
              Open to internships, research collaborations, and part-time engineering roles focused on secure systems.
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  );
};

const AnimateToast = ({ visible }: { visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent-soft px-4 py-2 text-sm font-semibold text-white"
      >
        <Send size={16} />
        Message sent (demo)
      </motion.div>
    )}
  </AnimatePresence>
);

export default ContactPage;
