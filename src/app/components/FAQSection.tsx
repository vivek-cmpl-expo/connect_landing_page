'use client';
import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    question: 'Can both visitors and exhibitors scan badges?',
    answer:
      'Yes. Visitors scan exhibitor QR badges to save booth contacts, and exhibitors scan visitor badges to capture leads — both from the same platform.',
  },
  {
    question: 'Do I need to download an app?',
    answer:
      'No app required. CMPLConnect works entirely in your mobile browser. Just open the link, log in, and start scanning.',
  },
  {
    question: 'What information is shared when I scan a badge?',
    answer:
      'Only the details the person submitted during registration — name, company, designation, email, and phone number.',
  },
  {
    question: 'Can I access my contacts after the show?',
    answer:
      'Yes. All scanned contacts stay in your dashboard and can be exported as CSV or Excel any time, even after the event ends.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.fade-up');
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add('visible'), i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="faq" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-4"
            style={{ background: 'rgba(26,92,58,0.08)', color: '#1a5c3a' }}>
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Common questions
          </h2>
          <p className="text-muted-foreground mt-4">
            Things people ask us.
          </p>
        </div>

        <div className="space-y-3">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index ? 'border-primary/30 shadow-sm' : 'border-border'
              } bg-card`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className={`font-semibold text-base transition-colors ${
                  openIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary'
                }`}>
                  {faq?.question}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name="ChevronDownIcon" size={16} variant="outline" />
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-400"
                style={{
                  maxHeight: openIndex === index ? '300px' : '0',
                  transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-border mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq?.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm">
            Still have questions?{' '}
            <a href="mailto:support@cmplexpo.com" className="font-semibold text-primary hover:underline">
              Contact our exhibitor support team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}