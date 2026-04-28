'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/10 backdrop-blur-xl' : ''
        }`}
        style={{
          background: scrolled
            ? 'rgba(30,42,58,0.95)'
            : 'rgba(30,42,58,0.8)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <AppLogo
              size={36}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <span className="font-display font-bold text-lg text-white tracking-tight hidden sm:block">
              CMPLConnect
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="nav-link-underline text-xs font-semibold uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors pb-0.5"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-xs font-semibold text-white/70 hover:text-white transition-colors px-4 py-2"
            >
              Log in
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white uppercase tracking-widest transition-all hover:opacity-90 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1a5c3a 0%, #2d7a52 100%)' }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} variant="outline" />
          </button>
        </div>
      </header>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: 'rgba(30,42,58,0.98)', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={handleLinkClick}
                className="text-2xl font-bold text-white/80 hover:text-white transition-colors uppercase tracking-widest"
              >
                {link?.label}
              </a>
            ))}
            <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-xs">
              <a
                href="#"
                onClick={handleLinkClick}
                className="w-full text-center py-3.5 rounded-xl text-sm font-semibold text-white/70 border border-white/20 hover:border-white/40 hover:text-white transition-all"
              >
                Log in to Dashboard
              </a>
              <a
                href="#features"
                onClick={handleLinkClick}
                className="w-full text-center py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #1a5c3a 0%, #2d7a52 100%)' }}
              >
                Get Started as Exhibitor
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}