import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Users, Heart, BookOpen, GraduationCap, MapPin, Clock, Sparkles } from 'lucide-react';
import Carousel from '../components/Carousel';
import { carouselItems } from '../data/carouselData';

const Home: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      }
    }
  };

  const features = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: '100% success rate in Primary 6 national examinations (NESA 2024-2025)',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Quality Care',
      description: 'Well-known in our community for exceptional child care and development',
      color: 'text-green-600'
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'Training students to be hardworking, disciplined, confident, and excellent',
      color: 'text-pink-600'
    }
  ];

  const programs = [
    {
      icon: BookOpen,
      title: 'Day Care (ECD)',
      description: 'Early childhood development with full care, meals, and learning activities',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Clock,
      title: 'Nursery',
      description: 'Half-day program running until 11:45AM with quality early education',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: GraduationCap,
      title: 'Primary School',
      description: 'Full-day program until 6PM with English instruction and comprehensive curriculum',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

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

      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel items={carouselItems} autoPlay={true} autoPlayInterval={5000} />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
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
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section - New Design */}
      <section className="py-20 bg-white relative">
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
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all group"
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
                  <div className={`w-16 h-16 ${program.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10`}>
                    <program.icon className={`w-8 h-8 ${program.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="flex justify-center items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {program.title === 'Nursery' ? '7:30 AM - 11:45 AM' : 
                     program.title === 'Primary School' ? '7:30 AM - 6:00 PM' : 
                     'Full Day Care'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-blue-50 rounded-2xl p-8 text-center relative overflow-hidden"
          >
            {/* Background circles for location section */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100/30 rounded-full translate-x-8 -translate-y-8" />
            <div className="absolute bottom-0 left-0 w-14 h-14 bg-blue-100/20 rounded-full -translate-x-7 translate-y-7" />
            
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Our Location</h3>
            <p className="text-gray-600 text-lg">
              Eastern Province, Bugesera District, 2km from Kigali International Airport
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
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
            Become part of a school that values excellence, discipline, and holistic development for every child.
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