
import React from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationId, NavItem } from '../types';
import { Logo } from './Logo';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

interface NavbarProps {
  activeTab: NavigationId;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  scrolled: boolean;
  navigateTo: (tab: NavigationId) => void;
  navItems: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  isMenuOpen,
  setIsMenuOpen,
  scrolled,
  navigateTo,
  navItems
}) => {
  // Determine if the navbar should be transparent (only at top of home page)
  const isTransparent = activeTab === 'home' && !scrolled;
  
  // On non-home pages, always use white background and dark theme
  const isNonHomePage = activeTab !== 'home';
  
  // Determine the visual theme: 'light' (white text) or 'dark' (teal text)
  // If menu is open, force light theme because menu bg is dark
  // On non-home pages, always use dark theme (dark icons on white background)
  let theme: 'light' | 'dark' = 'dark';
  if (isMenuOpen || isTransparent) {
    theme = 'light';
  }

  // Ensure navbar has white background on non-home pages (always visible)
  // On home page: transparent when not scrolled, white when scrolled
  // On other pages: always white
  const shouldHaveWhiteBg = isNonHomePage || scrolled || isMenuOpen;

  // For mobile hamburger icon, ensure it's always visible
  // On home page (transparent): white icon
  // On other pages (white bg): always dark icon
  // When menu is open: white icon (because menu bg is dark)
  const hamburgerColor = isMenuOpen || isTransparent ? 'text-white' : 'text-[#2E4F4A]';
  const textColor = theme === 'light' ? 'text-white' : 'text-[#2E4F4A]';
  const navItemColor = theme === 'light' ? 'text-white/80 hover:text-white' : 'text-[#8D9B9A] hover:text-[#EF343A]';
  const activeNavItemColor = theme === 'light' ? 'text-[#FFDE56]' : 'text-[#2E4F4A]';
  const indicatorColor = theme === 'light' ? 'bg-[#FFDE56]' : 'bg-[#EF343A]';
  const borderColor = theme === 'light' ? 'border-white/10' : 'border-[#8D9B9A]/10';
  
  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
          shouldHaveWhiteBg
            ? `bg-white py-3 sm:py-4 md:py-5 shadow-sm border-b ${borderColor}` 
            : 'bg-transparent py-4 sm:py-6 md:py-8'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <button
            type="button"
            className="flex items-center cursor-pointer group relative z-50 bg-transparent border-none p-0" 
            onClick={() => {
              if (isMenuOpen) setIsMenuOpen(false);
              navigateTo('home');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                if (isMenuOpen) setIsMenuOpen(false);
                navigateTo('home');
              }
            }}
            aria-label="Navigate to home"
          >
             <Logo 
               className="h-8 sm:h-9 md:h-10 w-auto transition-all duration-500" 
               variant={shouldHaveWhiteBg ? 'dark' : theme} 
             />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                variant="ghost"
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.25em] relative py-1 h-auto hover:bg-transparent shadow-none hover:shadow-none hover:y-0",
                  activeTab === item.id ? activeNavItemColor : navItemColor
                )}
              >
                {item.label}
                {activeTab === item.id && !isMenuOpen && (
                  <motion.div 
                    layoutId="navIndicator"
                    className={cn(
                      "absolute -bottom-1.5 left-0 w-full h-[1px]",
                      indicatorColor
                    )}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Button>
            ))}
            <Button 
              onClick={() => navigateTo('contact')}
              variant={theme === 'light' ? "secondary" : "primary"}
              className="ml-6 font-bold text-xs h-12 px-8 tracking-[0.2em] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Connect
            </Button>
          </div>

          {/* Mobile Menu Toggle - Animated Hamburger */}
          <button 
            className={cn(
              "lg:hidden p-2 transition-colors relative z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center focus:outline-none touch-manipulation",
              hamburgerColor
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute text-[#2E4F4A]"
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute"
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Custom easing for smooth "curtain" drop
            className="fixed inset-0 z-40 bg-[#2E4F4A] flex flex-col overflow-hidden"
          >
            {/* Texture Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ 
                backgroundImage: 'linear-gradient(#FFDE56 1px, transparent 1px), linear-gradient(90deg, #FFDE56 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
              }}
            />

            {/* Navigation List - Centered Vertical Content */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-12 relative z-10 pt-20 sm:pt-24">
              <div className="space-y-0 divide-y divide-white/5 border-t border-b border-white/5 mb-8 sm:mb-10">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.4, ease: "easeOut" }}
                    onClick={() => navigateTo(item.id)}
                    className="w-full flex items-center justify-between py-4 sm:py-5 md:py-6 group text-left touch-manipulation"
                  >
                    <div className="flex items-baseline gap-3 sm:gap-4 md:gap-6">
                      <span className="text-[10px] sm:text-xs font-mono text-[#EF343A] font-medium tracking-widest">0{i + 1}</span>
                      <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] group-hover:text-[#FFDE56] transition-colors font-sans">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight 
                      className="text-[#FFDE56] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out shrink-0" 
                      size={20}
                      strokeWidth={1.5}
                    />
                  </motion.button>
                ))}
              </div>

              {/* CTA Button - Moved inside navigation container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="px-0"
              >
                <Button 
                  onClick={() => navigateTo('contact')}
                  variant="secondary"
                  size="default"
                  className="w-full justify-between group font-bold bg-[#FFDE56] text-[#2E4F4A] hover:bg-white h-12 sm:h-14 touch-manipulation"
                >
                  <span className="tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm">GET STARTED</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
