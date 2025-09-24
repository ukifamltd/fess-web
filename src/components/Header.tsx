import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/groups/fidrofaexcellencyschool',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      href: '#',
      color: 'hover:text-blue-300'
    },
    {
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-400'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+250 786 328 657',
      href: 'tel:+250786328657'
    },
    {
      icon: Mail,
      text: 'info@fidrofa.com',
      href: 'mailto:info@fidrofa.com'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
          </div>

          <div className="container mx-auto px-6 py-3 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-4 h-4 text-blue-300" />
                    <span className="text-sm text-blue-100 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links and Additional Info */}
              <div className="flex items-center space-x-6">
                {/* Language Selector */}
                {/* <motion.div 
                  className="hidden sm:flex items-center space-x-1 cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm text-blue-100 group-hover:text-white">EN</span>
                  <ChevronDown className="w-3 h-3 text-blue-100 group-hover:text-white" />
                </motion.div> */}

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1 transition-colors ${social.color}`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>

                {/* Special Offer */}
                {/* <motion.div
                  className="hidden lg:flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-xs font-semibold text-green-300">🎉</span>
                  <span className="text-xs text-blue-100">Free Consultation!</span>
                </motion.div> */}
              </div>
            </div>
          </div>

          {/* Progress bar for special offer timer */}
          <motion.div 
            className="h-0.5 bg-gradient-to-r from-green-400 to-blue-400"
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 30, ease: 'linear' }}
          />
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;