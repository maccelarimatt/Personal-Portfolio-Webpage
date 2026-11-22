import { AnimatePresence, MotionConfig } from 'framer-motion';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/About';
import CompetitionsPage from './pages/Competitions';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import PapersPage from './pages/Papers';
import ProjectsPage from './pages/Projects';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/papers" element={<PapersPage />} />
          <Route path="/achievements" element={<CompetitionsPage />} />
          <Route path="/competitions" element={<Navigate to="/achievements" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </MotionConfig>
);

export default App;
