import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Play, CornerDownLeft } from 'lucide-react';
import { sound } from '../utils/audioEffects';

export default function TerminalConsole({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState([
    "VERTEX HALEX OPERATING SYSTEM [Version 4.2.0]",
    "(c) 2026 Vertex HaleX Ecosystem Inc. All rights reserved.",
    "",
    "Type 'help' to view available system commands or 'startups' to query ecosystem pillars."
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    sound.playClick();
    const newLogs = [...logs, `visitor@vertex-halex:~$ ${inputVal}`];

    switch (cmd) {
      case 'help':
        newLogs.push(
          "Available Commands:",
          "  startups   - List all 6 active ecosystem startups",
          "  sythos     - Query SythOS Construction SaaS platform architecture",
          "  murphy     - Inspect Murphy AI foundation research & reasoning engine",
          "  neurox     - Display NeuroX Eurak Network neurocomputing specs",
          "  falcon     - Fetch Falcon Trades quant market intelligence feed",
          "  inforbit   - Inspect Inforbit adaptive educational learning tree",
          "  beyond     - Display Beyond Startups hardware, robotics & AGI roadmap",
          "  founder    - View dossier for Founder & CEO Srisank Choudhary",
          "  vision     - Display the unified convergence manifesto",
          "  status     - Run ecosystem telemetry and latency diagnostics",
          "  clear      - Clear terminal screen buffer"
        );
        break;
      case 'startups':
        newLogs.push(
          "VERTEX HALEX STARTUP ECOSYSTEM PILLARS:",
          "  1. [SythOS]        - Next-Gen Construction Management SaaS Platform",
          "  2. [Murphy]        - AI Research Foundation & Autonomous Reasoning",
          "  3. [NeuroX]        - Eurak Network Technology & Brain-Inspired Computing",
          "  4. [Falcon Trades] - Quantitative Financial Technology & Market Systems",
          "  5. [Inforbit]      - Modern Learning Experiences & Educational Tech",
          "  6. [Beyond]        - AI Drones, Neural Watches, Humanoid Robotics & AGI/ASI"
        );
        break;
      case 'sythos':
        newLogs.push(
          ">> SYTHOS CONSTRUCTION SAAS [ONLINE]",
          "  Modules: 3D BIM Viewer, Dynamic Gantt, Site Telematics, Resource Balancing",
          "  Status: Active Enterprise Tier v2.4",
          "  Throughput: 14.8M ops / sec"
        );
        break;
      case 'murphy':
        newLogs.push(
          ">> MURPHY AI FOUNDATION LAB [ONLINE]",
          "  Architecture: Multi-modal latent reasoning tensor graphs",
          "  Inference Latency: 0.003ms",
          "  Eurak Alignment: 99.8% Convergent"
        );
        break;
      case 'neurox':
        newLogs.push(
          ">> NEUROX NEUROCOMPUTING [ONLINE]",
          "  Network: Eurak Synaptic Protocol v1.8",
          "  Frequency: Gamma Band 40-100Hz",
          "  BCI Decoding: Sub-cortical signal synthesis active"
        );
        break;
      case 'falcon':
        newLogs.push(
          ">> FALCON TRADES QUANT ENGINE [ONLINE]",
          "  HFT Latency: 0.8ms",
          "  Liquidity Pools: Global Crypto & Equities Order Book L2",
          "  Algorithms: Quant-Mom, HFT-Scalp v4, Arbitrage-X"
        );
        break;
      case 'inforbit':
        newLogs.push(
          ">> INFORBIT EDTECH ACADEMY [ONLINE]",
          "  Curriculum: Adaptive neural skill trees",
          "  Active Modules: AI Data Science, Neural Networks, x86 OS Kernel, Full-Stack"
        );
        break;
      case 'beyond':
        newLogs.push(
          ">> BEYOND STARTUPS (PHYSICAL AI & HARDWARE) [ACTIVE]",
          "  Hardware: AI Drone D-X1, Vertex Neural Smartwatch, 6-Axis Humanoid Arm",
          "  Horizon: Artificial Superintelligence (ASI) Convergence 2030-2035+"
        );
        break;
      case 'founder':
        newLogs.push(
          ">> EXECUTIVE DOSSIER: SRISANK CHOUDHARY",
          "  Title: Founder & Chief Executive Officer",
          "  DOB: August 4, 2008 | Education: 12th Pass Systems Architect",
          "  Specialties: ANN/LSTM, LLMs, Plasma Kernel x86 OS, C/Assembly, WebGL",
          "  Direct Phone: +91 9204732699"
        );
        break;
      case 'vision':
        newLogs.push(
          "-----------------------------------------------------------",
          "VERTEX HALEX CONVERGENCE MANIFESTO:",
          "  Build Intelligence. Create Technology. Shape the Future.",
          "  One company. Multiple startups. Multiple industries.",
          "  One unified vision. Building Today. Leading Tomorrow.",
          "-----------------------------------------------------------"
        );
        break;
      case 'status':
        newLogs.push(
          ">> SYSTEM TELEMETRY: ALL SYSTEMS NOMINAL",
          "  Ecosystem Health: 100%",
          "  Memory Allocation: 14.2 GB / 64 GB Virtual Pool",
          "  3D WebGL Shader Pipeline: 60.0 FPS Steady"
        );
        break;
      case 'clear':
        setLogs([]);
        setInputVal('');
        return;
      default:
        newLogs.push(`Command not recognized: '${cmd}'. Type 'help' for available commands.`);
        break;
    }

    setLogs(newLogs);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5, 7, 13, 0.85)',
        backdropFilter: 'blur(20px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '820px',
          height: '560px',
          display: 'flex',
          flexDirection: 'column',
          background: '#04060c',
          border: '1px solid var(--color-cyan)',
          boxShadow: '0 0 50px rgba(0, 240, 255, 0.25)',
          overflow: 'hidden'
        }}
      >
        {/* Terminal Titlebar */}
        <div 
          style={{
            padding: '0.75rem 1rem',
            background: '#090d18',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <TerminalIcon size={16} style={{ color: 'var(--color-cyan)' }} />
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#ffffff', fontWeight: 600 }}>
              vertex-halex-cli // interactive-shell.sh
            </span>
          </div>
          <button 
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          style={{
            flex: 1,
            padding: '1.25rem',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            lineHeight: 1.6,
            color: '#a7f3d0'
          }}
        >
          {logs.map((log, idx) => (
            <div key={idx} style={{ whiteSpace: 'pre-wrap', marginBottom: '0.2rem', color: log.startsWith('visitor') ? 'var(--color-cyan)' : log.startsWith('>>') ? '#38bdf8' : '#a7f3d0' }}>
              {log}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form 
          onSubmit={handleCommand}
          style={{
            padding: '0.75rem 1rem',
            background: '#090d18',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}
        >
          <span style={{ color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
            visitor@vertex-halex:~$
          </span>
          <input 
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'startups', 'founder', 'vision'..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem'
            }}
          />
          <button type="submit" style={{ background: 'transparent', border: 'none', color: 'var(--color-cyan)', cursor: 'pointer' }}>
            <CornerDownLeft size={16} />
          </button>
        </form>

      </div>
    </div>
  );
}
