import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audioEffects';

export default function Navbar({ onOpenContact, activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = sound.toggleMute();
    setIsMuted(newState);
    if (!newState) {
      sound.playClick();
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'startups', label: 'Ecosystem' },
    { id: 'convergence', label: 'Convergence' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'founder', label: 'Leadership' }
  ];

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    sound.playHover();
    setMobileOpen(false);

    if (onNavigate) {
      onNavigate(item.id);
    } else {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          background: isScrolled ? 'rgba(7, 9, 14, 0.85)' : 'rgba(7, 9, 14, 0.35)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          padding: isScrolled ? '0.75rem 0' : '1.1rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, { id: 'home' })}
            style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
          >
            <div 
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                background: '#0d111c'
              }}
            >
              <img 
                src="/logo.jpeg" 
                alt="Vertex HaleX Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span 
                style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontWeight: 800, 
                  fontSize: '1.15rem', 
                  letterSpacing: '-0.03em', 
                  color: '#ffffff' 
                }}
              >
                VERTEX HALEX
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav-group">
            <ul 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.75rem', 
                listStyle: 'none' 
              }}
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link)}
                    style={{
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      color: activeSection === link.id ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'color 0.2s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={() => sound.playHover()}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span 
                        style={{
                          position: 'absolute',
                          bottom: '-4px',
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: '#38bdf8',
                          borderRadius: '2px'
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: isMuted ? 'var(--text-muted)' : 'var(--text-primary)',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title={isMuted ? 'Unmute UI Audio' : 'Mute UI Audio'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* Clean Contact Button */}
            <button
              onClick={() => {
                sound.playClick();
                if (onOpenContact) onOpenContact();
              }}
              className="btn btn-primary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
            >
              <span>Contact Us</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div style={{ display: 'none' }} className="mobile-toggle-btn">
            <button
              onClick={() => {
                sound.playClick();
                setMobileOpen(!mobileOpen);
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                padding: '0.5rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div 
            style={{
              background: 'rgba(7, 9, 14, 0.98)',
              backdropFilter: 'blur(30px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginTop: '0.5rem'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link)}
                style={{
                  fontSize: '1rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  color: activeSection === link.id ? '#ffffff' : 'var(--text-secondary)'
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ height: '1px', background: 'var(--border-subtle)' }} />
            <button
              onClick={() => {
                setMobileOpen(false);
                sound.playClick();
                if (onOpenContact) onOpenContact();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav-group {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
