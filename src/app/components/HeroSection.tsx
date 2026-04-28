'use client';
import React, { useEffect, useRef } from 'react';

import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY, currentTarget } = e;
      const target = currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      const blob1 = heroRef.current.querySelector('.hero-blob-1') as HTMLElement;
      const blob2 = heroRef.current.querySelector('.hero-blob-2') as HTMLElement;
      if (blob1) {
        blob1.style.transform = `translate(${x * 40}px, ${y * 40}px) scale(1.05)`;
      }
      if (blob2) {
        blob2.style.transform = `translate(${x * -30}px, ${y * -30}px) scale(1.05)`;
      }
    };

    const el = heroRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #0d1f2d 0%, #1e2a3a 40%, #1a3d28 100%)' }}
    >
      {/* Atmospheric depth layers */}
      <div
        className="hero-blob-1 absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none hero-glow"
        style={{
          background: 'radial-gradient(circle, rgba(26,92,58,0.5) 0%, rgba(45,122,82,0.2) 50%, transparent 70%)',
          filter: 'blur(60px)',
          transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <div
        className="hero-blob-2 absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none hero-glow-2"
        style={{
          background: 'radial-gradient(circle, rgba(232,49,106,0.2) 0%, rgba(245,166,35,0.1) 50%, transparent 70%)',
          filter: 'blur(80px)',
          transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Event badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-m font-semibold uppercase tracking-[0.2em] text-white/70">
                CMPL Expo 2026 · Mumbai May 4–6
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white">
              Scan, connect{' '}
              <span className="gradient-brand-text">and network</span>
              <br />
              <span className="text-white/60">- at the expo and beyond</span>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed max-w-xl font-light">
              CMPLConnect is the official platform for CMPL Expo. Whether you're an exhibitor capturing leads or a visitor finding your next supplier — start here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://scan.cmplconnect.com/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(26,92,58,0.5)]"
                style={{ background: 'linear-gradient(135deg, #1a5c3a 0%, #2d7a52 100%)' }}
              >
                <Icon name="UserIcon" size={18} variant="outline" />
                I'm a visitor
              </a>
              <a
                href="https://scan.cmplconnect.com/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-sm tracking-wide border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                <Icon name="BuildingStorefrontIcon" size={18} variant="outline" />
                I'm an exhibitor
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <Icon name="CheckCircleIcon" size={14} variant="solid" className="text-green-400" />
                Browser-based — no install
              </div>
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <Icon name="CheckCircleIcon" size={14} variant="solid" className="text-green-400" />
                Live on the show floor
              </div>
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <Icon name="CheckCircleIcon" size={14} variant="solid" className="text-green-400" />
                CSV export after show
              </div>
            </div>
          </div>

          {/* Right: QR Scanner UI mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ background: 'rgba(30,42,58,0.8)', backdropFilter: 'blur(20px)' }}>
              {/* Scanner header */}
              <div className="px-6 py-4 flex items-center gap-3 border-b border-white/10"
                style={{ background: 'rgba(26,92,58,0.9)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10">
                  <Icon name="QrCodeIcon" size={18} variant="outline" className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">QR Scanner</p>
                  <p className="text-xs text-white/60">Scan or enter contact details</p>
                </div>
                <div className="ml-auto flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <span className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
              </div>

              {/* Scanner body */}
              <div className="p-6 space-y-4">
                {/* QR viewport */}
                <div className="dashed-border p-8 flex flex-col items-center gap-3 scanner-pulse"
                  style={{ background: 'rgba(26,92,58,0.08)' }}>
                  {/* QR code illustration */}
                  <div className="w-16 h-16 relative">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <rect x="4" y="4" width="22" height="22" rx="2" fill="none" stroke="#2d7a52" strokeWidth="3" />
                      <rect x="10" y="10" width="10" height="10" rx="1" fill="#2d7a52" />
                      <rect x="38" y="4" width="22" height="22" rx="2" fill="none" stroke="#2d7a52" strokeWidth="3" />
                      <rect x="44" y="10" width="10" height="10" rx="1" fill="#2d7a52" />
                      <rect x="4" y="38" width="22" height="22" rx="2" fill="none" stroke="#2d7a52" strokeWidth="3" />
                      <rect x="10" y="44" width="10" height="10" rx="1" fill="#2d7a52" />
                      <rect x="38" y="38" width="6" height="6" rx="1" fill="#2d7a52" />
                      <rect x="48" y="38" width="6" height="6" rx="1" fill="#2d7a52" />
                      <rect x="38" y="48" width="6" height="6" rx="1" fill="#2d7a52" />
                      <rect x="48" y="48" width="6" height="6" rx="1" fill="#2d7a52" />
                      <rect x="32" y="32" width="4" height="4" rx="0.5" fill="#2d7a52" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-white">Tap to Open Camera</p>
                  <p className="text-xs text-white/50">Point camera at QR code</p>
                </div>

                {/* Buttons */}
                <button className="w-full py-3 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
                  style={{ background: '#1a5c3a' }}>
                  <Icon name="CameraIcon" size={16} variant="outline" />
                  Open Camera
                </button>
                <button className="w-full py-3 rounded-lg text-sm font-medium border border-white/20 text-white/70 flex items-center justify-center gap-2 hover:border-white/40 hover:text-white transition-all"
                  style={{ background: 'transparent' }}>
                  <Icon name="PencilIcon" size={16} variant="outline" />
                  Manual Entry
                </button>

                <button className="w-full py-2 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                  style={{ color: '#2d7a52' }}>
                  <Icon name="UsersIcon" size={14} variant="outline" />
                  View All Scanned Contacts
                </button>
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(26,92,58,0.1)' }}>
                <Icon name="UserGroupIcon" size={16} variant="outline" className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Leads captured today</p>
                <p className="text-sm font-bold text-foreground">47 contacts</p>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-border flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-foreground">Live at Booth #A14</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #f4f6f8)' }} />
    </section>
  );
}