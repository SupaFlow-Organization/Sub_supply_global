import React, { useRef } from 'react';
import { FadeIn } from './FadeIn';
import { WhoWeWorkWithSection } from '../lib/types';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Users, ShieldCheck, TrendingUp } from 'lucide-react';

interface WhoWeWorkWithProps {
  data: WhoWeWorkWithSection;
}

const icons = [
  <Users className="w-6 h-6" />,
  <TrendingUp className="w-6 h-6" />,
  <ShieldCheck className="w-6 h-6" />,
  <CheckCircle2 className="w-6 h-6" />,
];

export const WhoWeWorkWith: React.FC<WhoWeWorkWithProps> = ({ data }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-[#F8F9FA] to-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFDE56]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#EF343A]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-r from-transparent to-[#EF343A]"></span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#8D9B9A]">
              Partners
            </span>
            <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-l from-transparent to-[#EF343A]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2E4F4A] uppercase italic tracking-tighter mb-4 sm:mb-6 leading-[0.9] font-sans">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8D9B9A] font-medium max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* Characteristics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {data.characteristics.map((characteristic, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative"
            >
              <div className="relative bg-white p-6 sm:p-8 shadow-md hover:shadow-xl border border-[#F1F5F9] transition-all duration-300 h-full overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFDE56]/5 to-[#EF343A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#F8F9FA] flex items-center justify-center text-[#2E4F4A] group-hover:bg-[#FFDE56] group-hover:text-[#2E4F4A] transition-all duration-300 group-hover:scale-110">
                    {icons[index] || <CheckCircle2 className="w-6 h-6" />}
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 pt-1">
                    <p className="text-sm sm:text-base lg:text-lg text-[#8D9B9A] font-medium leading-relaxed group-hover:text-[#2E4F4A] transition-colors duration-300">
                      {characteristic}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#EF343A] via-[#FFDE56] to-[#EF343A]"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
