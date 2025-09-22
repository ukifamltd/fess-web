import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-400",
      label: "Facebook"
    },
    {
      icon: Twitter,
      href: "#",
      color: "hover:text-blue-300",
      label: "Twitter"
    },
    {
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-400",
      label: "Instagram"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "123 Company Street, City, State 12345"
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: Mail,
      text: "info@company.com",
      href: "mailto:info@company.com"
    }
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-white rounded-full -translate-x-18 translate-y-18"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-white rounded-full translate-x-14 translate-y-14"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info - Updated */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <Logo 
              size="xl" 
              withText={true}
              className="mb-6"
            />
            <motion.p 
              className="text-blue-100 mb-6 leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Providing exceptional services with dedication and expertise. 
              We strive to deliver the best solutions for our clients.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-2 bg-white/10 rounded-full backdrop-blur-sm transition-all duration-300 ${social.color}`}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links - remains the same */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              Quick Links
              <ArrowRight className="w-4 h-4 ml-2" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-blue-100 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - remains the same */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              Contact Us
              <Mail className="w-4 h-4 ml-2" />
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <info.icon className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                  {info.href ? (
                    <a 
                      href={info.href} 
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <p className="text-blue-100">{info.text}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright - remains the same */}
        <motion.div 
          className="border-t border-blue-800/50 mt-12 pt-8 text-center flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-blue-200 mb-4 md:mb-0">
            © {currentYear} FessWeb. All rights reserved.
          </p>
          <div className="flex items-center text-blue-200">
            <span className="mr-2">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span className="ml-2">by FessWeb Team</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;