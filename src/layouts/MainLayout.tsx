import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div className="relative flex min-h-screen flex-col text-white">
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-accent-strong/10 blur-3xl" />
    </div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default MainLayout;
