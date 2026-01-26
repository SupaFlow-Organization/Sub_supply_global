
import React from 'react';
import { ShieldCheck, Zap, Globe2, Anchor, ArrowRight, Package, Clock, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Button } from './ui/button';
import { NavigationId } from '../types';
import { WorkflowStep, FeatureItem } from '../lib/types';

interface HomeSectionProps {
  navigateTo?: (tab: NavigationId) => void;
  data?: FeatureItem[];
}

interface WorkflowProps {
  data?: WorkflowStep[];
}

const workflowIconMap: Record<string, React.ReactNode> = {
  package: <Package className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
  shieldcheck: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
  anchor: <Anchor className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
  checkcircle: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
};

const defaultWorkflowSteps = [
  { icon: <Package />, title: "Book", desc: "Digital quote & booking" },
  { icon: <ShieldCheck />, title: "Verify", desc: "Customs & Compliance" },
  { icon: <Anchor />, title: "Transit", desc: "Real-time tracking" },
  { icon: <CheckCircle2 />, title: "Deliver", desc: "Last-mile execution" }
];

export const Workflow: React.FC<WorkflowProps> = ({ data }) => {
  const steps = data && data.length > 0 
    ? data.slice(0, 4).map((step, i) => ({
        icon: workflowIconMap[step.icon] || <Package />,
        title: step.title,
        desc: step.description,
        order: step.order || i + 1
      }))
    : defaultWorkflowSteps;

  return (
  <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#2E4F4A] uppercase italic tracking-tighter mb-3 sm:mb-4">How It Works</h2>
          <p className="text-[#8D9B9A] text-xs sm:text-sm md:text-base">Streamlined logistics from origin to destination.</p>
        </FadeIn>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop only) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-[#F1F5F9] -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 relative z-10">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 100} direction="up">
              <div className="bg-white p-5 sm:p-6 text-center group border border-transparent hover:border-[#F1F5F9] rounded-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto bg-[#F1F5F9] rounded-full flex items-center justify-center text-[#2E4F4A] mb-4 sm:mb-6 group-hover:bg-[#FFDE56] transition-colors duration-300 relative border-4 border-white shadow-lg">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8">{step.icon}</div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#2E4F4A] text-white rounded-full flex items-center justify-center font-bold text-[10px] sm:text-xs shadow-md">
                    {String(step.order || i + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#2E4F4A] mb-2 uppercase">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#8D9B9A] font-medium leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

const featureIconMap: Record<string, React.ReactNode> = {
  clock: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF343A]" />,
  globe: <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF343A]" />,
  zap: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF343A]" />,
};

const defaultFeatures = [
  { title: "99.8% On-Time Delivery", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF343A]" /> },
  { title: "Global Customs Mastery", icon: <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF343A]" /> },
  { title: "24/7 Dedicated Support", icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF343A]" /> },
];

export const Features: React.FC<HomeSectionProps> = ({ navigateTo, data }) => {
  const features = data && data.length > 0
    ? data.map(item => ({
        title: item.title,
        icon: featureIconMap[item.icon] || <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF343A]" />
      }))
    : defaultFeatures;

  return (
  <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8F9FA] overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="lg:w-1/2 w-full">
          <FadeIn direction="right">
            <span className="text-[10px] sm:text-xs font-bold text-[#EF343A] uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">Why Sub Supply</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2E4F4A] uppercase italic tracking-tighter mb-4 sm:mb-6 md:mb-8 leading-none">
              Precision <br className="hidden sm:block"/> Meet <span className="text-[#8D9B9A]">Velocity.</span>
            </h2>
            <p className="text-[#8D9B9A] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-medium max-w-md leading-relaxed">
              We leverage proprietary AI forecasting to predict bottlenecks before they happen, ensuring your cargo moves faster than the competition.
            </p>
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#EF343A]/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-bold text-[#2E4F4A] uppercase tracking-wide text-[11px] sm:text-xs md:text-sm">{item.title}</span>
                </div>
              ))}
            </div>
            {navigateTo && (
              <Button onClick={() => navigateTo('about')} variant="default" className="shadow-xl w-full sm:w-auto justify-center sm:justify-start">
                More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            )}
          </FadeIn>
        </div>
        <div className="lg:w-1/2 relative w-full">
          <FadeIn direction="left" delay={200}>
            <div className="aspect-square relative z-10 w-full max-w-lg mx-auto lg:max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000" 
                alt="Logistics Technology" 
                className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Decorative Frame */}
              <div className="absolute top-2 -right-2 sm:top-4 sm:-right-4 md:top-6 md:-right-6 w-full h-full border-2 sm:border-4 border-[#2E4F4A] -z-10"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
  );
};
