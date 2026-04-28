import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + brand */}
          <div className="flex items-center gap-2.5">
            <AppLogo size={252} />
      
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>

          {/* Legal */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a  className="hover:text-foreground transition-colors">Privacy</a>
            <a  className="hover:text-foreground transition-colors">Terms</a>
            <span>© 2026 CMPL Expo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}