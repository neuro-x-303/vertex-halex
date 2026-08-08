import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audioEffects';

export default function ContactSection({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: 'sythos',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email.");
      return;
    }

    sound.playSuccess();
    setSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      interest: 'sythos',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: 'rgba(7, 9, 14, 0.6)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="pill-badge" style={{ marginBottom: '1.25rem' }}>
            <span className="dot"></span>
            <span>Get in Touch</span>
          </div>
          <h2>
            Connect with <span className="gradient-text">Vertex HaleX</span>
          </h2>
          <p>
            Whether you want to learn more about our startup ecosystem, collaborate on AI research, 
            or explore enterprise solutions, our executive team is ready to connect.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3.5rem' }}>
          
          {/* Left Column: Direct Contact & Info */}
          <div>
            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1rem' }}>
                Executive Headquarters
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Vertex HaleX operates across SaaS, AI foundation research, neuroscience, FinTech, education, 
                and physical hardware robotics.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.925rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Direct Executive Line</div>
                    <a href="tel:+919204732699" style={{ color: '#ffffff', fontWeight: 600 }}>
                      +91 9204732699
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Founder & CEO</div>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>
                      Srisank Choudhary
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ecosystem Hub</div>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>
                      Global Innovation Network
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(52, 211, 153, 0.15)',
                      border: '1px solid var(--accent-emerald)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)',
                      margin: '0 auto 1.25rem auto'
                    }}
                  >
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    Message Received
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                    Thank you for reaching out. Your inquiry has been sent to the Vertex HaleX executive team.
                  </p>
                  <button
                    onClick={handleReset}
                    className="btn btn-secondary"
                    style={{ padding: '0.65rem 1.5rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    Send an Inquiry
                  </h3>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        Phone / WhatsApp
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9204732699"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                        Startup Pillar of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          background: '#0d111c',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          color: '#ffffff',
                          fontSize: '0.9rem'
                        }}
                      >
                        <option value="all">General Ecosystem Inquiry</option>
                        <option value="sythos">SythOS — Construction Management SaaS</option>
                        <option value="murphy">Murphy — AI Research & Foundation Models</option>
                        <option value="neurox">NeuroX — Eurak Neuroscience</option>
                        <option value="falcon">Falcon Trades — FinTech & Trading</option>
                        <option value="inforbit">Inforbit — EdTech Platforms</option>
                        <option value="beyond">Beyond Startups — Hardware & Robotics</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                      Message
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist your venture or enterprise?"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem' }}
                  >
                    <span>Send Message</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
