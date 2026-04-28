'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FeatureItem {
  icon: string;
  text: string;
}

interface AudienceCard {
  id: string;
  audience: string;
  heading: string;
  description: string;
  features: FeatureItem[];
  variant: 'dark' | 'accent';
}

interface PlatformFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

const audienceCards: AudienceCard[] = [
  {
    id: 'visitors',
    audience: 'For visitors',
    heading: 'Discover & connect with exhibitors',
    description: 'Explore pavilions, scan exhibitor badges, and build your supplier shortlist — all from your phone.',
    features: [
      { icon: 'QrCodeIcon', text: 'Scan exhibitor QR badges instantly' },
      { icon: 'BookmarkIcon', text: 'Save exhibitor contacts to your list' },
      { icon: 'MapIcon', text: 'Browse the show guide & agenda' },
      { icon: 'ArrowDownTrayIcon', text: 'Export your contacts after the show' },
    ],
    variant: 'dark',
  },
  {
    id: 'exhibitors',
    audience: 'For exhibitors',
    heading: 'Capture leads & manage your presence',
    description: 'Scan visitor badges, collect leads, manage your booth profile, and follow up — no paper, no manual entry.',
    features: [
      { icon: 'QrCodeIcon', text: 'Scan visitor QR badges at your booth' },
      { icon: 'TagIcon', text: 'Tag and annotate leads on the floor' },
      { icon: 'BuildingOfficeIcon', text: 'Set up your booth profile & catalogue' },
      { icon: 'ArrowDownTrayIcon', text: 'Export all leads post-event' },
    ],
    variant: 'accent',
  },
];

const platformFeatures: PlatformFeature[] = [
  {
    id: 'badge',
    icon: 'QrCodeIcon',
    title: 'Badge scanning',
    description: 'Scan any QR badge in seconds. No manual entry, no business cards to lose.',
    tag: 'Visitors & exhibitors',
  },
  {
    id: 'contacts',
    icon: 'UsersIcon',
    title: 'Contacts & leads',
    description: 'Save scanned contacts, add notes, and build your list throughout the show.',
    tag: 'Visitors & exhibitors',
  },
  {
    id: 'guide',
    icon: 'MapIcon',
    title: 'Show guide & agenda',
    description: 'Browse the exhibitor directory, floor map, and full conference schedule.',
    tag: 'Visitors',
  },
  {
    id: 'booth',
    icon: 'BuildingStorefrontIcon',
    title: 'Booth profile',
    description: 'Showcase your brand, products, and contact details so visitors can find and save you.',
    tag: 'Exhibitors',
  },
  {
    id: 'export',
    icon: 'ArrowDownTrayIcon',
    title: 'Lead export',
    description: 'Download all scanned contacts as CSV or Excel anytime — even after the event.',
    tag: 'Exhibitors',
  },
  {
    id: 'followup',
    icon: 'EnvelopeIcon',
    title: 'Post-show follow-up',
    description: 'Review your saved contacts and reach out while the conversation is still fresh.',
    tag: 'Visitors & exhibitors',
  },
];

const audienceVariantStyles = {
  dark: {
    bg: 'bg-[#1e2a3a]',
    text: 'text-white',
    subtext: 'text-white/60',
    badgeBg: 'bg-white/10',
    badgeText: 'text-white/70',
    iconBg: 'bg-white/10',
    iconColor: 'text-white',
    checkColor: 'text-green-400',
    featureText: 'text-white/80',
  },
  accent: {
    bg: 'bg-[#1a5c3a]',
    text: 'text-white',
    subtext: 'text-white/70',
    badgeBg: 'bg-white/15',
    badgeText: 'text-white/80',
    iconBg: 'bg-white/15',
    iconColor: 'text-white',
    checkColor: 'text-green-300',
    featureText: 'text-white/80',
  },
};

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.fade-up');
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Visitor & Exhibitor sections */}
      <section id="features" className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto" ref={sectionRef}>
          <div className="grid lg:grid-cols-2 gap-8">
            {audienceCards.map((card, index) => {
              const styles = audienceVariantStyles[card.variant];
              return (
                <div
                  key={card.id}
                  className={`fade-up rounded-2xl p-8 md:p-10 border border-white/10 relative overflow-hidden ${styles.bg}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #ffffff, transparent)', transform: 'translate(30%, -30%)' }} />

                  <div className="relative z-10 space-y-6">
                    <span className={`inline-block text-xs font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-full ${styles.badgeBg} ${styles.badgeText}`}>
                      {card.audience}
                    </span>

                    <div>
                      <h2 className={`font-display text-2xl md:text-3xl font-bold leading-tight ${styles.text}`}>
                        {card.heading}
                      </h2>
                      <p className={`mt-3 text-sm leading-relaxed ${styles.subtext}`}>
                        {card.description}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {card.features.map((feature, fi) => (
                        <li key={fi} className="flex items-center gap-3">
                          <Icon name="CheckCircleIcon" size={16} variant="solid" className={styles.checkColor} />
                          <span className={`text-sm ${styles.featureText}`}>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}