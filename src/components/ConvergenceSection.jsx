import React from 'react';
import { 
  Code, Cpu, Bot, Activity, GraduationCap, Brain, ArrowRight
} from 'lucide-react';
import { sound } from '../utils/audioEffects';

export default function ConvergenceSection({ onOpenContact }) {
  const pillars = [
    { title: 'Enterprise Software', desc: 'SaaS platforms (SythOS) automating physical workflows & global operations.', icon: Code, color: 'var(--accent-cyan)' },
    { title: 'Foundation AI', desc: 'Autonomous reasoning architectures (Murphy) scaling intelligence beyond LLMs.', icon: Cpu, color: 'var(--accent-violet)' },
    { title: 'Neuroscience & Eurak', desc: 'Brain-inspired computing & bio-telemetry networks (NeuroX) mapping human thought.', icon: Activity, color: 'var(--accent-emerald)' },
    { title: 'Physical Robotics', desc: 'Intelligent humanoid robotics, AI drones, and precision physical hardware.', icon: Bot, color: '#38bdf8' },
    { title: 'Adaptive EdTech', desc: 'Democratizing deep engineering and computer science mastery (Inforbit).', icon: GraduationCap, color: '#f472b6' },
    { title: 'Human Intelligence', desc: 'Merging synthetic computation with human intuition into one unified ecosystem.', icon: Brain, color: 'var(--accent-amber)' }
  ];

  return (
    <section id="convergence" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="pill-badge" style={{ marginBottom: '1.25rem' }}>
            <span className="dot"></span>
            <span>The Unified Convergence</span>
          </div>
          <h2>
            Where All Frontiers <span className="gradient-text">Converge as One.</span>
          </h2>
          <p>
            Vertex HaleX is working toward a future where software, AI, hardware, neuroscience, robotics, 
            education, and human intelligence interlock into one technological ecosystem.
          </p>
        </div>

        {/* Central Convergence Matrix Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                onMouseEnter={() => sound.playHover()}
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'rgba(10, 14, 26, 0.45)',
                  backdropFilter: 'blur(28px)',
                  WebkitBackdropFilter: 'blur(28px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: pillar.color,
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </div>

                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '1.5rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <span>CONVERGENCE NODE 0{idx + 1}</span>
                  <span style={{ color: pillar.color, fontWeight: 600 }}>ACTIVE LINK</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grand Manifesto Card */}
        <div 
          className="glass-card"
          style={{
            padding: '3.5rem 2rem',
            textAlign: 'center',
            background: 'rgba(10, 14, 26, 0.45)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            boxShadow: '0 25px 50px -12px rgba(56, 189, 248, 0.1)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span className="pill-badge">
              THE VERTEX HALEX MANIFESTO
            </span>
          </div>
          <h3 
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              maxWidth: '850px',
              margin: '0 auto 1.25rem auto',
              lineHeight: 1.3,
              color: '#ffffff'
            }}
          >
            "Build Intelligence. Create Technology. Shape the Future."
          </h3>
          <p 
            style={{
              maxWidth: '720px',
              margin: '0 auto 2rem auto',
              fontSize: '1.05rem',
              color: 'var(--text-secondary)'
            }}
          >
            One company. Multiple startups. Multiple industries. One unified vision. 
            Building Today. Leading Tomorrow.
          </p>

          <button 
            onClick={() => {
              sound.playClick();
              if (onOpenContact) onOpenContact();
            }}
            className="btn btn-primary"
            style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}
          >
            <span>Join the Innovation Ecosystem</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
