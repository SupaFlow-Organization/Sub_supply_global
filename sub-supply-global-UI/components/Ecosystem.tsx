import React from 'react';
import { FadeIn } from './FadeIn';
import { EcosystemSection } from '../lib/types';

interface EcosystemProps {
  data: EcosystemSection;
}

export const Ecosystem: React.FC<EcosystemProps> = ({ data }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2E4F4A] uppercase italic tracking-tighter mb-4 sm:mb-6 text-center font-sans">
              {data.title}
            </h2>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#8D9B9A] font-medium mb-8 sm:mb-10 text-center max-w-2xl mx-auto leading-relaxed">
              {data.description}
            </p>
          </FadeIn>

          {/* Cards Grid */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10">
            <FadeIn direction="right" delay={100}>
              <div className="bg-white p-5 sm:p-6 md:p-8 border border-[#F1F5F9] flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#2E4F4A] uppercase tracking-tight mb-3 font-sans">
                  {data.franchiseOwners.title}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#EF343A] to-[#FFDE56] mb-4 rounded-full"></div>
                <p className="text-sm sm:text-base text-[#8D9B9A] leading-relaxed font-medium font-sans">
                  {data.franchiseOwners.description}
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={200}>
              <div className="bg-white p-5 sm:p-6 md:p-8 border border-[#F1F5F9] flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#2E4F4A] uppercase tracking-tight mb-3 font-sans">
                  {data.verifiedSuppliers.title}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#EF343A] to-[#FFDE56] mb-4 rounded-full"></div>
                <p className="text-sm sm:text-base text-[#8D9B9A] leading-relaxed font-medium font-sans">
                  {data.verifiedSuppliers.description}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Bottom Note */}
          <FadeIn delay={300} className="text-center">
            <p className="text-sm sm:text-base text-[#8D9B9A] font-medium italic leading-relaxed max-w-3xl mx-auto">
              Whether the deal is trade-based or commission-based, it stays inside our system — ensuring accountability and consistency.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
