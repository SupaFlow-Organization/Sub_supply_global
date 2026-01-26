import React, { useRef } from 'react';
import { Search, Package, Box, ClipboardCheck, MapPin } from 'lucide-react';
import { Service } from '../lib/types';
import { motion, useInView } from 'framer-motion';

interface ServicesProps {
  data?: Service[];
}

const serviceIconMap: Record<string, React.ReactNode> = {
  search: <Search className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
  package: <Package className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
  'clipboard-check': <ClipboardCheck className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
  'map-pin': <MapPin className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
  box: <Box className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
};

const iconColors = ['#FFDE56', '#EF343A', '#FFDE56', '#EF343A', '#FFDE56'];

export const Services: React.FC<ServicesProps> = ({ data }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = data && data.length > 0
    ? data.map((service, index) => ({
        icon: serviceIconMap[service.icon] || <Search className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />,
        title: service.title,
        description: service.description,
        iconColor: iconColors[index % iconColors.length],
        _id: service._id,
      }))
    : [];

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
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8F9FA] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8F9FA] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-r from-transparent to-[#EF343A]"></span>
              <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#8D9B9A] font-sans">
                What We Do
              </h2>
              <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-l from-transparent to-[#EF343A]"></span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2E4F4A] uppercase italic tracking-tighter font-sans">
              Our Services
            </h3>
          </div>
          <p className="text-[#8D9B9A] max-w-md md:text-right font-medium font-sans text-sm sm:text-base md:text-lg leading-relaxed">
            One partner. One contract. Complete supply chain management from sourcing to shipment — so you can focus on growing your business.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={service._id || i}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-[#2E4F4A] border border-[#2E4F4A]/10 p-6 sm:p-8 md:p-10 hover:border-[#FFDE56]/40 hover:bg-[#26413d] hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              {/* Icon */}
              <div 
                className="mb-6 sm:mb-8 transition-transform duration-300 group-hover:scale-110"
                style={{ color: service.iconColor }}
              >
                {service.icon}
              </div>
              
              {/* Title */}
              <h4 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight font-sans leading-tight">
                {service.title}
              </h4>
              
              {/* Description */}
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium font-sans flex-1 mb-6">
                {service.description}
              </p>
              
              {/* Accent Line */}
              <motion.div
                className="h-[2px] bg-[#EF343A] rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
