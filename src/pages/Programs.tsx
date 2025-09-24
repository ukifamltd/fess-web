import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award, Sparkles } from "lucide-react";
import HeroBanner from "../components/HeroBanner";

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative circles - similar to About.tsx */}
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
        title="Our Educational Programs"
        subtitle="Discover our comprehensive curriculum designed for excellence"
        backgroundImage="https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/505578561_10236956218942611_6551636429546177990_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=wS5OEERXwkcQ7kNvwFWkDdd&_nc_oc=Adn_mn0xXhYa9dATSOMw6UJrkcHTiA_A_lnporCQFi3Ua2bQk56OrKpcem4XQUqCUEiqUDKNBHf4aj9K38LhDbGx&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=8Fav2_SWu3sWsmkX4HTDLw&oh=00_AfZguwHXeizAZZZWC-5gJLNlC-1pEtxAErhbFpvZKuFuQA&oe=68D9F0AC"
        overlayColor="from-green-800/80 to-teal-900/80"
      />

      <div className="container mx-auto px-6 py-20 relative">
        {/* Programs Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden"
        >
          {/* Program section background circles */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/20 rounded-full translate-x-12 -translate-y-8" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-100/15 rounded-full -translate-x-10 translate-y-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-8 border-2 border-gray-100 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Day Care (ECD)
              </h3>
              <p className="text-gray-600">
                Early childhood development with full care, meals, and learning
                activities
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-8 border-2 border-gray-100 rounded-2xl hover:border-green-300 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Nursery
              </h3>
              <p className="text-gray-600">
                Half-day program running until 11:45AM with quality early
                education
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-8 border-2 border-gray-100 rounded-2xl hover:border-purple-300 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Primary School
              </h3>
              <p className="text-gray-600">
                Full-day program until 6PM with English instruction and
                comprehensive curriculum
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Programs;
