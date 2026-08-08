import React, { useState, useEffect } from 'react';
import WebThreads from './components/WebThreads';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EcosystemExplorer from './components/EcosystemExplorer';
import ConvergenceSection from './components/ConvergenceSection';
import RoadmapSection from './components/RoadmapSection';
import FounderDossier from './components/FounderDossier';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedStartupId, setSelectedStartupId] = useState('sythos');

  // Track active section on window scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'startups', 'convergence', 'roadmap', 'founder', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectStartup = (id) => {
    setSelectedStartupId(id);
    const el = document.getElementById('startups');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh', background: '#000000', overflowX: 'hidden' }}>
      
      {/* Background WebThreads from React Bits with exact image configuration and dynamic linear RGB */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <WebThreads
          color1="#3300ff"
          color2="#ff0598"
          color3="#FFFFFF"
          dynamicColor2={true}
          dynamicColorSpeed={0.06}
          speed={0.2}
          threadCount={6}
          frequency={6.5}
          spread={0.2}
          taper={1.0}
          position={0.5}
          fanMode="center"
          glow={0.02}
          falloff={0.6}
          thickness={1.1}
          brightness={0.6}
          opacity={1.0}
          mirror={true}
          shimmer={false}
          grain={false}
          grainIntensity={0}
          mouseInteraction={true}
          mouseStrength={0.3}
        />
      </div>

      {/* Top Floating Navigation */}
      <Navbar 
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        
        {/* 1. Hero & Mission Overview */}
        <HeroSection 
          onSelectStartup={handleSelectStartup}
          onOpenContact={handleOpenContact}
          onNavigate={handleNavigate}
        />

        {/* 2. Startup Ecosystem Explorer */}
        <EcosystemExplorer 
          selectedStartupId={selectedStartupId}
          onOpenContact={handleOpenContact}
        />

        {/* 3. Unified Convergence Matrix */}
        <ConvergenceSection 
          onOpenContact={handleOpenContact}
        />

        {/* 4. Technology Evolution Roadmap 2026-2035+ */}
        <RoadmapSection />

        {/* 5. Leadership & Founder Dossier (Srisank Choudhary) */}
        <FounderDossier />

        {/* 6. Contact & Inquiry Section */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={handleOpenContact}
      />

    </div>
  );
}
