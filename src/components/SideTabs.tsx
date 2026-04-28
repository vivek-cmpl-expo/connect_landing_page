'use client';
import React from 'react';

const tabs = [
  { label: 'SHOWGUIDE', href: 'https://showguide.cmplexpo.com/', bg: '#f97316' },
  { label: 'WORKSHOPS', href: 'https://workshops.cmplexpo.com/', bg: '#ec4899' },
  { label: 'AGENDA', href: 'https://agenda.cmplexpo.com/', bg: '#7c3aed' },
  { label: 'REGISTER NOW TO VISIT', href: 'https://cmpl.world/', bg: '#1e40af' },
];

export default function SideTabs() {
  return (
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
      {tabs.map((tab) => (
        <a
          key={tab.label}
          href={tab.href}
          className="flex items-center justify-center text-white font-bold tracking-widest text-xs rounded-r-lg shadow-lg transition-all hover:translate-x-[-4px] hover:shadow-xl"
          style={{
            background: tab.bg,
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            padding: '20px 10px',
            minHeight: '120px',
          }}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}
