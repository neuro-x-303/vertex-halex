import React from 'react';
import { 
  ArrowRight, Layers, Cpu, Activity, TrendingUp, 
  GraduationCap, Bot, ChevronRight
} from 'lucide-react';
import { sound } from '../utils/audioEffects';

export default function HeroSection({ onSelectStartup, onOpenContact, onNavigate }) {
  const startupPillars = [
    { id: 'sythos', name: 'SythOS', category: 'Construction SaaS', color: 'var(--accent-cyan)', icon: Layers },
    { id: 'murphy', name: 'Murphy', category: 'AI Research & Foundation', color: 'var(--accent-violet)', icon: Cpu },
    { id: 'neurox', name: 'NeuroX', category: 'Eurak Neuroscience', color: 'var(--accent-emerald)', icon: Activity },
    { id: 'falcon', name: 'Falcon Trades', category: 'FinTech Intelligence', color: 'var(--accent-amber)', icon: TrendingUp },
    { id: 'inforbit', name: 'Inforbit', category: 'Modern EdTech', color: '#f472b6', icon: GraduationCap },
    { id: 'beyond', name: 'Beyond Startups', category: 'Hardware & Robotics', color: '#38bdf8', icon: Bot }
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...startupPillars, ...startupPillars, ...startupPillars];

  return (
    <section 
      id="home" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Hero Title */}
        <h1 
          style={{
            fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            marginBottom: '1.75rem',
            maxWidth: '1050px',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Welcome to the <br />
          <span className="gradient-text">Future.</span>
        </h1>

        {/* Subtitle */}
        <p 
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'var(--text-secondary)',
            maxWidth: '820px',
            lineHeight: 1.6,
            marginBottom: '2.75rem',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Vertex HaleX is not just a single startup company. It is an innovation ecosystem 
          built to create, operate, and scale multiple startups, technologies, and ambitious ideas 
          across SaaS, AI, neuroscience, financial technology, robotics, hardware, and advanced computing.
        </p>

        {/* Call to Actions */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '1rem', 
            flexWrap: 'wrap', 
            marginBottom: '3.5rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <a 
            href="#startups" 
            onClick={(e) => {
              sound.playClick();
              if (onNavigate) {
                e.preventDefault();
                onNavigate('startups');
              }
            }}
            className="btn btn-primary"
            style={{ padding: '0.9rem 2rem', fontSize: '0.95rem' }}
          >
            <span>Explore Ecosystem</span>
            <ArrowRight size={16} />
          </a>

          <button 
            onClick={() => {
              sound.playClick();
              if (onOpenContact) onOpenContact();
            }}
            className="btn btn-secondary"
            style={{ padding: '0.9rem 1.8rem', fontSize: '0.95rem' }}
          >
            <span>Get in Touch</span>
          </button>

          <a 
            href="#founder" 
            onClick={(e) => {
              sound.playHover();
              if (onNavigate) {
                e.preventDefault();
                onNavigate('founder');
              }
            }}
            style={{ 
              fontSize: '0.925rem', 
              color: 'var(--text-secondary)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.35rem', 
              padding: '0.5rem 1rem',
              fontWeight: 500
            }}
          >
            <span>Founder & CEO Profile</span>
            <ChevronRight size={16} />
          </a>
        </div>

        {/* TRANSLUCENT, COMPACT INFINITE MARQUEE WITH FADED BORDERS */}
        <div 
          className="translucent-marquee-wrapper"
          style={{
            width: '100%',
            maxWidth: '1100px',
            position: 'relative',
            padding: '0.5rem 0',
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-md)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            borderLeft: 'none',
            borderRight: 'none',
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
          }}
        >
          {/* Marquee Track */}
          <div 
            className="marquee-track"
            style={{
              display: 'flex',
              gap: '1rem',
              width: 'max-content',
              animation: 'marqueeScroll 26s linear infinite',
              padding: '0.25rem 0'
            }}
          >
            {marqueeItems.map((startup, idx) => {
              const Icon = startup.icon;
              return (
                <div
                  key={`${startup.id}-${idx}`}
                  onClick={() => {
                    sound.playClick();
                    if (onSelectStartup) onSelectStartup(startup.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  style={{
                    padding: '0.65rem 1.15rem',
                    background: 'rgba(255, 255, 255, 0.035)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    minWidth: '175px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textAlign: 'left',
                    flexShrink: 0
                  }}
                  className="compact-startup-chip"
                >
                  <div 
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: startup.color,
                      flexShrink: 0
                    }}
                  >
                    <Icon size={15} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#ffffff', whiteSpace: 'nowrap', lineHeight: 1.2 }}>
                      {startup.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', marginTop: '0.15rem' }}>
                      {startup.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Metrics */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '3.5rem',
            width: '100%',
            maxWidth: '1100px',
            textAlign: 'left'
          }}
        >
          <div style={{ borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>6 Startups</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>SaaS, AI, Neuroscience, FinTech, EdTech, Robotics</div>
          </div>

          <div style={{ borderLeft: '2px solid var(--accent-purple)', paddingLeft: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>Proprietary</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Eurak Network & Foundation Machine Learning</div>
          </div>

          <div style={{ borderLeft: '2px solid var(--accent-emerald)', paddingLeft: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>Digital & Physical</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Software converging into advanced physical hardware</div>
          </div>

          <div style={{ borderLeft: '2px solid var(--accent-amber)', paddingLeft: '1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>Unified Vision</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Building Today. Leading Tomorrow.</div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .translucent-marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
        .compact-startup-chip:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
