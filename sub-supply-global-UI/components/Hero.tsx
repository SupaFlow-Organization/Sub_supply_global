
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { NavigationId } from '../types';
import { Button } from './ui/button';
import { HeroSection, TrustedCompany } from '../lib/types';

interface HeroProps {
  navigateTo: (tab: NavigationId) => void;
  data?: HeroSection | null;
  trustedCompanies?: TrustedCompany[];
}

export const Hero: React.FC<HeroProps> = ({ navigateTo, data, trustedCompanies = [] }) => {
  const title = data?.title || 'Your Global';
  const highlightedTitle = data?.highlightedTitle || 'Export & Import Partner.';
  const subtitle = data?.subtitle || 'Ensuring your products reach global markets swiftly and securely. We specialize in supply chain management, warehousing, and international trade solutions.';
  const primaryButtonText = data?.primaryButtonText || 'Our Capabilities';
  const secondaryButtonText = data?.secondaryButtonText || 'Start Project';
  
  // Split "One Partner. Zero Middlemen." into two lines
  const renderHighlightedTitle = () => {
    if (!highlightedTitle) return null;
    
    // Check if it contains both phrases (case-insensitive)
    const lowerTitle = highlightedTitle.toLowerCase();
    if (lowerTitle.includes('one partner') && lowerTitle.includes('zero middlemen')) {
      // Split by period and clean up
      const parts = highlightedTitle.split(/\.\s*/).filter(p => p.trim());
      
      // Find the parts containing our phrases
      const onePartnerPart = parts.find(p => p.toLowerCase().includes('one partner'));
      const zeroMiddlemenPart = parts.find(p => p.toLowerCase().includes('zero middlemen'));
      
      if (onePartnerPart && zeroMiddlemenPart) {
        return (
          <>
            {onePartnerPart.trim()}. <br />
            {zeroMiddlemenPart.trim()}.
          </>
        );
      }
      
      // Fallback: try regex match for "One Partner. Zero Middlemen."
      const match = highlightedTitle.match(/(One Partner\.?)\s*(Zero Middlemen\.?)/i);
      if (match) {
        return (
          <>
            {match[1].trim()} <br />
            {match[2].trim()}
          </>
        );
      }
    }
    
    // Default: render as-is
    return highlightedTitle;
  };
  
  return (
    <section className="relative min-h-[100vh] sm:min-h-[95vh] flex flex-col justify-end overflow-hidden bg-[#0A1A18]">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic Gradient Overlays */}
        {/* Darker gradient at bottom to make white text pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A18] via-[#2E4F4A]/40 to-transparent z-10 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E4F4A]/90 via-[#2E4F4A]/20 to-transparent z-10" />
        
        {/* Tech Grid Overlay */}
        <div 
          className="absolute inset-0 z-20 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'radial-gradient(#FFDE56 0.5px, transparent 0.5px)', 
            backgroundSize: '30px 30px' 
          }}
        />

        {/* Ken Burns Animated Image */}
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2400" 
          alt="International Shipping Terminal" 
          className="w-full h-full object-cover scale-110 animate-[kenburns_40s_ease_infinite_alternate] brightness-50 contrast-125"
        />
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-30 mb-auto mt-auto pt-20 sm:pt-32 md:pt-40 pb-8 sm:pb-12">
        <div className="max-w-5xl">
          <FadeIn direction="up" delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-[0.95] tracking-tighter font-sans">
              {title} <br className="hidden sm:block"/>
              <span className="italic text-[#FFDE56]">
                {renderHighlightedTitle()}
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={400}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-12 max-w-2xl leading-relaxed font-light font-sans">
              {subtitle}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-start">
              <Button 
                onClick={() => navigateTo('services')}
                variant="secondary"
                size="lg"
                className="font-bold text-[#2E4F4A] group w-full sm:w-auto justify-center sm:justify-start"
              >
                {primaryButtonText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
              </Button>
              
              <Button 
                onClick={() => navigateTo('contact')}
                variant="outline-light"
                size="lg"
                className="font-bold w-full sm:w-auto justify-center sm:justify-start"
              >
                {secondaryButtonText}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>


      {/* Aesthetic Vertical Accents - Right Side */}
      <div className="absolute right-4 sm:right-8 lg:right-12 bottom-0 w-[1px] h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-[#FFDE56] to-transparent opacity-30 hidden md:block"></div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
      `}} />
    </section>
  );
};
