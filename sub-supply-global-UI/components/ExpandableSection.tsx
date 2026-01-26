import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

interface ExpandableSectionProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  defaultExpanded?: boolean;
  className?: string;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  shortDescription,
  fullDescription,
  defaultExpanded = false,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={cn('border-b border-[#F1F5F9] py-4 sm:py-6', className)}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-start justify-between gap-4 text-left group"
        aria-expanded={isExpanded}
      >
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2E4F4A] group-hover:text-[#EF343A] transition-colors uppercase">
            {title}
          </h3>
        </div>
        <div className="flex-shrink-0 mt-1">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform' }}
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#8D9B9A] group-hover:text-[#EF343A] transition-colors" />
          </motion.div>
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            className="overflow-hidden"
            style={{ willChange: 'height, opacity' }}
          >
            <div className="pt-4 sm:pt-6">
              <p className="text-sm sm:text-base text-[#8D9B9A] leading-relaxed font-medium">
                {fullDescription}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
