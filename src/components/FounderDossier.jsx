import React, { useState } from 'react';
import { 
  Phone, Mail, ArrowRight, ShieldCheck, 
  Cpu, Calendar, User, Code, FileText, CheckCircle2, ChevronLeft, ChevronRight
} from 'lucide-react';
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

export default function FounderDossier() {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const founderPhotos = [
    '/CEOPhotos/WhatsApp Image 2026-06-12 at 1.03.38 PM (1).jpeg',
    '/CEOPhotos/WhatsApp Image 2026-06-12 at 1.03.38 PM (2).jpeg',
    '/CEOPhotos/WhatsApp Image 2026-06-12 at 1.03.38 PM.jpeg',
    '/CEOPhotos/WhatsApp Image 2026-06-12 at 1.03.39 PM.jpeg',
    '/CEOPhotos/WhatsApp Image 2026-06-12 at 1.03.40 PM.jpeg'
  ];

  const handleNextPhoto = () => {
    sound.playHover();
    setActivePhotoIdx((prev) => (prev + 1) % founderPhotos.length);
  };

  const handlePrevPhoto = () => {
    sound.playHover();
    setActivePhotoIdx((prev) => (prev - 1 + founderPhotos.length) % founderPhotos.length);
  };

  const skills = [
    'Artificial Neural Networks (ANN)',
    'LSTM & CNN Architectures',
    'Large Language Models (LLM)',
    'Python (Data Science)',
    'x86 Operating System Kernels',
    'C & Intel x86 Assembly',
    'Full-Stack Architecture & WebGL'
  ];

  const portfolio = [
    {
      code: 'NSV1',
      title: 'Neuro Smart Vision v1',
      desc: 'An intelligent digit classification system leveraging custom Convolutional Neural Networks (CNN) to process and identify handwritten numerals (0-9) with high validation accuracy.'
    },
    {
      code: 'NSV2',
      title: 'Neuro Smart Vision v2',
      desc: 'An advanced regression and prediction network scaled to extrapolate numeral patterns from 0 to infinity, engineered for high throughput and sub-millisecond network speeds.'
    },
    {
      code: 'PLASMA',
      title: 'Plasma Kernel (x86)',
      desc: 'A lightweight experimental x86 operating system kernel built to demonstrate core concepts of process management, memory paging, and custom boot sectors using Assembly and C.'
    },
    {
      code: 'DRIVERS',
      title: 'Assembly Core Logic Drivers',
      desc: 'Low-level hardware drivers written in x86 Intel assembly designed to interface directly with video memory grids, peripheral I/O ports, and register manipulation.'
    }
  ];

  return (
    <section id="founder" className="section-wrapper" style={{ background: 'rgba(13, 17, 28, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="pill-badge" style={{ marginBottom: '1.25rem' }}>
            <span className="dot"></span>
            <span>Executive Leadership</span>
          </div>
          <h2>
            The Founder & <span className="gradient-text">Chief Executive</span>
          </h2>
          <p>
            Meet Srisank Choudhary, the systems architect, AI researcher, and visionary leading Vertex HaleX.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3.5rem' }}>
          
          {/* Left Column: Executive Photo Stream */}
          <div>
            <div 
              className="glass-card"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: 'var(--shadow-lg)',
                marginBottom: '1.75rem'
              }}
            >
              <div style={{ position: 'relative', height: '480px', width: '100%', background: '#090d18' }}>
                <img 
                  src={founderPhotos[activePhotoIdx]} 
                  alt={`Srisank Choudhary - Founder & CEO (${activePhotoIdx + 1})`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Photo Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(7, 9, 14, 0.95) 100%)',
                    padding: '2rem 1.5rem 1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                      Srisank Choudhary
                    </h3>
                    <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                      Founder & CEO // Vertex HaleX
                    </div>
                  </div>
                  <span className="pill-badge" style={{ fontSize: '0.72rem' }}>
                    Photo 0{activePhotoIdx + 1} / 0{founderPhotos.length}
                  </span>
                </div>

                {/* Photo Navigation */}
                <button
                  onClick={handlePrevPhoto}
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(7, 9, 14, 0.75)',
                    border: '1px solid var(--border-subtle)',
                    color: '#fff',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={handleNextPhoto}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(7, 9, 14, 0.75)',
                    border: '1px solid var(--border-subtle)',
                    color: '#fff',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'flex', gap: '0.5rem', padding: '0.85rem', background: '#090d18', overflowX: 'auto' }}>
                {founderPhotos.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      sound.playClick();
                      setActivePhotoIdx(idx);
                    }}
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: activePhotoIdx === idx ? '2px solid #38bdf8' : '1px solid var(--border-subtle)',
                      padding: 0,
                      cursor: 'pointer',
                      flexShrink: 0,
                      opacity: activePhotoIdx === idx ? 1 : 0.6
                    }}
                  >
                    <img src={p} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Executive Contact */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem' }}>
                <div>
                  <div style={{ color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Direct Phone</div>
                  <a href="tel:+919204732699" style={{ color: '#38bdf8', fontWeight: 600 }}>
                    +91 9204732699
                  </a>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', marginBottom: '0.2rem' }}>LinkedIn Network</div>
                  <a 
                    href="https://www.linkedin.com/in/srisank-choudhary-705a25369/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-purple)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <LinkedInIcon /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Bio & Journey */}
          <div>
            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="pill-badge">Verified Leadership Profile</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  Active Systems Architect
                </span>
              </div>

              <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                Srisank Choudhary
              </h3>
              <div style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600, marginBottom: '1.5rem' }}>
                Founder & Chief Executive Officer // Vertex HaleX
              </div>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                A prodigious software engineer, systems architect, and AI researcher. 
                Srisank has over 4 years of deep engineering experience in Computer Technology, 
                building neural networks (ANNs/LSTMs), implementing Large Language Models, 
                designing custom operating systems, and coding in low-level languages (C, Assembly). 
                As the creator of <strong>NeuroX</strong> and the developer of the <strong>Neuro Smart Vision (NSV)</strong> 
                digit prediction frameworks, Srisank directs the engineering pipeline and visual design systems for all Vertex HaleX enterprise products.
              </p>

              {/* Personal Details */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.85rem', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Father: </span>
                    <strong style={{ color: '#fff' }}>Santosh Kumar</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Mother: </span>
                    <strong style={{ color: '#fff' }}>Anuradha Kumari</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Date of Birth: </span>
                    <strong style={{ color: '#fff' }}>August 4, 2008</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Education: </span>
                    <strong style={{ color: '#fff' }}>12th Pass Student</strong>
                  </div>
                </div>
              </div>

              {/* Technical Stack Tags */}
              <div style={{ marginBottom: '2.25rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                  CORE TECHNICAL STACK:
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {skills.map((sk, idx) => (
                    <span 
                      key={idx} 
                      style={{
                        padding: '0.35rem 0.8rem',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(56, 189, 248, 0.08)',
                        border: '1px solid rgba(56, 189, 248, 0.2)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Journey Log */}
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>
                  Engineering Journey (2022 — Present)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', borderLeft: '2px solid rgba(56, 189, 248, 0.3)', paddingLeft: '1.25rem', marginLeft: '0.5rem' }}>
                  
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8' }}>
                      2022 // Phase 01: Pen & Paper Foundations
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                      Began without access to high-performance computer hardware. Drafted algorithms, mapped syntax logic, and dry-ran source files entirely by hand using pen and paper.
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-purple)' }}>
                      2022-2023 // Phase 02: Mobile Development & Shells
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                      Graduated to setting up terminal emulators and mobile interpreters on a smartphone, building Python automation scripts and basic C modules directly on phone.
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                      2024-2025 // Phase 03: Machine Learning & Neural Networks
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                      Mastered deep artificial neural networks (ANN/LSTM/CNN), Large Language Model integrations, and scalable data science pipelines.
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-amber)' }}>
                      2026-Present // Phase 04: Founder & CEO of Vertex HaleX
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                      Established Vertex HaleX to consolidate systems engineering, AI research, and multi-startup incubation across software and physical technology.
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Architecture Portfolio Cards */}
            <div className="grid-2">
              {portfolio.map((item, i) => (
                <div key={i} className="glass-card" style={{ padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#38bdf8', marginBottom: '0.25rem' }}>
                    {item.code}
                  </div>
                  <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #founder .photo-display-container {
            height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}
