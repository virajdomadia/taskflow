import React from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Zap } from "lucide-react";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-emerald-500 p-1.5 rounded-lg group-hover:scale-110 group-hover:shadow-emerald-glow transition-all duration-200">
                <Zap className="h-5 w-5 text-slate-950" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">TaskFlow</span>
            </Link>
            <p className="text-slate-500 max-w-xs leading-relaxed font-medium">
              Simple task management for small teams. No complexity, just focus on what matters.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-8">
              Product
            </h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Features</Link></li>
              <li><Link href="#pricing" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Pricing</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Integrations</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Updates</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">About Us</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Contact</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Careers</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Blog</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-8">
              Resources
            </h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Help Center</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Documentation</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors font-medium">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm font-medium">
            © {currentYear} TaskFlow. All rights reserved. Built for clarity.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-slate-500 hover:text-emerald-400 transition-all hover:scale-110">
              <TwitterIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-500 hover:text-emerald-400 transition-all hover:scale-110">
              <LinkedinIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-500 hover:text-emerald-400 transition-all hover:scale-110">
              <GithubIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};



