import React, { useState, useRef } from 'react';
import { Package, Boxes, Anchor, FlaskConical, Users, ChevronDown } from 'lucide-react';
import { WorkflowStep } from '../lib/types';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

interface TradeSupportProps {
  data?: WorkflowStep[];
}

// Map icon strings to React components
const iconMap: Record<string, React.ReactNode> = {
  package: <Package className="w-6 h-6 sm:w-7 sm:h-7" />,
  boxes: <Boxes className="w-6 h-6 sm:w-7 sm:h-7" />,
  anchor: <Anchor className="w-6 h-6 sm:w-7 sm:h-7" />,
  flask: <FlaskConical className="w-6 h-6 sm:w-7 sm:h-7" />,
  users: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
};

// Default fallback data
const defaultSteps: WorkflowStep[] = [
  {
    _id: '1',
    title: 'Sourcing and Procurement',
    description: 'We source products through our own verified network of franchise owners and approved suppliers across India. Supplier identification based on your product, volume, and market needs. Negotiation and rate alignment handled by SubSupply. Options to buy full or partial containers. No dependency on unknown exporters or commission agents.',
    icon: 'package',
    order: 1,
  },
  {
    _id: '2',
    title: 'Product development',
    description: 'If you need custom grades, packaging, specifications, or private labeling, we manage the entire development process. Product standardization for your target market. Packaging, branding, and labeling coordination. Sampling, revisions, and final approvals managed centrally. Supplier alignment to ensure repeatable quality.',
    icon: 'boxes',
    order: 2,
  },
  {
    _id: '3',
    title: 'Supply chain management',
    description: 'We operate as your supply chain partner. Container planning and allocation. Live container status and updates. Coordination with logistics, CHA, and freight forwarders. Optimized timelines to avoid delays and surprises. You always know what\'s moving, what\'s arriving, and what\'s next.',
    icon: 'anchor',
    order: 3,
  },
  {
    _id: '4',
    title: 'Lab testing and compliance check',
    description: 'We ensure every shipment meets required standards before it reaches you. Lab testing and quality checks. Compliance with destination market requirements. Third-party assessments when required. Claim handling managed within our system. This reduces risk, rejections, and disputes.',
    icon: 'flask',
    order: 4,
  },
  {
    _id: '5',
    title: 'Work as a extended indian partner',
    description: 'SubSupply Global works as your extended arm on the ground in India and UAE. Supplier coordination without your daily involvement. On-ground issue resolution. Market intelligence and sourcing insights. Long-term supply planning instead of one-off trades. You gain reach, control, and local execution — without building your own team.',
    icon: 'users',
    order: 5,
  },
];

const StepCard: React.FC<{
  step: WorkflowStep;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ step, index, isExpanded, onToggle }) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="flex gap-4 sm:gap-6 lg:gap-8">
        {/* Left: Number and Icon */}
        <div className="flex flex-col items-center flex-shrink-0">
          {/* Number Circle */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#2E4F4A] to-[#1a3a35] flex items-center justify-center text-white font-black text-lg sm:text-xl lg:text-2xl shadow-lg border-2 border-white z-10">
            {String(step.order).padStart(2, '0')}
          </div>
          
          {/* Connecting Line */}
          {index < 4 && (
            <div className="w-[2px] flex-1 bg-gradient-to-b from-[#2E4F4A] via-[#8D9B9A]/30 to-transparent mt-2"></div>
          )}
        </div>

        {/* Right: Content Card */}
        <div className="flex-1 pb-8 sm:pb-12">
          <motion.div
            onClick={onToggle}
            className="bg-white p-6 sm:p-8 shadow-md hover:shadow-xl border border-[#F1F5F9] transition-shadow duration-300 group cursor-pointer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {/* Header with Icon and Title */}
            <div className="flex items-start gap-4 mb-4">
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#F8F9FA] flex items-center justify-center text-[#2E4F4A] group-hover:bg-[#FFDE56] transition-colors duration-300 flex-shrink-0">
                {iconMap[step.icon] || iconMap.package}
              </div>
              
              {/* Title and Expand Button */}
              <div className="flex-1 flex items-center justify-between gap-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#2E4F4A] uppercase tracking-tight leading-tight group-hover:text-[#EF343A] transition-colors duration-300">
                  {step.title}
                </h3>
                <motion.div 
                  className="flex-shrink-0"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ 
                    duration: 0.25, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <ChevronDown className={`w-5 h-5 ${isExpanded ? 'text-[#EF343A]' : 'text-[#8D9B9A] group-hover:text-[#EF343A]'} transition-colors duration-200`} />
                </motion.div>
              </div>
            </div>

            {/* Description with smooth animation */}
            <motion.div
              ref={contentRef}
              className="overflow-hidden"
              initial={false}
              animate={{
                height: isExpanded ? 'auto' : undefined,
              }}
              transition={{
                height: {
                  duration: 0.35,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
              layout
            >
              <AnimatePresence mode="wait" initial={false}>
                {isExpanded ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        opacity: { duration: 0.25, delay: 0.1, ease: [0.4, 0, 0.2, 1] },
                        y: { duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -8,
                      transition: {
                        opacity: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                        y: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
                      }
                    }}
                  >
                    <p className="text-sm sm:text-base text-[#8D9B9A] font-medium leading-relaxed pt-2">
                      {step.description}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        opacity: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                        y: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: 8,
                      transition: {
                        opacity: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                        y: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
                      }
                    }}
                  >
                    <p className="text-sm sm:text-base text-[#8D9B9A] font-medium leading-relaxed">
                      {step.description.split('.')[0]}.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Bottom Accent Line */}
            <motion.div
              className="mt-4 h-1 bg-gradient-to-r from-[#EF343A] via-[#FFDE56] to-[#EF343A] rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const TradeSupport: React.FC<TradeSupportProps> = ({ data }) => {
  const steps = data && data.length > 0 ? data : defaultSteps;
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const toggleStep = (stepId: string) => {
    setExpandedSteps((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      return newSet;
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-[#F8F9FA] to-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFDE56]/5 rounded-full blur-3xl"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3])
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#EF343A]/5 rounded-full blur-3xl"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3])
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-r from-transparent to-[#EF343A]"></span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#8D9B9A]">
              Our Trade Support
            </span>
            <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-l from-transparent to-[#EF343A]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2E4F4A] uppercase italic tracking-tighter mb-4 sm:mb-6 leading-[0.9]">
            How We Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8D9B9A] max-w-2xl mx-auto leading-relaxed font-medium">
            SubSupply Global supports importers at every stage — before the product is sourced, while it's being produced, and long after it unloads.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {steps.map((step, index) => (
            <StepCard
              key={step._id}
              step={step}
              index={index}
              isExpanded={expandedSteps.has(step._id)}
              onToggle={() => toggleStep(step._id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
