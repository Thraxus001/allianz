import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ProductsIndex from "./pages/products/ProductsIndex";
import ProductDetail from "./pages/products/ProductDetail";
import ServicesIndex from "./pages/products/ServicesIndex";
import ServiceDetail from "./pages/products/ServiceDetail";
import FAQs from "./pages/FAQs";
import Clients from "./pages/Clients";
import Projects from "./pages/Projects";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      {loading && <LoadingScreen />}
      <ScrollToTop />
      <div
        className={`min-h-screen transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
