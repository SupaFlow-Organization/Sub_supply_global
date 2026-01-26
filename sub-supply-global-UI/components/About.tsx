
import React from 'react';
import { FadeIn } from './FadeIn';
import { NavigationId } from '../types';
import { AboutSection, WhyChooseSection, EcosystemSection } from '../lib/types';
import { WhyChoose } from './WhyChoose';
import { Ecosystem } from './Ecosystem';

interface AboutProps {
  navigateTo: (tab: NavigationId) => void;
  data?: AboutSection | null;
  whyChooseData?: WhyChooseSection | null;
  ecosystemData?: EcosystemSection | null;
}

export const About: React.FC<AboutProps> = ({ navigateTo, data, whyChooseData, ecosystemData }) => {
  const sectionLabel = data?.sectionLabel || 'Who We Are';
  const title = data?.title || 'Engineering the';
  const highlightedTitle = data?.highlightedTitle || 'Flow of Commerce.';
  const description = data?.description || 'We don\'t just move freight; we orchestrate supply chains. Leveraging advanced telemetry and a sovereign network of deep-water ports, Sub Supply Global eliminates friction from the logistics equation, delivering absolute certainty in an uncertain world.';
  const stats = data?.stats || [
    { value: '120', suffix: '+', label: 'Global Hubs' },
    { value: '2.4', suffix: 'M', label: 'TEU Managed' }
  ];
  
  // Get image URL from content data
  const imageUrl = data?.image?.asset?.url || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200';
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8F9FA] -z-10 skew-x-12 translate-x-32 hidden md:block" />
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] font-black text-[#F1F5F9] leading-none select-none -z-10 opacity-50">
          01
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-32 items-center">
            
            {/* Left: Image Composition */}
            <div className="w-full lg:w-1/2 relative max-w-xl lg:max-w-none mx-auto">
              <FadeIn direction="right" delay={200}>
                <div className="relative z-10">
                  {/* Main Image */}
                  <div className="relative overflow-hidden aspect-[4/5] shadow-2xl">
                    <div className="absolute inset-0 bg-[#2E4F4A]/10 z-10 mix-blend-multiply transition-opacity duration-700 hover:opacity-0" />
                    <img 
                      src={imageUrl}
                      alt="Strategic Logistics Operations" 
                      className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                    />
                  </div>
                </div>
                
                {/* Back Accent Box */}
                <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 md:-top-10 md:-left-10 w-full h-full border-2 border-[#2E4F4A]/5 -z-10" />
              </FadeIn>
            </div>

            {/* Right: Content & Stats */}
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={400}>
                <div className="mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3">
                  <span className="w-6 sm:w-8 md:w-12 h-[2px] bg-[#EF343A]"></span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#8D9B9A]">{sectionLabel}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2E4F4A] mb-4 sm:mb-6 md:mb-8 leading-[0.9] tracking-tighter font-sans">
                  {title} <br className="hidden sm:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E4F4A] to-[#8D9B9A]">{highlightedTitle}</span>
                </h2>
                
                <p className="text-[#8D9B9A] mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg leading-relaxed font-medium font-sans max-w-lg">
                  {description}
                </p>

                {/* Dashboard Style Stats */}
                {stats.length > 0 && (
                  <div className="flex flex-wrap gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-6 sm:gap-y-8 py-6 sm:py-8 border-y border-[#2E4F4A]/10">
                    {stats.map((stat, i) => {
                      const colors = ['#EF343A', '#FFDE56', '#EF343A'];
                      const color = colors[i % colors.length];
                      return (
                        <div key={i} className="group flex-1 min-w-[120px]">
                          <div className="flex items-baseline gap-1 mb-1 sm:mb-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2E4F4A] tracking-tighter group-hover:text-[#EF343A] transition-colors">{stat.value}</span>
                            <span className="text-base sm:text-lg md:text-xl font-bold" style={{ color }}>{stat.suffix}</span>
                          </div>
                          <div className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#8D9B9A]">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Redesigned */}
      {data?.whatWeDo && data.whatWeDo.length > 0 && (
        <section className="py-10 sm:py-12 md:py-16 bg-[#F8F9FA] relative overflow-hidden">
          {/* Subtle Background Decorative Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-white/50 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
            <FadeIn>
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2E4F4A] uppercase italic mb-6 sm:mb-8 md:mb-10 font-sans text-center tracking-tighter">
                What We Do
              </h2>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {data.whatWeDo.map((item, index) => (
                  <FadeIn
                    key={index}
                    delay={index * 100}
                    className="group"
                  >
                    <div className="flex items-start gap-3 p-4 sm:p-5 bg-white shadow-sm hover:shadow-md border border-[#F1F5F9] hover:border-[#EF343A]/20 transition-all duration-300 h-full">
                      {/* Red Circular Bullet */}
                      <div className="flex-shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#EF343A] mt-1.5 group-hover:scale-125 transition-transform duration-300"></div>
                      
                      {/* Service Text */}
                      <p className="text-sm sm:text-base text-[#2E4F4A] font-medium leading-relaxed flex-1 group-hover:text-[#EF343A] transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Our Ecosystem - Simplified */}
      {ecosystemData && <Ecosystem data={ecosystemData} />}

      {/* Why Choose SubSupply Global */}
      {whyChooseData && <WhyChoose data={whyChooseData} />}
    </>
  );
};
