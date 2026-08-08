import React, { useState } from 'react';
import { 
  X, Send, ShieldCheck, CheckCircle2, Lock, ArrowRight, Building, Mail, Phone, User, Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audioEffects';

export default function ContactPortal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    pillarInterest: 'all',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success
  const [logs, setLogs] = useState([]);
  const [regId, setRegId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in the required fields (Name, Email, Phone).");
      return;
    }

    sound.playWarp();
    setStatus('submitting');
    setLogs([
      ">> Establishing TLS secure channel to Vertex HaleX Venture Node...",
      ">> Cryptographically hashing registration payload...",
      ">> Routing inquiry to Founder & Executive Committee..."
    ]);

    setTimeout(() => {
      const generatedId = 'VHX-' + Math.random().toString(36).substring(2, 9).toUpperCase();
      setRegId(generatedId);
      setLogs((prev) => [
        ...prev,
        `>> INQUIRY REGISTERED SUCCESSFULLY. ID: ${generatedId}`,
        ">> Notification dispatched to Srisank Choudhary (Founder & CEO)."
      ]);
      setStatus('success');
      sound.playSuccess();

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      pillarInterest: 'all',
      message: ''
    });
    setStatus('idle');
    setLogs([]);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5, 7, 13, 0.88)',
        backdropFilter: 'blur(25px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
    >
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#070a14',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          borderRadius: '20px',
          boxShadow: '0 0 60px rgba(0, 240, 255, 0.25)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div 
          style={{
            padding: '1.5rem 2rem',
            background: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div className="badge cyan" style={{ marginBottom: '0.4rem' }}>
              VENTURE & PARTNERSHIP PORTAL
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff' }}>
              Connect with Vertex HaleX
            </h3>
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
            <X size={22} />
          </button>
        </div>

        {/* Form Body */}
        <div style={{ padding: '2rem' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid var(--color-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-emerald)',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Registration Verified
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '1.5rem' }}>
                Your enterprise inquiry has been securely submitted to the Vertex HaleX executive leadership.
              </p>
              
              <div 
                style={{
                  background: '#04060c',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '1rem',
                  marginBottom: '1.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  color: 'var(--color-cyan)'
                }}
              >
                {logs.map((l, i) => (
                  <div key={i} style={{ marginBottom: '0.2rem' }}>{l}</div>
                ))}
              </div>

              <button
                onClick={() => {
                  sound.playClick();
                  handleReset();
                  onClose();
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    FULL NAME *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    WORK EMAIL *
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@enterprise.com"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    DIRECT PHONE / WHATSAPP *
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9204732699"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    ORGANIZATION / FIRM
                  </label>
                  <input 
                    type="text" 
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or Venture Fund"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  PRIMARY PILLAR OF INTEREST
                </label>
                <select
                  value={formData.pillarInterest}
                  onChange={(e) => setFormData({ ...formData, pillarInterest: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: '#0a0f1d',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.875rem'
                  }}
                >
                  <option value="all">Full Ecosystem Licensing / Venture Alliance</option>
                  <option value="sythos">SythOS — Construction Management SaaS</option>
                  <option value="murphy">Murphy — AI Research & Foundation Models</option>
                  <option value="neurox">NeuroX — Eurak Network Neuroscience</option>
                  <option value="falcon">Falcon Trades — FinTech & Algo Intelligence</option>
                  <option value="inforbit">Inforbit — EdTech & Smart Learning Matrix</option>
                  <option value="beyond">Beyond Startups — Drones, Robotics & Hardware</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  PROJECT INQUIRY OR COLLABORATION BRIEF
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your enterprise requirement or partnership scope..."
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem' }}
              >
                <Send size={16} />
                <span>{status === 'submitting' ? 'Encrypting & Transmitting...' : 'Submit Partnership Registration'}</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                <Lock size={12} />
                <span>End-to-End Encrypted Telemetry // Vertex HaleX Protocol</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
