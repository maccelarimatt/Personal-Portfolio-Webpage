import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AccentProvider } from './context/AccentContext';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import PapersPage from './pages/Papers';
import ProjectsPage from './pages/Projects';
import CompetitionsPage from './pages/Competitions';

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
  <AccentProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AccentProvider>
);

export default App;
