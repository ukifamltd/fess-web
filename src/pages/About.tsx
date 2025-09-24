import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Users,
  BookOpen,
  GraduationCap,
  Heart,
  Target,
  Shield,
  Star,
  Sparkles,
} from "lucide-react";
import HeroBanner from "../components/HeroBanner";

const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stats = [
    {
      icon: GraduationCap,
      value: "100%",
      label: "Primary 6 Success Rate",
      color: "text-blue-600",
    },
    {
      icon: Users,
      value: "200+",
      label: "Happy Students",
      color: "text-green-600",
    },
    {
      icon: BookOpen,
      value: "3",
      label: "Education Levels",
      color: "text-purple-600",
    },
    {
      icon: Heart,
      value: "100%",
      label: "Quality Care",
      color: "text-pink-600",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "Striving for the highest standards in education and character development",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Discipline",
      description:
        "Fostering self-control, respect, and responsible behavior in all students",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Heart,
      title: "Care",
      description:
        "Providing nurturing environment with quality care and attention",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Star,
      title: "Confidence",
      description:
        "Building self-assured individuals ready to face future challenges",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative circles */}
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

      {/* Hero Header Section with full-width background */}
      <HeroBanner
        title="About Fidrofa Excellence School"
        subtitle="Providing quality education and skills training for young minds in Bugesera District"
        backgroundImage="https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/504119097_10236865811602484_4500494512390512443_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=uO0Md0VhhWcQ7kNvwH4AJ1Y&_nc_oc=AdnEtmQ_hBM6NxWd4gIt-DjkwuhtlcxhnY6inAvQVru6njMNdqjSDDRdVV7E40L1BXI_b_gvs9U4rAHvCLYIrufb&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=9wIwi89vOUvLDRdZMFqnDQ&oh=00_AfZUwRSMeSDhYbT7-_dtPHugBRI3rOh3bqX_5jJZZcgJOQ&oe=68DA022B"
      />

      <div className="container mx-auto px-6 py-20 relative">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={itemVariants} className="relative">
            {/* Content background circle */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-100/30 rounded-full -z-10" />
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-purple-100/25 rounded-full -z-10" />

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-gray-800">
              Our <span className="text-blue-600">Story</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Fidrofa Excellence School (FES) is a private school located in
                Eastern Province, Bugesera District, just 2km from Kigali
                International Airport. We are committed to providing quality
                education, skills training, and job creation opportunities for
                young people.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our students are admired by the community as smart and
                disciplined learners, and we take pride in our 100% success rate
                in Primary 6 national examinations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At FES, we believe in building confident, hardworking
                individuals who strive for excellence in everything they do.
                Better future is assured at Fidrofa Excellence School.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
              >
                {/* Card background effect - More explicit gradient classes */}
                <div
                  className={`absolute inset-0 -z-10 opacity-10 group-hover:opacity-20 transition-opacity ${
                    stat.color === "text-blue-600"
                      ? "bg-gradient-to-br from-blue-600 to-white"
                      : stat.color === "text-green-600"
                      ? "bg-gradient-to-br from-green-600 to-white"
                      : stat.color === "text-purple-600"
                      ? "bg-gradient-to-br from-purple-600 to-white"
                      : "bg-gradient-to-br from-pink-600 to-white"
                  }`}
                />
                <stat.icon
                  className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`}
                />
                <div className={`text-2xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do at FES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color}`}
                />
                <div className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-900 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;