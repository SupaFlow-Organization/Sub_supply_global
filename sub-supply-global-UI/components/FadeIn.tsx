import React, { useRef, useEffect, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds (converted to seconds for Framer)
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  viewportMargin?: string;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  viewportMargin = "-50px",
  ...props
}) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  useEffect(() => {
    // Check if element is already in viewport on mount
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        // Element is already visible, show immediately without animation
        setIsInViewport(true);
      }
    }
  }, []);

  // If already in viewport, show immediately; otherwise animate on scroll
  const initial = isInViewport 
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, ...directions[direction] };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ 
        duration: isInViewport ? 0 : 0.8, 
        ease: [0.16, 1, 0.3, 1],
        delay: isInViewport ? 0 : delay / 1000
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};