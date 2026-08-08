import React from 'react';
import { ArrowUp, Phone, Mail } from 'lucide-react';
import { sound } from '../utils/audioEffects';

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    sound.playHover();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: '#04060a',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '5rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div className="container">
        
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                }}
              >
                <img src="/logo.jpeg" alt="Vertex HaleX Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff' }}>
                VERTEX HALEX
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              An innovation ecosystem and venture studio built to create, operate, and scale multiple startups, technologies, and ambitious ideas across SaaS, AI, neuroscience, FinTech, robotics, and advanced computing.
            </p>

            <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 600 }}>
              Building Today. Leading Tomorrow.
            </div>
          </div>

          {/* Ecosystem Startups */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '1.25rem', fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}>
              Ecosystem Startups
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
              <li>
                <a href="https://sythos.vertexhalex.com" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8' }}>
                  SythOS — sythos.vertexhalex.com ↗
                </a>
              </li>
              <li>
                <a href="https://murphy.vertexhalex.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-purple)' }}>
                  Murphy — murphy.vertexhalex.com ↗
                </a>
              </li>
              <li>
                <a href="https://inforbit.vertexhalex.com" target="_blank" rel="noopener noreferrer" style={{ color: '#f472b6' }}>
                  Inforbit — inforbit.vertexhalex.com ↗
                </a>
              </li>
              <li>
                <a href="#startups" style={{ color: 'var(--text-secondary)' }}>
                  NeuroX — Eurak Neurocomputing
                </a>
              </li>
              <li>
                <a href="#startups" style={{ color: 'var(--text-secondary)' }}>
                  Falcon Trades — Financial Intelligence
                </a>
              </li>
              <li>
                <a href="#startups" style={{ color: 'var(--text-secondary)' }}>
                  Beyond Startups — Hardware & Robotics
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '1.25rem', fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
              <li>
                <a href="#home" style={{ color: 'var(--text-secondary)' }}>Home Overview</a>
              </li>
              <li>
                <a href="#startups" style={{ color: 'var(--text-secondary)' }}>Ecosystem Explorer</a>
              </li>
              <li>
                <a href="#convergence" style={{ color: 'var(--text-secondary)' }}>Unified Convergence Matrix</a>
              </li>
              <li>
                <a href="#roadmap" style={{ color: 'var(--text-secondary)' }}>2026—2035+ Tech Roadmap</a>
              </li>
              <li>
                <a href="#founder" style={{ color: 'var(--text-secondary)' }}>Founder & CEO Profile</a>
              </li>
              <li>
                <a href="/Privacy-policy" style={{ color: 'var(--text-secondary)' }}>
                  Privacy Policy ↗
                </a>
              </li>
              <li>
                <a href="/Terms-Of-Services" style={{ color: 'var(--text-secondary)' }}>
                  Terms of Service ↗
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onOpenContact) onOpenContact();
                  }} 
                  style={{ color: '#38bdf8' }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Executive Contact */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '1.25rem', fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}>
              Executive Headquarters
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div style={{ color: 'var(--text-secondary)' }}>
                Founder & CEO: <strong style={{ color: '#fff' }}>Srisank Choudhary</strong>
              </div>
              <div>
                <a href="tel:+919204732699" style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Phone size={14} /> +91 9204732699
                </a>
              </div>
              <div>
                <a 
                  href="https://www.linkedin.com/in/srisank-choudhary-705a25369/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}
                >
                  <LinkedInIcon /> LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span>© 2026 Vertex HaleX. All rights reserved.</span>
            <a href="/Privacy-policy" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</a>
            <a href="/Terms-Of-Services" style={{ color: 'var(--text-secondary)' }}>Terms of Service</a>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: '#ffffff',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
