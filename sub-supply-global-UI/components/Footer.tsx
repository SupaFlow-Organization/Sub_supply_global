
import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
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
              <Logo className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto" variant="light" />
            </div>
            <p className="text-[#8D9B9A] leading-relaxed mb-6 sm:mb-8 md:mb-10 font-medium font-sans text-xs sm:text-sm md:text-base max-w-md">
              Professional trade solutions for high-growth enterprises. Bridging global markets through precision logistics and ethical trade practices.
            </p>
          </div>
          
          <div>
            <h5 className="font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] mb-5 sm:mb-6 md:mb-8 lg:mb-10 text-[#FFDE56] font-sans">Quick Links</h5>
            <ul className="space-y-3 sm:space-y-4 md:space-y-6">
              <li>
                <button 
                  onClick={() => navigateTo('about')} 
                  className="text-sm sm:text-base md:text-lg font-bold hover:text-[#EF343A] transition-colors capitalize font-sans touch-manipulation text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')} 
                  className="text-sm sm:text-base md:text-lg font-bold hover:text-[#EF343A] transition-colors capitalize font-sans touch-manipulation text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('network')} 
                  className="text-sm sm:text-base md:text-lg font-bold hover:text-[#EF343A] transition-colors capitalize font-sans touch-manipulation text-left"
                >
                  Newsletter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('contact')} 
                  className="text-sm sm:text-base md:text-lg font-bold hover:text-[#EF343A] transition-colors capitalize font-sans touch-manipulation text-left"
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
              <a href="tel:+9715800755" className="hover:text-[#FFDE56] transition-colors">+971-5800755</a>
            </p>
            <p className="text-[#8D9B9A] font-medium leading-relaxed font-sans text-xs sm:text-sm md:text-base">
              <a href="mailto:Reach@subsupplyglobal.com" className="hover:text-[#FFDE56] transition-colors break-all">Reach@subsupplyglobal.com</a>
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
        
        <div className="border-t border-white/10 pt-6 sm:pt-8 md:pt-10 lg:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-[#8D9B9A] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] font-sans text-center md:text-left">
            © 2026 Sub Supply Global. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 md:gap-8">
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8D9B9A] hover:text-[#FFDE56] transition-colors touch-manipulation"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8D9B9A] hover:text-[#FFDE56] transition-colors touch-manipulation"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8D9B9A] hover:text-[#FFDE56] transition-colors touch-manipulation"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
