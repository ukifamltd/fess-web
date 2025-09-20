import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Circle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === " ") togglePlayPause();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  const contentVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const indicatorVariants: Variants = {
    inactive: { scale: 0.8, opacity: 0.6 },
    active: { scale: 1.2, opacity: 1 },
    hover: { scale: 1.1, opacity: 0.8 },
  };

  return (
    <div className="relative w-full h-96 md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl shadow-2xl group">
      <AnimatePresence custom={direction} mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Parallax Effect */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${items[currentIndex].image})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end items-center text-center text-white h-full p-8 pb-16 md:p-12 md:pb-20">
            <motion.h2
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-2xl"
            >
              {items[currentIndex].title}
            </motion.h2>

            <motion.p
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 text-gray-100 drop-shadow-lg"
            >
              {items[currentIndex].description}
            </motion.p>

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to={items[currentIndex].ctaLink || "/"}
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-2xl flex items-center gap-2"
                >
                  {items[currentIndex].ctaText || "Learn More"}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showControls && (
        <>
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full shadow-2xl transition-all z-20 backdrop-blur-sm group-hover:opacity-100 opacity-0 md:opacity-100"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full shadow-2xl transition-all z-20 backdrop-blur-sm group-hover:opacity-100 opacity-0 md:opacity-100"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </>
      )}

      {/* Play/Pause Button */}
      <motion.button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 p-2 rounded-full shadow-2xl transition-all z-20 backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </motion.button>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
          key={currentIndex}
        />
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              variants={indicatorVariants}
              initial="inactive"
              animate={index === currentIndex ? "active" : "inactive"}
              whileHover="hover"
              className="p-1"
              aria-label={`Go to slide ${index + 1}`}
            >
              <Circle
                className={`w-3 h-3 ${
                  index === currentIndex ? "text-white" : "text-white/50"
                }`}
                fill={index === currentIndex ? "currentColor" : "none"}
              />
            </motion.button>
          ))}
        </div>
      )}

      {/* Slide Counter */}
      <div className="absolute top-4 left-4 bg-black/30 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm z-20">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
};

export default Carousel;