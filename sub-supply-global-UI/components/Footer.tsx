
import React from 'react';
import { Linkedin, Facebook } from 'lucide-react';
import { NavigationId } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  navigateTo: (tab: NavigationId) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-[#2E4F4A] text-white pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-8 sm:pb-10 md:pb-12 relative overflow-hidden">


      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 mb-12 sm:mb-16 md:mb-20">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-6 sm:mb-8 md:mb-10 cursor-pointer inline-block touch-manipulation" onClick={() => navigateTo('home')}>
              {/* Increased size for readability */}
              <Logo className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" variant="light" />
            </div>
            <p className="text-[#8D9B9A] leading-relaxed mb-6 sm:mb-8 md:mb-10 font-medium font-sans text-[11px] sm:text-xs md:text-sm max-w-md">
              Professional trade solutions for high-growth enterprises. Bridging global markets through precision logistics and ethical trade practices.
            </p>
          </div>

          <div>
            <h5 className="font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] mb-5 sm:mb-6 md:mb-8 lg:mb-10 text-[#FFDE56] font-sans">Quick Links</h5>
            <ul className="space-y-3 sm:space-y-4 md:space-y-6">
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-xs sm:text-sm md:text-base font-bold hover:text-[#EF343A] transition-colors capitalize font-sans touch-manipulation text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-xs sm:text-sm md:text-base font-bold hover:text-[#EF343A] transition-colors capitalize font-sans touch-manipulation text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('network')}
                  className="text-xs sm:text-sm md:text-base font-bold hover:text-[#EF343A] transition-colors capitalize font-sans touch-manipulation text-left"
                >
                  Newsletter
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-xs sm:text-sm md:text-base font-bold hover:text-[#EF343A] transition-colors capitalize font-sans touch-manipulation text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] mb-5 sm:mb-6 md:mb-8 lg:mb-10 text-[#FFDE56] font-sans">Join Co-Supply</h5>
            <p className="text-[#8D9B9A] font-medium leading-relaxed sm:leading-loose font-sans text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
              Shams Free Zone, Dubai, UAE
            </p>
            <p className="text-[#8D9B9A] font-medium leading-relaxed font-sans text-xs sm:text-sm md:text-base mb-2">
              <a href="tel:+917219166618" className="hover:text-[#FFDE56] transition-colors">+917219166618</a>
            </p>
            <p className="text-[#8D9B9A] font-medium leading-relaxed font-sans text-xs sm:text-sm md:text-base">
              <a href="mailto:connect@subsupplyglobal.com" className="hover:text-[#FFDE56] transition-colors break-all">connect@subsupplyglobal.com</a>
            </p>
          </div>

          <div>
            <h5 className="font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] mb-5 sm:mb-6 md:mb-8 lg:mb-10 text-[#FFDE56] font-sans">Update</h5>
            <div className="space-y-3 sm:space-y-4">
              <input
                className="w-full bg-white/5 border-b-2 border-white/20 p-3 sm:p-4 focus:outline-none focus:border-[#EF343A] text-xs sm:text-sm text-white placeholder:text-white/30 font-sans touch-manipulation"
                placeholder="Your Email"
                type="email"
              />
              <button className="w-full bg-white text-[#2E4F4A] py-3 sm:py-4 font-black uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#FFDE56] transition-colors rounded-sm font-sans font-bold touch-manipulation">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 sm:pt-10 md:pt-12 lg:pt-14">
          {/* Social Icons - Centered with decorative lines */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="hidden sm:block h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="flex items-center gap-5 sm:gap-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8D9B9A] hover:text-[#FFDE56] transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
              </a>
              <span className="w-[1px] h-3 bg-white/15"></span>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8D9B9A] hover:text-[#FFDE56] transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <span className="w-[1px] h-3 bg-white/15"></span>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8D9B9A] hover:text-[#FFDE56] transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
              </a>
            </div>
            <div className="hidden sm:block h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-white/20"></div>
          </div>
          {/* Copyright - Centered below */}
          <p className="text-[#8D9B9A]/70 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] font-sans text-center pb-2">
            © 2026 Sub Supply Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
