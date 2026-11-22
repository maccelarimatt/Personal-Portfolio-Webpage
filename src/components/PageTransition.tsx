import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

/** A short cut between floors: the old page goes dark, the new one comes on. */
const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.main
    id="main"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.16, ease: 'linear' }}
    className="flex-1"
  >
    {children}
  </motion.main>
);

export default PageTransition;
