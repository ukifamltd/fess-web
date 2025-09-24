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
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/552197773_10238488913219010_1648716343769207569_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2285d6&_nc_ohc=ds6MZ-f_T7sQ7kNvwFRh435&_nc_oc=Adm1bqcRyIy4dTnbdoLog3lHL4nP_x6Fo3Kw5Y0ujexyRzCbmku5WmLrJ0gzQ-volQFM57aKThAqCJV4UZARph7C&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=yrZu0-73MmL6ih5W5HL-dQ&oh=00_AfZvDWv1m4OwK4CE8Ltsi9gyzwRIYSeqk6q0DnYLRdtTvg&oe=68D9E65B",
      title: "Primary School Students",
      description:
        "Our primary students engaged in interactive learning activities",
      category: "academics",
    },
    {
      id: 2,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/544988261_10238271383860912_8044838255817523040_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=pT0WVA2NDigQ7kNvwH5ZLnX&_nc_oc=AdmnBmDw2WTsKKtbdMseCL2x7PSa3apC-5pRn0J8E43ZO0-9hl0oPQXisI8Wq04JooFvG41e-yybW1oOYy3UcZ5h&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=yRvoAGsVxLWORcuGBGBP6w&oh=00_Afbo-KnH8V4qlHVjJZeZibSiN-35i3iqXtuwcmh1ppHPLA&oe=68DA06B4",
      title: "Excellence performance Experiment",
      description: "Fidrofa Excellence School one of the Best performing schools in the country.",
      category: "academics",
    },
    {
      id: 3,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/539213838_10238221287888544_2473894096630108487_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=zuKYODGz_EgQ7kNvwH2_jYX&_nc_oc=AdkbvASntwJiHVjfyRJHVHEYDxaxjtgwPLoQydc4pI4UCGC6xU5UxJCjmxi6Nm2ZXv8qB6pzzfBrr36zC1NRZ3L3&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=Wkh14b63n1AMP1Eo-D0XcA&oh=00_AfYOvrwPgDeyH_H7Kff2kBjtNzeNt5wSjF7J7-00R86zWQ&oe=68D9DB34",
      title: "The firstborns of Fidrofa Excellence School (FES)",
      description: "Entere primary 6 class passed the national exam for Secondary school entrance",
      category: "academics",
    },
    {
      id: 4,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/505544553_10237035661968637_2778733310005832593_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=wTxXK1JEX_AQ7kNvwEni3O4&_nc_oc=Adn6WOVsVXDsbjPpXLxi9GDMWfgGjjsvSV6y6cibbtD-Pf0UAdno-TAScjYTf_x9iJ_9WZL9TWsdrYx61ELmUFto&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=fzKGReUo8op4WtPKIWluoQ&oh=00_AfaB5t26-uNawXdAZ2jFreCjm_DVcnA6GcleKYnxchP6AA&oe=68DA0183",
      title: "Sports Day",
      description: "We added some playing tools (tires) in our Nursery school and children like them a lot",
      category: "sports",
    },
    {
      id: 5,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/504220503_10236895573426511_5145459142044560845_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=9UfKyotYc-cQ7kNvwF_ZCyD&_nc_oc=AdnF_SNzonK8_arGjLPjUZKBtq2EKPwMKETzMXTsH-z1r2KhVB8Zc9s8eYnrIHfLlVSgeyCTCg63yx8J1hMkJ4yv&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=Pd5sDkR-QmIj48ivt2663g&oh=00_AfY4CE71UD_emtAsl4eoUdVbF5LEa0wZtwwqmzmu-adv1g&oe=68D9E59E",
      title: "Art Class",
      description: "To improve quality in education is to create a better future for learners",
      category: "arts",
    },
    {
      id: 6,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/503350238_10236865812562508_8223091699224919246_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=yKkXL3xEBQIQ7kNvwG9Vu-l&_nc_oc=AdmchcUln3cbmrO24H0Vg1iMAoZpR-mcGhon2_GAlH-kH7_s8vytSw2sCVsCtPuuwWk6LHH8o5_X4A4ogrLAYuQx&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=u68s89fZMFttceaCyDcHsg&oh=00_AfYdQ-v54JNwl_V_W8Ci8YfesUId86h2pYqLePW7IKboEA&oe=68D9DF24",
      title: "Nursery Students",
      description: "break time for the nursery students",
      category: "academics",
    },
    {
      id: 7,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/505650793_10236956217142566_7486367611098816615_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SoaOhFuPkfsQ7kNvwGhs604&_nc_oc=Adm9vkluy2qCMC5XrqRIvEBYoDJESu8UXuhvG_nzJrlFlDLKZFdzZPhtVit1bBt3ED6hNJOLhRubNfnhoojcp2UN&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=w3HYPKMMG_Fd9Lp756PpzQ&oh=00_AfbOcmiw--my2a1KSHJL0HFijd2dKh010n1Avg4ahJEGJw&oe=68D9EB8F",
      title: "Activities",
      description: "Students enjoying daily meal",
      category: "activities",
    },
    {
      id: 8,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/503248169_10236850185971853_6156169674575137824_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Ul6wpR6MrKsQ7kNvwFj3e0C&_nc_oc=AdnM6RFSIfTE33aav7Lu3uPZOZ2iWq-SEydr9sQDXJRQt7zeB8W7nztonzJjrwza5sCT-AQOBRNfLUe3d68X5-1A&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=ijDIFjItZssenfZh_Q_qMA&oh=00_AfZTsAuQF3ivhypcWdS8Lr85NJ2E9m09VwRL1OrlZaTs0w&oe=68D9F441",
      title: "Teacher Training Event",
      description: "Training teachers is one of the keys to unlock quality Education.",
      category: "events",
    },
    {
      id: 9,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/504169272_10236879988356894_8937222913421438917_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=KminT72Dm0IQ7kNvwEM-FlJ&_nc_oc=Adn7_h3crwP549bIdf9KbZlu816OxYXGDokElWU3HgMuiNKvBo3GM9b5bIUlYdDn-cPlxxN5EJ7oW_0DyMRKWX4E&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=7zLwZE-t3kXxqQ4vb968hA&oh=00_AfbqFSayOjmj94zEYYhnL888kLhpt4YOn2v2ple74-8ppQ&oe=68D9E7DF",
      title: "Group Activities",
      description: "Collaborative learning in action",
      category: "academics",
    },
    {
      id: 10,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/504119097_10236865811602484_4500494512390512443_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=uO0Md0VhhWcQ7kNvwH4AJ1Y&_nc_oc=AdnEtmQ_hBM6NxWd4gIt-DjkwuhtlcxhnY6inAvQVru6njMNdqjSDDRdVV7E40L1BXI_b_gvs9U4rAHvCLYIrufb&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=U6TesivQ-gglFEY-XT53XA&oh=00_AfZq7T3HWjajxIPtovz-eCalUKjW9GjrvLX2b7GTagV7Yg&oe=68DA022B",
      title: "Group Activities",
      description: "Collaborative learning in action",
      category: "academics",
    },
    {
      id: 11,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/501296265_10236770465538892_4877964851732663954_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=PVobOakHj48Q7kNvwHyG2VZ&_nc_oc=AdnHNwmrRU2l8sTGyJJYY4RvSEKP52jdr9L9YdAPdun95FMrj_Q_N7t25EB2aWPZ3z0r69uslYwxo1N6Nfuo24x0&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=erBvnbDdacZRmM5QvHNXEQ&oh=00_AfYO3SGe97HAqsGNR8BxzX6uOCLJIUyU8ZKhEtlvNyGc2g&oe=68DA0A31",
      title: "Sports Day",
      description: "Play time ",
      category: "sports",
    },
    {
      id: 12,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/539213838_10238221287888544_2473894096630108487_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=zuKYODGz_EgQ7kNvwH2_jYX&_nc_oc=AdkbvASntwJiHVjfyRJHVHEYDxaxjtgwPLoQydc4pI4UCGC6xU5UxJCjmxi6Nm2ZXv8qB6pzzfBrr36zC1NRZ3L3&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=QRivieY4a-0t4F-XVlFb7w&oh=00_AfaUnsGvU9VjC2Ldrkkmyfa22tyXMbYmfC1UfrP6bWg4EA&oe=68D9DB34",
      title: "Award Ceremony",
      description: "Celebrating student achievements and milestones",
      category: "events",
    },
   {
      id: 13,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/496253219_10236521978806879_3794051767976139230_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=1FgD1F2SJ8wQ7kNvwGSHBoH&_nc_oc=AdlngSTUJ_kFCPfNah9HGlE2N8Ghnjg8k2yMv1qcrsaJpYR8bakplTif2kVj6gcHYqC6f9Rm_Q0gmVHFUo8R6Woy&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=lbM0JdtNyqudFc0BfkL4jA&oh=00_AfajuBCcEXbtVgclr8X4UHk_0qUqDrm4q1PRL6zocjAxfw&oe=68D9E9D4",
      title: "Art Class",
      description: "Excellency",
      category: "arts",
    },
    {
      id: 14,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/504007443_10236900120100175_5375278529150744588_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=gZ0xfNBtZasQ7kNvwEtl6tp&_nc_oc=AdlGRXRG52hMLhyOXMX4imXwvW1b_ecO7PxGFaeLaCOSIsZ0WRhoEoIV8j4i640CXkT5bVwQakEiVODobickluG1&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=ojbn_OD_AgC-cKXmOZ1iAg&oh=00_AfbZ5i5RGnQ4OoKgmx6Me2rNafvckjqFX7lO9Q49GwOhIw&oe=68D9D693",
      title: "Activities",
      description: "Gahunda yabakuru (Adults programmes) yo kwiga icyongereza",
      category: "activities",
    },
    {
      id: 15,
      image:
        "https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/494443912_10236410899869975_2278020094443652144_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Y4-5Dmx5UCIQ7kNvwGuaE2w&_nc_oc=AdlPkNcKGlAua0OlwCRhosVQBXIWivu8bWEuA3qgcNVL9YR67XJ_6QVPHnLNZ2DH4AqAFMdYRwXZf02F14J-LlN6&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=UAjl3Hha5J54u34K-KVKtg&oh=00_AfYDkmxq57kOEIL24ElWCtdXlr_JJ3EqqPn7f46WPzjp1A&oe=68D9EDBC",
      title: "Break time",
      description: "Play time ",
      category: "sports",
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
      {/* Background decorative circles - consistent with other pages */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        backgroundImage="https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/516870622_10237460947200502_111760779889817856_n.jpg?stp=dst-jpg_s280x280_tt6&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=xJ2VJm5MvOEQ7kNvwG-htVk&_nc_oc=Adm0EvI2iG4n8Njmujo-l8du7IYzUmTt4YXyjdO_Cx7IGNwXUOAbd4PMXOQ_umP_65aW8vvMWd9qof5JF5kzpc-T&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=eeVR0BU9Qix3-9oISPtRcg&oh=00_AfYwuf4lMFNufDaECmdoi5JvhZONkK2N87JMYU-7EJ6Uzg&oe=68DA063C"
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
