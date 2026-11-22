import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-asphalt text-panel">
      <a
        href="#main"
        className="sr-only z-[60] bg-panel px-4 py-2 font-label font-bold uppercase text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
