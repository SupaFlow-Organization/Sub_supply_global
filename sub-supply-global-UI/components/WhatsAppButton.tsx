import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppButtonProps {
    phoneNumber: string; // Format: Country code + number (e.g., "919876543210")
    message?: string;
    showTooltip?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber,
    message = "Hi! I'm interested in learning more about your services.",
    showTooltip = true,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    // Show button after a short delay
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Auto-show tooltip briefly after button appears
    useEffect(() => {
        if (isVisible && showTooltip) {
            const timer = setTimeout(() => {
                setShowMessage(true);
                // Auto-hide after 5 seconds
                setTimeout(() => setShowMessage(false), 5000);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, showTooltip]);

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const handleClick = () => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
                >
                    {/* Tooltip Message */}
                    <AnimatePresence>
                        {showMessage && (
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                transition={{ duration: 0.25 }}
                                className="relative bg-white rounded-2xl shadow-2xl px-4 py-3 max-w-[200px] sm:max-w-[250px]"
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setShowMessage(false)}
                                    className="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors"
                                    aria-label="Close message"
                                >
                                    <X size={14} className="text-gray-600" />
                                </button>

                                {/* Message content */}
                                <p className="text-xs sm:text-sm text-[#2E4F4A] font-medium leading-relaxed pr-4">
                                    Need help? Chat with us on WhatsApp!
                                </p>

                                {/* Triangle pointer */}
                                <div className="absolute -right-2 bottom-4 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white border-b-8 border-b-transparent" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* WhatsApp Button */}
                    <motion.button
                        onClick={handleClick}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer touch-manipulation"
                        aria-label="Chat on WhatsApp"
                    >
                        {/* Pulse animation */}
                        <motion.div
                            className="absolute inset-0 bg-[#25D366] rounded-full"
                            initial={{ scale: 1, opacity: 0.7 }}
                            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* WhatsApp Icon */}
                        <MessageCircle
                            size={28}
                            className="relative z-10 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300"
                            strokeWidth={2}
                        />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
