import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Customers from './pages/Customers';
import PricingPage from './pages/PricingPage';
import EdgeNode from './pages/EdgeNode';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ContactSales from './pages/ContactSales';
import Demo from './pages/Demo';

const GRAPHIK = "'Graphik', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";

/* Scroll to top on every route change (Lenis-aware). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div style={{ fontFamily: GRAPHIK }}>
      <ScrollToTop />
      <AnnouncementBar />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/edge-node" element={<EdgeNode />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
