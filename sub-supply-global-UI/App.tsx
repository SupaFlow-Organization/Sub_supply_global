import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FadeIn } from './components/FadeIn';
import { Features } from './components/HomeSections';
import { TradeSupport } from './components/TradeSupport';
import { WhoWeWorkWith } from './components/WhoWeWorkWith';
import { NavigationId, NavItem } from './types';
import {
  HeroSection,
  AboutSection,
  MissionVision,
  TeamMember,
  Service,
  Industry,
  NetworkHub,
  ContactInfo,
  WorkflowStep,
  FeatureItem,
  TrustedCompany,
  WhyChooseSection,
  EcosystemSection,
  WhoWeWorkWithSection,
} from './lib/types';
import {
  heroContent,
  trustedCompaniesContent,
  aboutContent,
  missionVisionContent,
  teamContent,
  servicesContent,
  industriesContent,
  networkHubsContent,
  contactContent,
  workflowStepsContent,
  featureItemsContent,
  whyChooseContent,
  ecosystemContent,
  whoWeWorkWithContent,
} from './content';

// Map URL paths to NavigationId
const pathToTab: Record<string, NavigationId> = {
  '/': 'home',
  '/home': 'home',
  '/about': 'about',
  '/services': 'services',
  '/network': 'network',
  '/contact': 'contact',
};

// Map NavigationId to URL paths
const tabToPath: Record<NavigationId, string> = {
  'home': '/',
  'about': '/about',
  'services': '/services',
  'network': '/network',
  'contact': '/contact',
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<NavigationId>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInitialMount, setIsInitialMount] = useState(true);
  
  // Sync activeTab with URL on mount and route changes
  useEffect(() => {
    const currentTab = pathToTab[location.pathname] || 'home';
    setActiveTab(currentTab);
    // Reset scroll state when navigating to a new page
    setScrolled(false);
  }, [location.pathname]);
  
  // Content Data - loaded from local content files
  // All content is imported from the content/ folder and consumed here
  const [heroData] = useState<HeroSection | null>(heroContent);
  const [trustedCompanies] = useState<TrustedCompany[]>(trustedCompaniesContent);
  const [aboutData] = useState<AboutSection | null>(aboutContent);
  const [missionVisionData] = useState<MissionVision | null>(missionVisionContent);
  const [teamData] = useState<TeamMember[]>(teamContent);
  const [servicesData] = useState<Service[]>(servicesContent);
  const [industriesData] = useState<Industry[]>(industriesContent);
  const [networkHubsData] = useState<NetworkHub[]>(networkHubsContent);
  const [contactData] = useState<ContactInfo | null>(contactContent);
  const [workflowSteps] = useState<WorkflowStep[]>(workflowStepsContent);
  const [featureItems] = useState<FeatureItem[]>(featureItemsContent);
  const [whyChooseData] = useState<WhyChooseSection | null>(whyChooseContent);
  const [ecosystemData] = useState<EcosystemSection | null>(ecosystemContent);
  const [whoWeWorkWithData] = useState<WhoWeWorkWithSection | null>(whoWeWorkWithContent);

  // Verify content is loaded (development only)
  useEffect(() => {
    if ((import.meta as any).env?.DEV || (import.meta as any).env?.MODE === 'development') {
      console.log('📦 Content loaded from content folder:', {
        hero: !!heroData,
        about: !!aboutData,
        services: servicesData.length,
        industries: industriesData.length,
        team: teamData.length,
        contact: !!contactData,
        workflowSteps: workflowSteps.length,
        features: featureItems.length,
        networkHubs: networkHubsData.length,
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Mark initial mount as complete after first render
    setIsInitialMount(false);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Content is now loaded from local files - no need for API calls
  // All content is available immediately from the content folder

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'network', label: 'Newsletter' },
    { id: 'contact', label: 'Contact' },
  ];

  const navigateTo = (tab: NavigationId) => {
    const path = tabToPath[tab];
    navigate(path);
    setIsMenuOpen(false);
    setScrolled(false); // Reset scroll state immediately
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // Skip fade animation on initial mount, only animate on tab changes
  const pageVariants = {
    initial: isInitialMount ? { opacity: 1 } : { opacity: 0 },
    animate: { opacity: 1, transition: { duration: isInitialMount ? 0 : 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FFDE56] selection:text-[#2E4F4A]">
      <Navbar 
        activeTab={activeTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        navigateTo={navigateTo}
        navItems={navItems}
      />

      <main className="min-h-screen">
        {isInitialMount ? (
          // On initial mount, render without animations to prevent flash
          <>
            {activeTab === 'home' && (
              <div>
                <Hero 
                  key={heroData?.highlightedTitle || 'hero'} 
                  navigateTo={navigateTo} 
                  data={heroData} 
                  trustedCompanies={trustedCompanies} 
                />
                <Features navigateTo={navigateTo} data={featureItems} />
                <TradeSupport data={workflowSteps} />
                {whoWeWorkWithData && <WhoWeWorkWith data={whoWeWorkWithData} />}
              </div>
            )}
            {activeTab === 'about' && (
              <div className="pt-16 sm:pt-20">
                <About 
                  navigateTo={navigateTo} 
                  data={aboutData}
                  whyChooseData={whyChooseData}
                  ecosystemData={ecosystemData}
                />
                {missionVisionData && (
                  <section className="py-12 sm:py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <FadeIn direction="right">
                          <div className="bg-[#2E4F4A] text-white p-5 sm:p-6 md:p-8 h-full">
                            <h4 className="text-[#FFDE56] font-black uppercase tracking-widest mb-3 sm:mb-4 text-xs sm:text-sm font-sans">
                              {missionVisionData.missionTitle || 'Our Mission'}
                            </h4>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-[#EF343A] to-[#FFDE56] mb-4 sm:mb-5 rounded-full"></div>
                            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-sans text-white/90">
                              {missionVisionData.missionText}
                            </p>
                          </div>
                        </FadeIn>
                        <FadeIn direction="left">
                          <div className="bg-[#2E4F4A] text-white p-5 sm:p-6 md:p-8 h-full">
                            <h4 className="text-[#FFDE56] font-black uppercase tracking-widest mb-3 sm:mb-4 text-xs sm:text-sm font-sans">
                              {missionVisionData.visionTitle || 'Our Vision'}
                            </h4>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-[#EF343A] to-[#FFDE56] mb-4 sm:mb-5 rounded-full"></div>
                            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-sans text-white/90">
                              {missionVisionData.visionText}
                            </p>
                          </div>
                        </FadeIn>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            )}
            {activeTab === 'services' && (
              <div className="pt-16 sm:pt-20">
                <Services data={servicesData} />
              </div>
            )}
            {activeTab === 'network' && (
              <div className="pt-20 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-24 lg:pb-40 container mx-auto px-4 sm:px-6">
                <FadeIn>
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2E4F4A] mb-6 sm:mb-8 uppercase italic tracking-tighter font-sans">
                      Newsletter
                    </h2>
                    <div className="mt-12 sm:mt-16 md:mt-20">
                      <div className="inline-block border-2 border-[#2E4F4A] px-8 sm:px-12 md:px-16 py-12 sm:py-16 md:py-20 bg-white">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#2E4F4A] uppercase tracking-tight mb-4 sm:mb-6">
                          Coming Soon
                        </p>
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                          <div className="w-12 sm:w-16 h-[2px] bg-[#2E4F4A]"></div>
                          <div className="w-8 sm:w-12 h-[2px] bg-[#EF343A]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            )}
            {activeTab === 'contact' && (
              <div className="pt-16 sm:pt-20">
                <Contact data={contactData} />
              </div>
            )}
          </>
        ) : (
          // After initial mount, use animations for smooth transitions
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Hero 
                  key={`hero-${heroData?.highlightedTitle || Date.now()}`}
                  navigateTo={navigateTo} 
                  data={heroData} 
                  trustedCompanies={trustedCompanies} 
                />
                <Features navigateTo={navigateTo} data={featureItems} />
                <TradeSupport data={workflowSteps} />
                {whoWeWorkWithData && <WhoWeWorkWith data={whoWeWorkWithData} />}
              </motion.div>
            )}
            {activeTab === 'about' && (
              <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16 sm:pt-20">
                <About 
                  navigateTo={navigateTo} 
                  data={aboutData}
                  whyChooseData={whyChooseData}
                  ecosystemData={ecosystemData}
                />
                {missionVisionData && (
                  <section className="py-12 sm:py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <FadeIn direction="right">
                          <div className="bg-[#2E4F4A] text-white p-5 sm:p-6 md:p-8 h-full">
                            <h4 className="text-[#FFDE56] font-black uppercase tracking-widest mb-3 sm:mb-4 text-xs sm:text-sm font-sans">
                              {missionVisionData.missionTitle || 'Our Mission'}
                            </h4>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-[#EF343A] to-[#FFDE56] mb-4 sm:mb-5 rounded-full"></div>
                            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-sans text-white/90">
                              {missionVisionData.missionText}
                            </p>
                          </div>
                        </FadeIn>
                        <FadeIn direction="left">
                          <div className="bg-[#2E4F4A] text-white p-5 sm:p-6 md:p-8 h-full">
                            <h4 className="text-[#FFDE56] font-black uppercase tracking-widest mb-3 sm:mb-4 text-xs sm:text-sm font-sans">
                              {missionVisionData.visionTitle || 'Our Vision'}
                            </h4>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-[#EF343A] to-[#FFDE56] mb-4 sm:mb-5 rounded-full"></div>
                            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-sans text-white/90">
                              {missionVisionData.visionText}
                            </p>
                          </div>
                        </FadeIn>
                      </div>
                    </div>
                  </section>
                )}
              </motion.div>
            )}
            {activeTab === 'services' && (
              <motion.div key="services" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16 sm:pt-20">
                <Services data={servicesData} />
              </motion.div>
            )}
            {activeTab === 'network' && (
              <motion.div key="network" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-20 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-24 lg:pb-40 container mx-auto px-4 sm:px-6">
                <FadeIn>
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2E4F4A] mb-6 sm:mb-8 uppercase italic tracking-tighter font-sans">
                      Newsletter
                    </h2>
                    <div className="mt-12 sm:mt-16 md:mt-20">
                      <div className="inline-block border-2 border-[#2E4F4A] px-8 sm:px-12 md:px-16 py-12 sm:py-16 md:py-20 bg-white">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#2E4F4A] uppercase tracking-tight mb-4 sm:mb-6">
                          Coming Soon
                        </p>
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                          <div className="w-12 sm:w-16 h-[2px] bg-[#2E4F4A]"></div>
                          <div className="w-8 sm:w-12 h-[2px] bg-[#EF343A]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </motion.div>
            )}
            {activeTab === 'contact' && (
              <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16 sm:pt-20">
                <Contact data={contactData} />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
