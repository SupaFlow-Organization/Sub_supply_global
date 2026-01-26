import React from 'react';
import { FadeIn } from './FadeIn';
import { ExpandableSection } from './ExpandableSection';
import { CoSupplySection } from '../lib/types';
import { Button } from './ui/button';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface CoSupplyProps {
  data: CoSupplySection;
}

export const CoSupply: React.FC<CoSupplyProps> = ({ data }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <FadeIn>
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2E4F4A] uppercase italic tracking-tighter mb-4 sm:mb-6 font-sans">
                {data.hero.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#8D9B9A] font-medium max-w-3xl mx-auto leading-relaxed">
                {data.hero.subtitle}
              </p>
            </div>
          </FadeIn>

          {/* What Co-Supply Is */}
          <FadeIn delay={100}>
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2E4F4A] uppercase mb-4 sm:mb-6 font-sans">
                {data.whatIs.title}
              </h3>
              <p className="text-base sm:text-lg text-[#8D9B9A] font-medium mb-6 sm:mb-8 leading-relaxed">
                {data.whatIs.description}
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {data.whatIs.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#EF343A] font-bold mt-1">●</span>
                    <span className="text-sm sm:text-base text-[#8D9B9A] font-medium flex-1">
                      {point.replace(/\*\*(.*?)\*\*/g, '$1')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Why Co-Supply */}
          <FadeIn delay={200}>
            <div className="mb-12 sm:mb-16 md:mb-20 bg-[#F8F9FA] p-6 sm:p-8 md:p-10 rounded-lg">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2E4F4A] uppercase mb-4 sm:mb-6 font-sans">
                {data.whyCoSupply.title}
              </h3>
              <p className="text-base sm:text-lg text-[#8D9B9A] font-medium mb-6 sm:mb-8 leading-relaxed">
                {data.whyCoSupply.description}
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {data.whyCoSupply.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#EF343A] font-bold mt-1">●</span>
                    <span className="text-sm sm:text-base text-[#8D9B9A] font-medium flex-1">
                      {point.replace(/\*\*(.*?)\*\*/g, '$1')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* How It Works */}
          <FadeIn delay={300}>
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2E4F4A] uppercase mb-6 sm:mb-8 font-sans">
                {data.howItWorks.title}
              </h3>
              <div className="space-y-0">
                {data.howItWorks.steps.map((step) => (
                  <ExpandableSection
                    key={step._id}
                    title={`${step.order}. ${step.title}`}
                    shortDescription={step.description.split('.')[0] + '.'}
                    fullDescription={step.description}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Commission Model */}
          <FadeIn delay={400}>
            <div className="mb-12 sm:mb-16 md:mb-20 bg-[#2E4F4A] text-white p-6 sm:p-8 md:p-10 rounded-lg">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4 sm:mb-6 font-sans">
                {data.commissionModel.title}
              </h3>
              <p className="text-base sm:text-lg font-medium mb-6 sm:mb-8 leading-relaxed opacity-90">
                {data.commissionModel.description.replace(/\*\*(.*?)\*\*/g, '$1')}
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {data.commissionModel.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#FFDE56] font-bold mt-1">●</span>
                    <span className="text-sm sm:text-base font-medium flex-1 opacity-90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Settlement options:</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {data.commissionModel.settlementOptions.map((option, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#FFDE56] font-bold mt-1">•</span>
                      <span className="text-sm sm:text-base font-medium flex-1 opacity-90">
                        {option}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Who Can Join */}
          <FadeIn delay={500}>
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2E4F4A] uppercase mb-4 sm:mb-6 font-sans">
                {data.whoCanJoin.title}
              </h3>
              <p className="text-base sm:text-lg text-[#8D9B9A] font-medium mb-6 sm:mb-8 leading-relaxed">
                {data.whoCanJoin.description}
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {data.whoCanJoin.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#EF343A] font-bold mt-1">●</span>
                    <span className="text-sm sm:text-base text-[#8D9B9A] font-medium flex-1">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Products */}
          <FadeIn delay={600}>
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2E4F4A] uppercase mb-4 sm:mb-6 font-sans">
                {data.products.title}
              </h3>
              <p className="text-base sm:text-lg text-[#8D9B9A] font-medium mb-4 sm:mb-6 leading-relaxed">
                {data.products.description}
              </p>
              <p className="text-base sm:text-lg text-[#2E4F4A] font-bold italic">
                {data.products.focus.replace(/\*\*(.*?)\*\*/g, '$1')}
              </p>
            </div>
          </FadeIn>

          {/* What Makes Co-Supply Different */}
          <FadeIn delay={700}>
            <div className="mb-12 sm:mb-16 md:mb-20 bg-[#F8F9FA] p-6 sm:p-8 md:p-10 rounded-lg">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2E4F4A] uppercase mb-6 sm:mb-8 font-sans">
                {data.differentiators.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {data.differentiators.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#EF343A] font-bold mt-1">●</span>
                    <span className="text-sm sm:text-base text-[#8D9B9A] font-medium flex-1">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Built for the Long Run */}
          <FadeIn delay={800}>
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2E4F4A] uppercase mb-4 sm:mb-6 font-sans">
                {data.builtForLongRun.title}
              </h3>
              <p className="text-base sm:text-lg text-[#8D9B9A] font-medium mb-6 sm:mb-8 leading-relaxed">
                {data.builtForLongRun.description}
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {data.builtForLongRun.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#EF343A] font-bold mt-1">●</span>
                    <span className="text-sm sm:text-base text-[#8D9B9A] font-medium flex-1">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact Section */}
          <FadeIn delay={900}>
            <div className="bg-[#2E4F4A] text-white p-6 sm:p-8 md:p-10 rounded-lg">
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-6 sm:mb-8 font-sans">
                Join Co-Supply
              </h3>
              <p className="text-base sm:text-lg font-medium mb-6 sm:mb-8 opacity-90">
                If you're ready to stop chasing buyers and start supplying with confidence, let's talk.
              </p>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 text-[#FFDE56] shrink-0" />
                  <span className="text-sm sm:text-base font-medium">{data.contact.location}</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Phone className="w-5 h-5 text-[#FFDE56] shrink-0" />
                  <a href={`tel:${data.contact.phone}`} className="text-sm sm:text-base font-medium hover:text-[#FFDE56] transition-colors">
                    {data.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 text-[#FFDE56] shrink-0" />
                  <a href={`mailto:${data.contact.email}`} className="text-sm sm:text-base font-medium hover:text-[#FFDE56] transition-colors break-all">
                    {data.contact.email}
                  </a>
                </div>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto font-bold"
              >
                {data.contact.ctaText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
