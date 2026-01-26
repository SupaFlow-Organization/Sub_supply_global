
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ContactInfo } from '../lib/types';

// Zod Schema Definition
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.string().min(10, "Please enter a valid mobile number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactProps {
  data?: ContactInfo | null;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const title = data?.title || 'Get a Quote';
  const subtitle = data?.subtitle || 'Speak with our specialists to optimize your supply chain today.';
  const phone = data?.phone || '+971-5800755';
  const email = data?.email || 'Reach@subsupplyglobal.com';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before showing animations to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="flex flex-col lg:flex-row shadow-[0_0_100px_rgba(46,79,74,0.1)] overflow-hidden border border-[#8D9B9A]/10 bg-white">
            
            {/* Contact Info Sidebar */}
            <div className="w-full lg:w-2/5 bg-[#2E4F4A] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic mb-6 sm:mb-8 md:mb-10 tracking-tighter font-sans">{title}</h3>
                <p className="text-[#8D9B9A] mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base md:text-lg font-light font-sans">{subtitle}</p>
                
                <div className="space-y-5 sm:space-y-6 md:space-y-8">
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 sm:gap-4 md:gap-6 group cursor-pointer touch-manipulation">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-[#FFDE56]/30 flex items-center justify-center text-[#FFDE56] group-hover:bg-[#FFDE56] group-hover:text-[#2E4F4A] transition-all duration-300 shrink-0">
                      <Phone size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs uppercase font-black text-[#8D9B9A] tracking-widest font-sans">Call Us</div>
                      <div className="font-bold font-sans text-sm sm:text-base md:text-lg break-all">{phone}</div>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 sm:gap-4 md:gap-6 group cursor-pointer touch-manipulation">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-[#FFDE56]/30 flex items-center justify-center text-[#FFDE56] group-hover:bg-[#FFDE56] group-hover:text-[#2E4F4A] transition-all duration-300 shrink-0">
                      <Mail size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs uppercase font-black text-[#8D9B9A] tracking-widest font-sans">Email Us</div>
                      <div className="font-bold font-sans text-sm sm:text-base md:text-lg break-all">{email}</div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-2 sm:w-3 md:w-4 h-full bg-[#EF343A]"></div>
              <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-white relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-20"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#2E4F4A] rounded-full flex items-center justify-center text-[#FFDE56] mb-4 sm:mb-6">
                      <CheckCircle2 size={32} className="sm:w-10 sm:h-10" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-black text-[#2E4F4A] mb-3 sm:mb-4 font-sans">Message Sent</h4>
                    <p className="text-sm sm:text-base text-[#8D9B9A] font-sans px-4">Thank you for reaching out. We will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={isMounted ? { opacity: 0 } : { opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form 
                      className="space-y-5 sm:space-y-6 md:space-y-8" 
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-[#8D9B9A] uppercase text-xs tracking-widest font-bold font-sans">Your Name</Label>
                          <Input 
                            id="name"
                            {...register("name")}
                            className={cn(errors.name && "border-destructive")}
                            placeholder="John Doe" 
                          />
                          {errors.name && (
                            <span className="text-destructive text-xs flex items-center gap-1 font-sans">
                              <AlertCircle size={10} /> {errors.name.message}
                            </span>
                          )}
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="email" className="text-[#8D9B9A] uppercase text-xs tracking-widest font-bold font-sans">Email Address</Label>
                          <Input 
                            id="email"
                            {...register("email")}
                            type="email" 
                            className={cn(errors.email && "border-destructive")}
                            placeholder="john@company.com" 
                          />
                          {errors.email && (
                            <span className="text-destructive text-xs flex items-center gap-1 font-sans">
                              <AlertCircle size={10} /> {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mobile" className="text-[#8D9B9A] uppercase text-xs tracking-widest font-bold font-sans">Mobile Number</Label>
                        <Input 
                          id="mobile"
                          {...register("mobile")}
                          type="tel" 
                          className={cn(errors.mobile && "border-destructive")}
                          placeholder="+971-5800755" 
                        />
                        {errors.mobile && (
                          <span className="text-destructive text-xs flex items-center gap-1 font-sans">
                            <AlertCircle size={10} /> {errors.mobile.message}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                         <Label htmlFor="message" className="text-[#8D9B9A] uppercase text-xs tracking-widest font-bold font-sans">Project Details</Label>
                        <Textarea 
                          id="message"
                          {...register("message")}
                          className={cn("h-32 font-sans", errors.message && "border-destructive")}
                          placeholder="Tell us about your cargo requirements..."
                        />
                        {errors.message && (
                          <span className="text-destructive text-xs flex items-center gap-1 font-sans">
                            <AlertCircle size={10} /> {errors.message.message}
                          </span>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full sm:w-auto font-sans font-bold justify-center sm:justify-start touch-manipulation"
                        variant="primary"
                      >
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
