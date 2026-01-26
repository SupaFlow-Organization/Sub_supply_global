import React from 'react';
import { FadeIn } from './FadeIn';
import { ExpandableSection } from './ExpandableSection';
import { WhyChooseSection } from '../lib/types';

interface WhyChooseProps {
  data: WhyChooseSection;
}

export const WhyChoose: React.FC<WhyChooseProps> = ({ data }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#2E4F4A] uppercase italic tracking-tighter mb-4 sm:mb-6 font-sans px-2">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="text-lg sm:text-xl md:text-2xl text-[#8D9B9A] font-medium max-w-2xl mx-auto">
                  {data.subtitle}
                </p>
              )}
            </div>

            <div className="space-y-0 mb-8 sm:mb-12">
              {data.points.map((point) => (
                <ExpandableSection
                  key={point._id}
                  title={point.title}
                  shortDescription=""
                  fullDescription={point.fullDescription}
                />
              ))}
            </div>

            {data.benefits && data.benefits.length > 0 && (
              <div className="bg-[#F8F9FA] p-6 sm:p-8 md:p-10 border-l-4 border-[#EF343A]">
                <h3 className="text-lg sm:text-xl font-bold text-[#2E4F4A] mb-4 sm:mb-6 uppercase">
                  What this means for you:
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {data.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#EF343A] font-bold mt-1">●</span>
                      <span className="text-sm sm:text-base text-[#8D9B9A] font-medium flex-1">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
