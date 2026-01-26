// Type definitions for content data structures
// These types were previously in lib/sanity.ts but are now standalone

export interface HeroSection {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage?: any;
  trustStripTitle: string;
}

export interface TrustedCompany {
  _id: string;
  name: string;
  logo?: any;
}

export interface AboutSection {
  sectionLabel: string;
  title: string;
  highlightedTitle: string;
  description: string;
  image?: any;
  stats: Array<{
    value: string;
    suffix: string;
    label: string;
  }>;
  ctaText: string;
  whyWeWereBuilt?: string;
  whatWeDo?: string[];
  howModelIsDifferent?: string;
  ecosystemDescription?: string;
  howWeWorkWithYou?: string;
  whoWeServe?: string;
  vision?: string;
}

export interface MissionVision {
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image?: any;
  bio?: string;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: 'ship' | 'plane' | 'truck' | 'search' | 'package' | 'clipboard-check' | 'map-pin' | 'box';
  order?: number;
}

export interface Industry {
  _id: string;
  title: string;
  description: string;
  icon: 'briefcase' | 'users' | 'layers' | 'server' | 'cpu' | 'filecheck';
  order?: number;
}

export interface NetworkHub {
  _id: string;
  region: string;
  cities: string;
  color: string;
  order?: number;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  serviceOptions: Array<{
    value: string;
    label: string;
  }>;
}

export interface WorkflowStep {
  _id: string;
  title: string;
  description: string;
  icon: 'package' | 'shieldcheck' | 'anchor' | 'checkcircle' | 'users' | 'flask' | 'boxes';
  order: number;
}

export interface FeatureItem {
  _id: string;
  title: string;
  icon: 'clock' | 'globe' | 'zap';
  order?: number;
}

export interface ExpandableSection {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  order?: number;
}

export interface WhyChoosePoint {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  order: number;
}

export interface WhyChooseSection {
  title: string;
  subtitle?: string;
  points: WhyChoosePoint[];
  benefits: string[];
}

export interface EcosystemSection {
  title: string;
  description: string;
  franchiseOwners: {
    title: string;
    description: string;
  };
  verifiedSuppliers: {
    title: string;
    description: string;
  };
}

export interface WhoWeWorkWithSection {
  title: string;
  description: string;
  characteristics: string[];
}

export interface CoSupplyStep {
  _id: string;
  title: string;
  description: string;
  order: number;
}

export interface CoSupplySection {
  hero: {
    title: string;
    subtitle: string;
  };
  whatIs: {
    title: string;
    description: string;
    points: string[];
  };
  whyCoSupply: {
    title: string;
    description: string;
    points: string[];
  };
  howItWorks: {
    title: string;
    steps: CoSupplyStep[];
  };
  commissionModel: {
    title: string;
    description: string;
    features: string[];
    settlementOptions: string[];
  };
  whoCanJoin: {
    title: string;
    description: string;
    requirements: string[];
  };
  products: {
    title: string;
    description: string;
    focus: string;
  };
  differentiators: {
    title: string;
    points: string[];
  };
  builtForLongRun: {
    title: string;
    description: string;
    benefits: string[];
  };
  contact: {
    location: string;
    phone: string;
    email: string;
    ctaText: string;
  };
}
