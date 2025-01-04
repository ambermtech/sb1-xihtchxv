import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ProjectCarousel from './components/ProjectCarousel';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] relative">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <main className="container mx-auto pt-20 px-4">
              <AboutSection />
              <ProjectCarousel />
            </main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;