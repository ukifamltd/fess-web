import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  Users,
  Heart,
  BookOpen,
  GraduationCap,
  MapPin,
  Clock,
  Sparkles,
  Download,
} from "lucide-react";
import Carousel from "../components/Carousel";
import { carouselItems } from "../data/carouselData";

const Home: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4, 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const features = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description:
        "100% success rate in Primary 6 national examinations (NESA 2024-2025)",
      color: "text-blue-600",
    },
    {
      icon: Users,
      title: "Quality Care",
      description:
        "Well-known in our community for exceptional child care and development",
      color: "text-green-600",
    },
    {
      icon: Heart,
      title: "Holistic Development",
      description:
        "Training students to be hardworking, disciplined, confident, and excellent",
      color: "text-pink-600",
    },
  ];

  const programs = [
    {
      icon: BookOpen,
      title: "Day Care (ECD)",
      description:
        "Early childhood development with full care, meals, and learning activities",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      image: "/images/429.jpg",
      pdf: "/pdfs/Day-Care.pdf",
    },
    {
      icon: Clock,
      title: "Nursery",
      description:
        "Half-day program running until 11:45AM with quality early education",
      color: "text-green-600",
      bgColor: "bg-green-100",
      image: "/images/440.jpg",
      pdf: "/pdfs/Nursery.pdf",
    },
    {
      icon: GraduationCap,
      title: "Primary School",
      description:
        "Full-day program until 6PM with English instruction and comprehensive curriculum",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      image: "/images/386.jpg",
      pdf: "/pdfs/primary.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
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

      <section className="relative w-full">
        <Carousel
          items={carouselItems}
          autoPlay={true}
          autoPlayInterval={5000}
        />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16" />

              <div className="relative z-10">
                <BookOpen className="w-12 h-12 mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-4">Our Motto</h2>
                <p className="text-3xl font-bold italic">
                  "Educate and Transform"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold text-center mb-16 text-gray-800"
          >
            Why Choose <span className="text-blue-600">FES</span>
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <feature.icon
                  className={`w-12 h-12 ${feature.color} mx-auto mb-4`}
                />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold text-center mb-16 text-gray-800"
          >
            Our <span className="text-blue-600">Educational Programs</span>
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${program.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10`}
                  >
                    <program.icon className={`w-8 h-8 ${program.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>

                  <div className="flex justify-center items-center text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {program.title === "Nursery"
                      ? "7:30 AM - 11:45 AM"
                      : program.title === "Primary School"
                      ? "7:30 AM - 6:00 PM"
                      : "Full Day Care"}
                  </div>

                  {/* Download Button */}
                  <motion.a
                    href={program.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center space-x-2 px-6 py-3 ${
                      program.bgColor
                    } ${
                      program.color
                    } rounded-xl font-medium transition-all hover:shadow-lg mx-auto hover:${program.bgColor
                      .replace("bg-", "bg-")
                      .replace("-100", "-200")}`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Official Bulletin</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-blue-50 rounded-2xl p-8 text-center relative overflow-hidden mb-16"
          >
            {/* Background circles for location section */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100/30 rounded-full translate-x-8 -translate-y-8" />
            <div className="absolute bottom-0 left-0 w-14 h-14 bg-blue-100/20 rounded-full -translate-x-7 translate-y-7" />

            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Our Location
            </h3>
            <p className="text-gray-600 text-lg">
              Bugesera District, Mayange Sector, kagenge cell, Taba Village
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 w-full">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Support Text */}
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl font-serif font-bold text-gray-800"
                >
                  Support Our <span className="text-blue-600">Vision 2035</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  Please stand with Fidrofa Excellence School in achieving the
                  dream and vision 2035, through prayers, financial support and
                  donations. Send your support to our accounts listed below.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <Heart className="w-6 h-6 text-red-500 mr-2" />
                    Banking Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-700">
                        Bank of Kigali
                      </span>
                      <span className="font-mono text-blue-600">
                        100001698332
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-700">
                        MOMO PAY
                      </span>
                      <span className="font-mono text-green-600">621094</span>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200"
                  >
                    <p className="text-sm text-yellow-800 text-center">
                      After sending your support, please email us at{" "}
                      <a
                        href="mailto:nizeyimanaf@gmail.com"
                        className="font-semibold underline"
                      >
                        nizeyimanaf@gmail.com / info@fidrofa.com
                      </a>
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-100"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
                  Strategic Activities 2035
                </h3>

                <div className="space-y-4 mb-6">
                  {[
                    "Extension of land to 1 Hector",
                    "Construction of secondary School",
                    "Construction of a college, dormitories and laboratory",
                    "Construction of a hospital",
                    "Construction of a chapel",
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.6 + index * 0.1,
                        duration: 0.5,
                      }}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{activity}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Budget Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-6 text-white text-center"
                >
                  <h4 className="text-lg font-semibold mb-2">
                    Strategic Budget
                  </h4>
                  <p className="text-3xl font-bold">$2,500,000</p>
                  <p className="text-purple-100 text-sm mt-2">
                    Total Project Funding Goal
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 w-full relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full" />
        </div>
        <div className="container mx-auto px-6 text-center relative">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold mb-8 text-white"
          >
            Join Our <span className="text-yellow-300"> Community</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            Become part of a school that values excellence, discipline, and
            holistic development for every child.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
              type="button"
            >
              Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
