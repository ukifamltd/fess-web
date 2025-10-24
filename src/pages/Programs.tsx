import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award, Sparkles, Download, Clock } from "lucide-react";
import HeroBanner from "../components/HeroBanner";

const Programs: React.FC = () => {
  const programs = [
    {
      id: "daycare",
      title: "Day Care (ECD)",
      description: "Early childhood development with full care, meals, and learning activities",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      image: "/images/429.jpg",
      pdf: "/pdfs/Day-Care.pdf"
    },
    {
      id: "nursery",
      title: "Nursery",
      description: "Half-day program running until 11:45AM with quality early education",
      icon: Award,
      color: "text-green-600",
      bgColor: "bg-green-100",
      image: "/images/440.jpg",
      pdf: "/pdfs/Nursery.pdf"
    },
    {
      id: "primary",
      title: "Primary School",
      description: "Full-day program until 6PM with English instruction and comprehensive curriculum",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      image: "/images/386.jpg",
      pdf: "/pdfs/primary.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/25 rounded-full -translate-x-20 -translate-y-10" />
        <div className="absolute top-10 right-20 w-32 h-32 bg-purple-100/25 rounded-full translate-x-16 -translate-y-8" />
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-green-100/15 rounded-full -translate-x-18 translate-y-12" />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-pink-100/20 rounded-full translate-x-14 translate-y-8" />

        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-200/30 rounded-full" />
        <div className="absolute top-2/3 right-1/3 w-14 h-14 bg-purple-200/35 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-green-200/25 rounded-full" />

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

      <HeroBanner
        title="Our Educational Programs"
        subtitle="Discover our comprehensive curriculum designed for excellence"
        backgroundImage="/images/302.jpg"
        overlayColor="from-green-800/80 to-teal-900/80"
      />

      <div className="container mx-auto px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
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
                
                <div className="flex justify-center items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {program.title === 'Nursery' ? '7:30 AM - 11:45 AM' : 
                   program.title === 'Primary School' ? '7:30 AM - 6:00 PM' : 
                   'Full Day Care'}
                </div>

                <motion.a
                  href={program.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center space-x-2 px-6 py-3 ${program.bgColor} ${program.color} rounded-xl font-medium transition-all hover:shadow-lg mx-auto hover:${program.bgColor.replace('bg-', 'bg-').replace('-100', '-200')}`}
                >
                  <Download className="w-4 h-4" />
                  <span>Official Bulletin</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Programs;
