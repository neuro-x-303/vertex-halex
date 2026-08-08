import React, { useState, useEffect } from 'react';
import { 
  Layers, Cpu, Activity, TrendingUp, GraduationCap, Bot, 
  ArrowRight, CheckCircle2, Zap, Watch, ExternalLink, Globe
} from 'lucide-react';
import { sound } from '../utils/audioEffects';

export default function EcosystemExplorer({ selectedStartupId, onOpenContact }) {
  // SythOS state
  const [sythosProgress, setSythosProgress] = useState(68);

  // Murphy AI state
  const [murphyPrompt, setMurphyPrompt] = useState("Multi-modal reasoning topology for autonomous robotic systems");
  const [murphyGenerating, setMurphyGenerating] = useState(false);
  const [murphyTokens, setMurphyTokens] = useState([
    "Step 1: Mapping multi-modal perception tensors across Eurak topology",
    "Step 2: Synthesizing real-time reasoning latent space (99.8% confidence)",
    "Step 3: Generating deterministic action vectors for physical actuators."
  ]);

  // NeuroX state
  const [activeFrequency, setActiveFrequency] = useState('gamma');

  // Falcon Trades state
  const [tradePrice, setTradePrice] = useState(68452.19);
  const [tradeHistory] = useState([
    { time: '14:23:01', type: 'BUY', price: '$68,440.00', qty: '1.45 BTC', algo: 'HFT-Momentum' },
    { time: '14:23:04', type: 'BUY', price: '$68,448.50', qty: '0.80 BTC', algo: 'Quant-Alpha' },
    { time: '14:23:08', type: 'SELL', price: '$68,455.00', qty: '2.10 BTC', algo: 'Arbitrage-Core' }
  ]);

  // Inforbit state
  const [unlockedSkills, setUnlockedSkills] = useState(['python', 'neural_net', 'os_kernel']);

  // Beyond Startups state
  const [selectedHardware, setSelectedHardware] = useState('drone');

  // Active scrolled startup tracker
  const [activeScrolledId, setActiveScrolledId] = useState('sythos');

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            const id = entry.target.getAttribute('data-startup-id');
            if (id) setActiveScrolledId(id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const cards = document.querySelectorAll('.startup-showcase-block');
    cards.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  // Live Falcon Trades price ticker simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setTradePrice((prev) => {
        const delta = (Math.random() - 0.48) * 8.5;
        return Number((prev + delta).toFixed(2));
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const triggerMurphyGeneration = () => {
    sound.playClick();
    setMurphyGenerating(true);
    setMurphyTokens(["Synthesizing reasoning framework..."]);

    const sampleSteps = [
      "Analyzing multi-dimensional weights across Eurak network...",
      "Evaluating environmental constraints and sensor inputs...",
      "Calibrating real-time motor signals with sub-millisecond precision.",
      "Reasoning synthesis complete: Model confidence 99.8%."
    ];

    sampleSteps.forEach((step, idx) => {
      setTimeout(() => {
        setMurphyTokens((prev) => [...prev, step]);
        if (idx === sampleSteps.length - 1) {
          setMurphyGenerating(false);
          sound.playSuccess();
        }
      }, (idx + 1) * 350);
    });
  };

  const startups = [
    {
      id: 'sythos',
      number: '01',
      name: 'SythOS',
      category: 'Construction SaaS Platform',
      tagline: 'Next-Generation Construction Management SaaS',
      domain: 'sythos.vertexhalex.com',
      url: 'https://sythos.vertexhalex.com',
      description: 'A next-generation Construction Management SaaS platform designed to digitize and simplify construction operations, projects, resources, teams, and workflows. Built with 3D BIM spatial overlays, real-time site telematics, and automated budget forecast models.',
      color: 'var(--accent-cyan)',
      glowClass: 'glow-cyan',
      image: '/assets/sythos_preview.png',
      features: [
        '3D Architectural CAD & BIM spatial viewer',
        'Real-time workforce & heavy machinery allocation',
        'Automated Gantt schedule & risk projection',
        'Sub-millisecond multi-site IoT telemetry'
      ]
    },
    {
      id: 'murphy',
      number: '02',
      name: 'Murphy',
      category: 'AI Research & Foundation',
      tagline: 'AI Research & Next-Gen Systems Foundation',
      domain: 'murphy.vertexhalex.com',
      url: 'https://murphy.vertexhalex.com',
      description: 'An AI research and technology startup focused on developing new AI systems, intelligent technologies, and the foundations for next-generation artificial intelligence. Creating autonomous reasoning agents, novel neural network topologies, and scalable model architectures.',
      color: 'var(--accent-violet)',
      glowClass: 'glow-violet',
      image: '/assets/murphy_ai_preview.png',
      features: [
        'Multi-agent autonomous cognitive orchestration',
        'Next-generation reasoning & token generation models',
        'High-density vector search & Eurak neural alignment',
        'Self-optimizing model distillation pipelines'
      ]
    },
    {
      id: 'inforbit',
      number: '03',
      name: 'Inforbit',
      category: 'EdTech & Smart Learning',
      tagline: 'Modern Learning Experiences & Educational Platforms',
      domain: 'inforbit.vertexhalex.com',
      url: 'https://inforbit.vertexhalex.com',
      description: 'An education technology startup focused on building modern learning experiences, educational platforms, and technology-driven solutions that make knowledge more accessible, engaging, and future-ready.',
      color: '#f472b6',
      glowClass: 'glow-pink',
      image: '/assets/inforbit_preview.png',
      features: [
        'Adaptive neural curriculum that evolves with user mastery',
        'Interactive STEM & low-level computing visualizers',
        'Gamified skill-tree progression and instant verification',
        'Holographic virtual tutor with multi-modal feedback'
      ]
    },
    {
      id: 'neurox',
      number: '04',
      name: 'NeuroX',
      category: 'Neuroscience & Deep Tech',
      tagline: 'Eurak Network Technology & Neurocomputing',
      domain: 'neurox.vertexhalex.com',
      url: 'https://neurox.vertexhalex.com',
      description: 'A neuroscience and technology startup exploring Eurak Network Technology, neurocomputing, and brain-inspired intelligence, pushing the boundaries of how technology understands and processes intelligence.',
      color: 'var(--accent-emerald)',
      glowClass: 'glow-emerald',
      image: '/assets/neurox_preview.png',
      features: [
        'Eurak Network Technology biological synapse mapping',
        'Real-time EEG & Brain-Computer Interface (BCI) decoding',
        'Bio-inspired neuromorphic computing hardware simulation',
        'Synthetic neuro-signal prediction & synthesis'
      ]
    },
    {
      id: 'falcon',
      number: '05',
      name: 'Falcon Trades',
      category: 'FinTech & Trading Systems',
      tagline: 'Quantitative Financial Intelligence & Systems',
      domain: 'falcon.vertexhalex.com',
      url: 'https://falcon.vertexhalex.com',
      description: 'A developing trading and stock-market technology startup focused on financial technology, market intelligence, trading systems, and data-driven financial solutions with low latency execution and deep market sentiment models.',
      color: 'var(--accent-amber)',
      glowClass: 'glow-amber',
      image: '/assets/falcon_trades_preview.png',
      features: [
        'Ultra-low-latency algorithmic trading infrastructure',
        'Real-time Level-2 order-book depth analysis',
        'Predictive neural sentiment & liquidity matrix',
        'Automated risk management & portfolio rebalancing'
      ]
    },
    {
      id: 'beyond',
      number: '06',
      name: 'Beyond Startups',
      category: 'Hardware, Robotics & AGI',
      tagline: 'AI Drones, Robotics, Advanced Hardware & AGI/ASI',
      domain: 'beyond.vertexhalex.com',
      url: 'https://beyond.vertexhalex.com',
      description: "Vertex HaleX's ambition extends far beyond software. The long-term vision includes AI-powered drones, digital phones, smart watches, advanced hardware, intelligent robots, nanotechnology, next-generation computing, AGI and ASI—bringing intelligence from the digital world into the physical world.",
      color: '#38bdf8',
      glowClass: 'glow-cyan',
      image: '/assets/beyond_hardware_preview.png',
      features: [
        'Autonomous AI-powered aerial drones (Model D-X1)',
        'Vertex Neural Smartwatch with BCI bio-telemetry',
        'Intelligent humanoid robotics with inverse kinematics',
        'Convergence toward Artificial Superintelligence (ASI)'
      ]
    }
  ];

  const scrollToStartup = (id) => {
    sound.playHover();
    const el = document.getElementById(`startup-block-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="startups" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="pill-badge" style={{ marginBottom: '1.25rem' }}>
            <span className="dot"></span>
            <span>Ecosystem Portfolio</span>
          </div>
          <h2>
            Frontier Startups. <br />
            <span className="gradient-text">Connected Intelligence.</span>
          </h2>
          <p>
            Explore each specialized startup in depth with direct web portals, live simulators, 
            and architectural frameworks.
          </p>
        </div>

        {/* Quick Launch Link Strip */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '4rem'
          }}
        >
          {startups.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playHover()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
              className="quick-portal-link"
            >
              <Globe size={13} style={{ color: s.color }} />
              <span>{s.domain}</span>
              <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} />
            </a>
          ))}
        </div>

        {/* VERTICAL SCROLL-DOWN SHOWCASE STREAM */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6.5rem' }}>
          
          {startups.map((startup, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={startup.id}
                id={`startup-block-${startup.id}`}
                data-startup-id={startup.id}
                className={`startup-showcase-block glass-card ${startup.glowClass}`}
                style={{
                  padding: '3.5rem 3rem',
                  background: 'rgba(10, 14, 26, 0.45)',
                  backdropFilter: 'blur(28px)',
                  WebkitBackdropFilter: 'blur(28px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background Luminous Number Watermark */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-1.5rem',
                    right: isEven ? '2rem' : 'auto',
                    left: !isEven ? '2rem' : 'auto',
                    fontSize: '9rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-display)',
                    color: 'rgba(255, 255, 255, 0.03)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    lineHeight: 1
                  }}
                >
                  {startup.number}
                </div>

                <div 
                  className="grid-2" 
                  style={{ 
                    alignItems: 'center', 
                    gap: '4rem',
                    direction: isEven ? 'ltr' : 'rtl' 
                  }}
                >
                  
                  {/* Text Column */}
                  <div style={{ direction: 'ltr' }}>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                      <span 
                        className="pill-badge" 
                        style={{ 
                          color: startup.color, 
                          borderColor: startup.color, 
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(12px)'
                        }}
                      >
                        PILLAR {startup.number} // {startup.category}
                      </span>

                      {/* Direct Clickable Domain Badge */}
                      <a
                        href={startup.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: startup.color,
                          background: 'rgba(255, 255, 255, 0.04)',
                          backdropFilter: 'blur(12px)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        <Globe size={13} />
                        <span>{startup.domain}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <h3 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', marginBottom: '0.5rem', color: '#ffffff', letterSpacing: '-0.03em' }}>
                      {startup.name}
                    </h3>

                    <h4 style={{ fontSize: '1.15rem', color: startup.color, marginBottom: '1.5rem', fontWeight: 600 }}>
                      {startup.tagline}
                    </h4>

                    <p style={{ fontSize: '1.025rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2.25rem' }}>
                      {startup.description}
                    </p>

                    {/* Features Checklist */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
                      {startup.features.map((feat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <CheckCircle2 size={18} style={{ color: startup.color, flexShrink: 0 }} />
                          <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <a
                        href={startup.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        className="btn btn-primary"
                        style={{ padding: '0.85rem 1.75rem' }}
                      >
                        <span>Launch {startup.domain}</span>
                        <ExternalLink size={16} />
                      </a>

                      <button
                        onClick={() => {
                          sound.playClick();
                          if (onOpenContact) onOpenContact();
                        }}
                        className="btn btn-secondary"
                        style={{ padding: '0.85rem 1.5rem' }}
                      >
                        <span>Contact Team</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>

                  </div>

                  {/* Interactive Visual Preview Panel */}
                  <div 
                    style={{ 
                      direction: 'ltr',
                      background: 'rgba(7, 10, 20, 0.45)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '1.75rem',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    {/* Visual Image Render */}
                    <a
                      href={startup.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        position: 'relative',
                        display: 'block',
                        width: '100%',
                        height: '280px',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)'
                      }}
                      title={`Visit ${startup.domain}`}
                    >
                      <img 
                        src={startup.image} 
                        alt={`${startup.name} Showcase`} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div 
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          background: 'rgba(7, 9, 14, 0.85)',
                          backdropFilter: 'blur(12px)',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <span>{startup.domain}</span>
                        <ExternalLink size={12} />
                      </div>
                    </a>

                    {/* LIVE INTERACTIVE CONTROLS PER STARTUP */}

                    {/* 1. SythOS Interactive Control */}
                    {startup.id === 'sythos' && (
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>Project Construction Completion:</span>
                          <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>{sythosProgress}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="10" 
                          max="100" 
                          value={sythosProgress} 
                          onChange={(e) => setSythosProgress(Number(e.target.value))}
                          style={{ width: '100%', accentColor: '#38bdf8', marginBottom: '1.25rem' }}
                        />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ACTIVE CREW</div>
                            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>38 / 45 Active</div>
                          </div>
                          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CAD BLUEPRINT</div>
                            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>3D Synced 100%</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 2. Murphy AI Interactive Control */}
                    {startup.id === 'murphy' && (
                      <div>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                          <input 
                            type="text" 
                            value={murphyPrompt} 
                            onChange={(e) => setMurphyPrompt(e.target.value)}
                            style={{
                              flex: 1,
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '8px',
                              color: '#fff',
                              padding: '0.6rem 0.85rem',
                              fontSize: '0.82rem'
                            }}
                          />
                          <button
                            onClick={triggerMurphyGeneration}
                            disabled={murphyGenerating}
                            className="btn btn-primary"
                            style={{ padding: '0.6rem 1.15rem', fontSize: '0.82rem' }}
                          >
                            <Zap size={14} />
                            {murphyGenerating ? 'Reasoning...' : 'Infer'}
                          </button>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '0.85rem', borderRadius: '8px', maxHeight: '110px', overflowY: 'auto', fontSize: '0.78rem' }}>
                          {murphyTokens.map((tok, i) => (
                            <div key={i} style={{ color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                              {tok}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 3. Inforbit Interactive Control */}
                    {startup.id === 'inforbit' && (
                      <div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                          Adaptive Learning Disciplines (Click to toggle):
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {[
                            { id: 'python', label: 'AI & Data Science' },
                            { id: 'neural_net', label: 'Neural Networks (ANN/LSTM)' },
                            { id: 'os_kernel', label: 'Operating System Kernels (C/Asm)' },
                            { id: 'fullstack', label: 'High-Scale Systems' }
                          ].map((sk) => {
                            const isUnlocked = unlockedSkills.includes(sk.id);
                            return (
                              <button
                                key={sk.id}
                                onClick={() => {
                                  sound.playClick();
                                  setUnlockedSkills((prev) => 
                                    isUnlocked ? prev.filter((x) => x !== sk.id) : [...prev, sk.id]
                                  );
                                }}
                                style={{
                                  padding: '0.45rem 0.85rem',
                                  fontSize: '0.78rem',
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  background: isUnlocked ? 'rgba(244, 114, 182, 0.15)' : 'rgba(255,255,255,0.03)',
                                  border: isUnlocked ? '1px solid #f472b6' : '1px solid var(--border-subtle)',
                                  color: isUnlocked ? '#ffffff' : 'var(--text-muted)'
                                }}
                              >
                                {isUnlocked ? '✓ ' : '+ '} {sk.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* 4. NeuroX Interactive Control */}
                    {startup.id === 'neurox' && (
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Eurak Brainwave Band:</span>
                          <div style={{ display: 'flex', gap: '0.4rem' }}>
                            {['alpha', 'beta', 'gamma', 'eurak'].map((freq) => (
                              <button
                                key={freq}
                                onClick={() => {
                                  sound.playHover();
                                  setActiveFrequency(freq);
                                }}
                                style={{
                                  padding: '0.3rem 0.65rem',
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                  borderRadius: '6px',
                                  border: activeFrequency === freq ? '1px solid var(--accent-emerald)' : '1px solid var(--border-subtle)',
                                  background: activeFrequency === freq ? 'rgba(52, 211, 153, 0.15)' : 'transparent',
                                  color: activeFrequency === freq ? 'var(--accent-emerald)' : 'var(--text-muted)',
                                  cursor: 'pointer'
                                }}
                              >
                                {freq.toUpperCase()}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SYNAPTIC FIDELITY</div>
                            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>99.6% Peak</div>
                          </div>
                          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>NEURO-COMPUTE LATENCY</div>
                            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>0.012 ms</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 5. Falcon Trades Interactive Control */}
                    {startup.id === 'falcon' && (
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Live Market Ticker:</span>
                          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-amber)' }}>
                            ${tradePrice.toLocaleString()}
                          </span>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.78rem' }}>
                          {tradeHistory.map((tr, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', color: tr.type === 'BUY' ? 'var(--accent-emerald)' : '#ef4444' }}>
                              <span>{tr.type} {tr.qty}</span>
                              <span>{tr.price}</span>
                              <span style={{ color: 'var(--text-muted)' }}>{tr.algo}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 6. Beyond Startups Interactive Control */}
                    {startup.id === 'beyond' && (
                      <div>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.85rem' }}>
                          {[
                            { id: 'drone', label: 'AI Drone D-X1', icon: Bot },
                            { id: 'watch', label: 'Neural Watch', icon: Watch },
                            { id: 'robot', label: 'Robotic Arm', icon: Activity },
                            { id: 'agi', label: 'Quantum Core', icon: Cpu }
                          ].map((hw) => {
                            const Icon = hw.icon;
                            const isSel = selectedHardware === hw.id;
                            return (
                              <button
                                key={hw.id}
                                onClick={() => {
                                  sound.playClick();
                                  setSelectedHardware(hw.id);
                                }}
                                style={{
                                  flex: 1,
                                  padding: '0.5rem',
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                  borderRadius: '8px',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  gap: '0.25rem',
                                  background: isSel ? 'rgba(56, 189, 248, 0.18)' : 'rgba(255,255,255,0.03)',
                                  border: isSel ? '1px solid #38bdf8' : '1px solid var(--border-subtle)',
                                  color: isSel ? '#ffffff' : 'var(--text-muted)'
                                }}
                              >
                                <Icon size={16} />
                                <span>{hw.label}</span>
                              </button>
                            );
                          })}
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          {selectedHardware === 'drone' && 'Autonomous AI Flight Engine • 360° LiDAR Avoidance • 4K Neural Optical Sensor'}
                          {selectedHardware === 'watch' && 'Non-Invasive EEG Bio-Telemetry • Sub-Second Vitals Sync • Encrypted Data Bus'}
                          {selectedHardware === 'robot' && '6-Axis Inverse Kinematics • High Precision Industrial Assembly • Carbon-Fiber Frame'}
                          {selectedHardware === 'agi' && 'Neural Processing Core X1 • 100 TeraOps / Watt • Eurak Native Synapse Logic'}
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Global CSS for Smooth Scroll Reveal Animations & Mobile UI */}
      <style>{`
        .startup-showcase-block {
          opacity: 0;
          transform: translateY(45px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .startup-showcase-block.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .quick-portal-link:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .startup-showcase-block {
            padding: 1.75rem 1.25rem !important;
          }
          .startup-showcase-block .grid-2 {
            gap: 2rem !important;
            direction: ltr !important;
          }
          .startup-showcase-block img {
            height: 210px !important;
          }
        }
      `}</style>
    </section>
  );
}
