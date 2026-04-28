'use client';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: string;
  color: string;
}

const stats: StatItem[] = [
  {
    value: 500,
    suffix: '+',
    label: 'Exhibitors',
    sublabel: 'Across all categories',
    icon: 'BuildingStorefrontIcon',
    color: '#1a5c3a',
  },
  {
    value: 30000,
    suffix: '+',
    label: 'Trade visitors',
    sublabel: 'Verified industry professionals',
    icon: 'UserGroupIcon',
    color: '#1e2a3a',
  },
  {
    value: 3,
    suffix: ' days',
    label: 'Mumbai, May 4–6',
    sublabel: 'Delhi dates announced soon',
    icon: 'CalendarDaysIcon',
    color: '#1a5c3a',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Conference sessions',
    sublabel: 'Industry keynotes & panels',
    icon: 'MicrophoneIcon',
    color: '#1e2a3a',
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function StatCard({ stat, index, active }: { stat: StatItem; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);

  return (
    <div
      className="feature-card bg-card rounded-2xl p-8 border border-border relative overflow-hidden group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ background: stat.color, filter: 'blur(30px)', transform: 'translate(30%, -30%)' }}
      />
      <div className="relative z-10 space-y-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${stat.color}15` }}
        >
          <Icon name={stat.icon as never} size={22} variant="outline" style={{ color: stat.color }} />
        </div>
        <div>
          <p className="font-display text-4xl font-bold stat-counter" style={{ color: stat.color }}>
            {stat.prefix}{count.toLocaleString()}{stat.suffix}
          </p>
          <p className="text-base font-semibold text-foreground mt-1">{stat.label}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.sublabel}</p>
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-4"
            style={{ background: 'rgba(26,92,58,0.08)', color: '#1a5c3a' }}>
            At a Glance
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            The Scale of CMPL Expo 2026
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}