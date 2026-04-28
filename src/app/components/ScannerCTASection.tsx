import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ScannerCTASection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10"
          style={{ background: 'linear-gradient(135deg, #0d2b1a 0%, #1a5c3a 50%, #1e3a2a 100%)' }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(45,122,82,0.3) 0%, transparent 60%)',
            }} />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(232,49,106,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />

          {/* Noise texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: '256px 256px',
            }} />

          {/* Left content */}
          <div className="relative z-10 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">Live at CMPL Expo 2026</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to scan your<br />first badge?
            </h2>
            <p className="text-white/60 text-base max-w-md">
              Works on any smartphone — no app download needed. Just open and scan.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="relative z-10 flex flex-col items-center md:items-end gap-4 shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-[#1a5c3a] bg-white transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] whitespace-nowrap"
            >
              <Icon name="QrCodeIcon" size={20} variant="outline" />
              Open scanner
            </a>
            <p className="text-white/40 text-xs text-center">
              Works on Chrome, Safari, Firefox · No login required to try
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}