import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  className?: string;
  onClick?: () => void;
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  href = '/', 
  className = '', 
  onClick,
  withText = true 
}) => {
  const sizeMap = {
    sm: { width: 32, height: 32, textSize: 'text-lg' },
    md: { width: 40, height: 40, textSize: 'text-xl' },
    lg: { width: 56, height: 56, textSize: 'text-2xl' },
    xl: { width: 72, height: 72, textSize: 'text-3xl' }
  };

  const { width, height, textSize } = sizeMap[size];

  const logoImage = '/logo/logo.jpeg';

  const logoContent = (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: onClick ? 1.05 : 1 }}
      whileTap={{ scale: onClick ? 0.95 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Logo Image */}
      <div 
        className="flex items-center justify-center bg-white rounded-full overflow-hidden border-2 border-blue-900"
        style={{ width, height }}
      >
        <img 
          src={logoImage} 
          alt="Fes Logo" 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling?.classList.remove('hidden');
          }}
        />
        {/* Fallback SVG if image doesn't load */}
        <div className="hidden w-full h-full bg-blue-900 flex items-center justify-center">
          <span className="text-white font-bold text-xs">F</span>
        </div>
      </div>

      {/* Logo Text */}
      {withText && (
        <span className={`font-serif font-bold text-blue-900 ${textSize}`}>
          Fes
        </span>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link to={href} onClick={onClick} className="inline-block">
        {logoContent}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className="inline-block cursor-pointer">
      {logoContent}
    </div>
  );
};

export default Logo;