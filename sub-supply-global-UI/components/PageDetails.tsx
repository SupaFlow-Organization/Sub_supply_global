
import React from 'react';
import { FadeIn } from './FadeIn';
import { Layers, Cpu, Server, FileCheck, Users, Briefcase } from 'lucide-react';
import { TeamMember, Industry } from '../lib/types';

interface TeamProps {
  data?: TeamMember[];
}

interface IndustriesProps {
  data?: Industry[];
}

const industryIconMap: Record<string, React.ReactNode> = {
  briefcase: <Briefcase />,
  users: <Users />,
  layers: <Layers />,
  server: <Server />,
  cpu: <Cpu />,
  filecheck: <FileCheck />,
};

const defaultTeam = [
  { name: "Sarah Jenkins", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
  { name: "David Chen", role: "Head of Global Ops", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" },
  { name: "Elena Rodriguez", role: "Chief Strategy Officer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" }
];

export const Team: React.FC<TeamProps> = ({ data }) => {
  const teamMembers = data && data.length > 0
    ? data.map(member => ({
        name: member.name,
        role: member.role,
        img: member.image?.asset?.url || `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600`
      }))
    : defaultTeam;

  return (
  <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#2E4F4A] uppercase italic tracking-tighter mb-8 sm:mb-12 md:mb-16 text-center">Leadership</h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {teamMembers.map((member, i) => (
          <FadeIn key={i} delay={i * 100} className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[3/4] mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-[#2E4F4A]/20 group-hover:bg-transparent transition-colors z-10" />
              <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2E4F4A] uppercase">{member.name}</h3>
            <p className="text-[#EF343A] font-mono text-[10px] sm:text-xs tracking-widest uppercase mt-1">{member.role}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
  );
};

const defaultIndustries = [
  { icon: <Briefcase />, title: "Automotive", desc: "Just-in-time supply chain for manufacturing components." },
  { icon: <Users />, title: "Pharma & Healthcare", desc: "Temperature-controlled cold chain logistics." },
  { icon: <Layers />, title: "Retail & Fashion", desc: "Fast-fashion speed to market solutions." },
  { icon: <Server />, title: "Technology", desc: "High-security transport for sensitive electronics." },
  { icon: <Cpu />, title: "Energy", desc: "Oversized project cargo for infrastructure." },
  { icon: <FileCheck />, title: "Aerospace", desc: "AOG services and critical spare parts." }
];

export const Industries: React.FC<IndustriesProps> = ({ data }) => {
  const industries = data && data.length > 0
    ? data.map(industry => ({
        icon: industryIconMap[industry.icon] || <Briefcase />,
        title: industry.title,
        desc: industry.description
      }))
    : defaultIndustries;

  return (
  <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-[#F8F9FA]">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
         <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#2E4F4A] uppercase italic tracking-tighter">Industries Served</h2>
         </FadeIn>
         <FadeIn delay={100}>
           <p className="text-[#8D9B9A] font-medium text-xs sm:text-sm md:text-base">Specialized handling for high-value sectors.</p>
         </FadeIn>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {industries.map((ind, i) => (
          <FadeIn key={i} delay={i * 50} className="bg-white p-5 sm:p-6 md:p-8 border border-[#2E4F4A]/5 hover:border-[#EF343A] transition-colors group h-full">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2E4F4A]/5 text-[#2E4F4A] flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#EF343A] group-hover:text-white transition-colors">
              {ind.icon}
            </div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#2E4F4A] mb-2 sm:mb-3">{ind.title}</h4>
            <p className="text-xs sm:text-sm text-[#8D9B9A] leading-relaxed">{ind.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
  );
};
