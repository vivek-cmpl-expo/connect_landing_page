'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    icon: 'UserPlusIcon',
    title: 'Register',
    description: 'Sign up as a visitor or exhibitor using your event details.',
    color: '#1a5c3a',
  },
  {
    number: '02',
    icon: 'BuildingOfficeIcon',
    title: 'Set up profile',
    description: 'Add your details so others can connect with you at the show.',
    color: '#1e2a3a',
  },
  {
    number: '03',
    icon: 'QrCodeIcon',
    title: 'Scan badges',
    description: 'Use your phone camera to scan QR badges on the show floor.',
    color: '#1a5c3a',
  },
  {
    number: '04',
    icon: 'ArrowDownTrayIcon',
    title: 'Follow up',
    description: 'Export contacts and reach out while interest is high.',
    color: '#1e2a3a',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.fade-up');
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add('visible'), i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-4"
            style={{ background: 'rgba(26,92,58,0.08)', color: '#1a5c3a' }}>
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Up and Running in Minutes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            No IT setup. No app store. Just open your browser and start scanning.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only, aligned to center of 64px (w-16) circles */}
          <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] h-px"
            style={{
              top: '32px',
              background: 'linear-gradient(90deg, #1a5c3a 0%, #2d7a52 50%, #1e2a3a 100%)'
            }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="fade-up flex flex-col items-center text-center relative"
                style={{ transitionDelay: `${index * 100}ms` }}>
                {/* Step circle */}
                <div className="relative mb-6 z-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                    style={{ background: step.color, borderColor: step.color }}
                  >
                    <Icon name={step.icon as never} size={24} variant="outline" className="text-white" />
                  </div>
                  {/* Step number badge */}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-background z-20"
                    style={{ background: '#e8316a' }}
                  >
                    {index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Step {step.number}
                  </p>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card">
            <Icon name="GlobeAltIcon" size={20} variant="outline" className="text-primary" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">100% browser-based</span> — works on any device, any OS, no download required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}