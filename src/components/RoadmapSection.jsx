import React, { useState } from 'react';
import { 
  Milestone, Calendar, CheckCircle2, CircleDot, ArrowRight, 
  Cpu, Bot, Globe, Shield, Sparkles, Orbit 
} from 'lucide-react';
import { sound } from '../utils/audioEffects';

export default function RoadmapSection() {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      phase: 1,
      year: '2022 — 2024',
      title: 'Theoretical Foundations & Blueprints',
      status: 'COMPLETED',
      icon: Cpu,
      color: 'var(--color-cyan)',
      desc: 'Hand-compiled theoretical computer science algorithms, mobile interpreter sandboxing, and thousands of hours developing deep artificial neural networks (ANN/LSTM/CNN).',
      milestones: [
        'Pen-and-paper dry-run syntax compilers',
        'Mobile terminal development & C/Python scripts',
        'NSV1 Digit Recognition Neural Network',
        'Plasma Kernel x86 initial OS architecture'
      ]
    },
    {
      phase: 2,
      year: '2025 — 2026',
      title: 'Multi-Startup Genesis & Ecosystem Launch',
      status: 'ACTIVE EXPANSION',
      icon: Sparkles,
      color: 'var(--color-violet)',
      desc: 'Establishment of Vertex HaleX as a centralized innovation ecosystem. Launching SythOS SaaS, Murphy AI research, NeuroX Eurak Network, Falcon Trades, and Inforbit.',
      milestones: [
        'SythOS 3D BIM Construction Management platform',
        'Murphy AI foundation reasoning & token pipelines',
        'NeuroX Eurak Network bio-inspired neurocomputing',
        'Falcon Trades quantitative algorithmic terminal'
      ]
    },
    {
      phase: 3,
      year: '2027 — 2029',
      title: 'Physical AI & Hardware Integration',
      status: 'IN DEVELOPMENT',
      icon: Bot,
      color: 'var(--color-emerald)',
      desc: 'Bridging digital models into physical reality with autonomous AI drones, neural smartwatches with bio-telemetry, and intelligent humanoid robotic systems.',
      milestones: [
        'Model D-X1 Autonomous AI Aerial Drone deployment',
        'Vertex Neural Smartwatch with non-invasive BCI',
        'Inverse kinematics robotic arms for industrial automation',
        'Custom edge-computing neuromorphic chips'
      ]
    },
    {
      phase: 4,
      year: '2030 — 2035+',
      title: 'Quantum Convergence & AGI / ASI Horizon',
      status: 'HORIZON VISION',
      icon: Orbit,
      color: 'var(--color-amber)',
      desc: 'Full convergence of software, AI, hardware, neuroscience, and robotics into unified Artificial General Intelligence (AGI) and Artificial Superintelligence (ASI).',
      milestones: [
        'Eurak-driven Artificial General Intelligence (AGI)',
        'Nanotechnology & bio-synthetic neural bridges',
        'Global quantum computing acceleration',
        'Superhuman cognitive operating ecosystems'
      ]
    }
  ];

  return (
    <section id="roadmap" className="section-wrapper">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge emerald">
            <span className="badge-dot"></span>
            <span>STRATEGIC TIMELINE</span>
          </div>
          <h2>
            The 2026—2035+ <span>Technology Horizon</span>
          </h2>
          <p>
            Tracking the roadmap of Vertex HaleX from paper blueprints to global software ecosystems 
            and physical humanoid AI convergence.
          </p>
        </div>

        {/* Phase Selector Bar */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          {phases.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activePhase === item.phase;
            return (
              <div
                key={idx}
                onClick={() => {
                  sound.playClick();
                  setActivePhase(item.phase);
                }}
                className={`glass-panel ${isSelected ? 'glow-cyan' : ''}`}
                style={{
                  padding: '1.25rem',
                  cursor: 'pointer',
                  borderColor: isSelected ? item.color : 'var(--border-subtle)',
                  background: isSelected ? 'rgba(14, 20, 36, 0.95)' : 'rgba(14, 20, 36, 0.4)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: item.color }}>
                    PHASE 0{item.phase}
                  </span>
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                    <Icon size={15} />
                  </div>
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                  {item.year}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {item.status}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Phase Detailed Deep Dive */}
        {(() => {
          const sel = phases.find((p) => p.phase === activePhase) || phases[0];
          const Icon = sel.icon;
          return (
            <div 
              className="glass-panel"
              style={{
                padding: '3rem',
                border: `1px solid ${sel.color}`,
                boxShadow: `0 25px 50px -10px rgba(0, 0, 0, 0.7)`
              }}
            >
              <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span className="badge" style={{ borderColor: sel.color, color: sel.color }}>
                      PHASE 0{sel.phase} // {sel.status}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      TIMEFRAME: {sel.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ffffff' }}>
                    {sel.title}
                  </h3>

                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {sel.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {sel.milestones.map((m, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <CheckCircle2 size={18} style={{ color: sel.color, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.925rem', color: 'var(--text-primary)' }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div 
                  style={{
                    background: 'rgba(5, 7, 13, 0.9)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <div 
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${sel.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: sel.color,
                      margin: '0 auto 1.5rem auto'
                    }}
                  >
                    <Icon size={36} />
                  </div>

                  <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    Ecosystem Velocity
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    Every milestone contributes to the unified convergence of digital intelligence and physical hardware.
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: sel.color }}>0{sel.phase} / 04</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>PHASE INDEX</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>99.9%</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>SYSTEM ALIGNMENT</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
