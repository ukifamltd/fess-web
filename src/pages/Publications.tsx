import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Eye, X, Sparkles } from "lucide-react";
import HeroBanner from "../components/HeroBanner";

interface Publication {
  id: number;
  title: string;
  description: string;
  file: string;
}

const Publications: React.FC = () => {
  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const publications: Publication[] = [
    {
      id: 1,
      title: "2024-2025 School rankings",
      description:
        "2024-2025 Academic year National Examination results school rankings",
      file: "/pdfs/results.pdf",
    },
    {
      id: 4,
      title: "Primary School Fees Structure 2025",
      description:
        "Complete breakdown of school fees and payment schedules for primary school programs.",
      file: "/pdfs/primary.pdf",
    },
    {
      id: 2,
      title: "Nursery School Fees Structure 2025",
      description:
        "Complete breakdown of school fees and payment schedules for nursery school programs.",
      file: "/pdfs/Nursery.pdf",
    },
    {
      id: 3,
      title: "Day care Fees Structure 2025",
      description:
        "Complete breakdown of fee and payment schedules for daycare",
      file: "/pdfs/Day-Care.pdf",
    },
  ];

  const openModal = (publication: Publication) => {
    setSelectedPublication(publication);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPublication(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
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

      {/* Hero Banner Section */}
      <HeroBanner
        title="Official Publications"
        subtitle="Access important school documents, reports, and official publications"
        backgroundImage="/images/302.jpg"
        overlayColor="from-blue-800/80 to-teal-900/80"
      />

      <div className="container mx-auto px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Page Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-serif font-bold text-gray-800 mb-4"
            >
              School <span className="text-blue-600">Publications</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Browse through our official documents, reports, and publications.
              Click on any publication to view or download.
            </motion.p>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group cursor-pointer border border-gray-100"
                onClick={() => openModal(publication)}
              >
                <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-4">
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {publication.title}
                        </h3>
                        <p className="text-gray-600">
                          {publication.description}
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(publication);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                          <span>Preview</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {publications.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No Publications Available
              </h3>
              <p className="text-gray-500">
                Check back later for new publications and documents.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* PDF Modal - Fixed Version */}
      {isModalOpen && selectedPublication && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2"> {/* Reduced padding */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-2xl max-w-7xl w-full h-[98vh] overflow-hidden flex flex-col"
    >
      {/* Modal Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200 flex-shrink-0">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800"> {/* Increased font size */}
            {selectedPublication.title}
          </h3>
        </div>
        <button
          onClick={closeModal}
          className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          <X className="w-8 h-8" /> {/* Larger close icon */}
        </button>
      </div>

      {/* Modal Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="flex flex-col items-center h-full">
          {/* PDF Preview */}
          <div className="w-full h-full bg-gray-100 rounded-lg">
            <iframe
              src={selectedPublication.file}
              className="w-full h-full min-h-[600px]"
              title={selectedPublication.title}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <FileText className="w-20 h-20 text-gray-400 mx-auto mb-4" /> {/* Larger icon */}
                  <p className="text-gray-600 mb-4 text-lg"> {/* Larger text */}
                    Your browser does not support PDF embedding.
                  </p>
                  <motion.a
                    href={selectedPublication.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </motion.a>
                </div>
              </div>
            </iframe>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
)}
    </div>
  );
};

export default Publications;
