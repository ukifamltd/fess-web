import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  subItems?: SubItem[];
}

interface SubItem {
  name: string;
  href: string;
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left subtle circle */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-blue-300/30 rounded-full -translate-x-8 -translate-y-8" />

        {/* Top right circle */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-300/40 rounded-full translate-x-10 -translate-y-10" />

        {/* Bottom left circle */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200/50 rounded-full -translate-x-12 translate-y-8" />

        {/* Bottom right circle */}
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-purple-300/35 rounded-full translate-x-14 translate-y-10" />

        {/* Center right small circle */}
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-300/25 rounded-full" />

        {/* Center left small circle */}
        <div className="absolute top-1/3 left-1/4 w-10 h-10 bg-purple-300/30 rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.span
              className="text-2xl font-bold text-blue-900 font-serif"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Fes
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`relative px-3 py-2 font-medium transition-all duration-300 group ${
                    location.pathname === item.href
                      ? "text-blue-900"
                      : "text-gray-700 hover:text-blue-900"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {location.pathname !== item.href && ( // Fixed the comparison
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>

                {/* Submenu */}
                {item.subItems && (
                  <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-2 border border-gray-100">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                to="/about"
                className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-colors shadow-lg relative overflow-hidden block"
              >
                {/* Button background effect */}
                <span className="relative z-10">Learn more</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-10"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden mt-4 overflow-hidden relative z-20"
            >
              {/* Mobile menu background circles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100/30 rounded-full translate-x-8 -translate-y-8" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-100/20 rounded-full -translate-x-8 translate-y-8" />
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border border-gray-100 shadow-xl relative">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      className="group"
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                          location.pathname === item.href
                            ? "bg-blue-100 text-blue-900"
                            : "text-gray-700 hover:bg-gray-100 hover:text-blue-900"
                        }`}
                        onClick={() => !item.subItems && setIsMenuOpen(false)}
                      >
                        {item.name}
                        {item.subItems && (
                          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        )}
                      </Link>

                      {/* Mobile Submenu */}
                      {item.subItems && (
                        <div className="pl-6 mt-1 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-gray-600 hover:text-blue-900 rounded-lg transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Mobile CTA Button */}
                  <motion.div
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 relative"
                  >
                    <Link
                      to="/about"
                      className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors relative overflow-hidden block text-center"
                    >
                      <span className="relative z-10">Learn more</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
