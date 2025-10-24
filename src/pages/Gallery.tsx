import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, Sparkles } from "lucide-react";
import HeroBanner from "../components/HeroBanner";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/images/2025exam.jpeg",
      title: "2024-2025 National examination ",
      description: "100% success rate",
      category: "academics",
    },

    {
      id: 2,
      image: "/images/368.jpg",
      title: "Primary School Students",
      description:
        "Fidrofa Excellence School one of the Best performing schools in the country.",
      category: "academics",
    },
    {
      id: 3,
      image: "/images/436.jpg",
      title: "Nursery Students ",
      description: "Nursery students during class time",
      category: "academics",
    },
    {
      id: 4,
      image: "/images/409.jpg",
      title: "Break time",
      description: "play time",
      category: "sports",
    },
    {
      id: 5,
      image: "/images/343.jpg",
      title: "Art Class",
      description:
        "To improve quality in education is to create a better future for learners",
      category: "arts",
    },
    {
      id: 6,
      image: "/images/327.jpg",
      title: "Primary students",
      description: "primary students in classroom",
      category: "academics",
    },
    {
      id: 7,
      image: "/images/384.jpg",
      title: "Activities",
      description: "Students enjoying daily meal",
      category: "activities",
    },
    {
      id: 8,
      image: "/images/383.jpg",
      title: "Teachers",
      description: "Well trained teachers",
      category: "staff",
    },
    {
      id: 9,
      image: "/images/413.jpg",
      title: "Group Activities",
      description: "Collaborative learning in action",
      category: "academics",
    },
    {
      id: 10,
      image: "/images/300.jpg",
      title: "Classroom activities",
      description: "learning in action",
      category: "academics",
    },
    {
      id: 11,
      image: "/images/406.jpg",
      title: "Break Time",
      description: "Play time ",
      category: "sports",
    },
    {
      id: 12,
      image: "/images/437.jpg",
      title: "Teachers interaction with students",
      description: "daycare students",
      category: "staff",
    },
    {
      id: 14,
      image: "/images/360.jpg",
      title: "Activities",
      description: "Morning Assembly",
      category: "activities",
    },
    {
      id: 15,
      image: "/images/423.jpg",
      title: "Break time penalty shootouts",
      description: "Play time ",
      category: "sports",
    },
    {
      id: 16,
      image: "/images/438.jpg",
      title: "Classroom activities",
      description: "Daycare class",
      category: "academics",
    },
    {
      id: 17,
      image: "/images/336.jpg",
      title: "Primary School Students",
      description: "Our primary students",
      category: "academics",
    },
  ];

  const categories = [
    "all",
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-staff-none">
        {/* Large background circles */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/25 rounded-full -translate-x-20 -translate-y-10" />
        <div className="absolute top-10 right-20 w-32 h-32 bg-purple-100/25 rounded-full translate-x-16 -translate-y-8" />
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-green-100/15 rounded-full -translate-x-18 translate-y-12" />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-pink-100/20 rounded-full translate-x-14 translate-y-8" />

        {/* Medium circles */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-200/30 rounded-full" />
        <div className="absolute top-2/3 right-1/3 w-14 h-14 bg-purple-200/35 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-green-200/25 rounded-full" />

        {/* Small sparkles */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-4 h-4 text-blue-300/60" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4"
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-3 h-3 text-purple-300/50" />
        </motion.div>
      </div>

      {/* Hero Banner Section */}
      <HeroBanner
        title="Our Gallery"
        subtitle="A glimpse into life at Fidrofa Excellence School"
        backgroundImage="/images/406.jpg"
        overlayColor="from-indigo-800/80 to-blue-900/80"
      />

      <div className="container mx-auto px-6 py-20 relative">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all cursor-pointer group"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full capitalize">
                  {item.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No images found
            </h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-4xl w-full max-h-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-6 z-10 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {selectedImage.title}
                    </h2>
                    <p className="text-gray-200">{selectedImage.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedImage(null)}
                    className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                    aria-label="Close"
                    type="button"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />

                {/* Navigation Arrows */}
                {filteredItems.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full shadow-2xl transition-all z-20 backdrop-blur-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(0,0,0,0.6)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Previous image"
                      type="button"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </motion.button>

                    <motion.button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full shadow-2xl transition-all z-20 backdrop-blur-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(0,0,0,0.6)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Next image"
                      type="button"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </motion.button>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-10">
                <div className="flex justify-between items-center text-white">
                  <span className="bg-blue-600 text-xs px-3 py-1 rounded-full capitalize">
                    {selectedImage.category}
                  </span>
                  <motion.a
                    href={selectedImage.image}
                    download
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                    aria-label="Download image"
                  >
                    <Download className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
