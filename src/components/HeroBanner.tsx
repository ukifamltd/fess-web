import React from 'react';
import { motion } from 'framer-motion';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayColor?: string;
  textColor?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  overlayColor = 'from-blue-900/80 to-purple-900/80',
  textColor = 'text-white'
}) => {
  return (
    <div 
      className={`relative bg-gradient-to-r ${overlayColor} ${textColor} py-20 overflow-hidden`}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Header background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/15 rounded-full translate-x-20 -translate-y-20" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/8 rounded-full -translate-x-18 translate-y-18" />
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-white/12 rounded-full translate-x-14 translate-y-14" />
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default HeroBanner;