import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please fill in all required fields",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_USER_ID!
      )
      .then(() => {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! We'll contact you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setSubmitStatus({
          success: false,
          message: "Failed to send message. Please try again later.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
        title="Get in Touch"
        subtitle="We'd love to hear from you and answer any questions"
        backgroundImage="https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/503350238_10236865812562508_8223091699224919246_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=yKkXL3xEBQIQ7kNvwG9Vu-l&_nc_oc=AdmchcUln3cbmrO24H0Vg1iMAoZpR-mcGhon2_GAlH-kH7_s8vytSw2sCVsCtPuuwWk6LHH8o5_X4A4ogrLAYuQx&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=rhQTiRmuqNU5IrPgyFh2hA&oh=00_AfabYAuhLzIofBLQmloGnPDf0IelldyInYZntuUgRIdjwQ&oe=68D9DF24"
        overlayColor="from-purple-800/80 to-pink-900/80"
      />

      <div className="container mx-auto px-6 py-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div variants={itemVariants} className="relative">
            {/* Content background circle */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-100/30 rounded-full -z-10" />
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-purple-100/25 rounded-full -z-10" />

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-gray-800">
              Contact <span className="text-blue-600">Information</span>
            </h2>

            <div className="space-y-6 mb-10">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold font-sans">Email</p>
                  <p className="text-gray-600 font-sans">
                    info@fidrofa.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold font-sans">Phone</p>
                  <p className="text-gray-600 font-sans">+250 786 328 657</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold font-sans">Address</p>
                  <p className="text-gray-600 font-sans">
                    Eastern Province, Bugesera District, Mayange Sectory, Taba Cell
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden">
              {/* Map background circles */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-blue-100/20 rounded-full translate-x-6 -translate-y-6" />
              <div className="absolute bottom-0 left-0 w-10 h-10 bg-purple-100/15 rounded-full -translate-x-5 translate-y-5" />

              <h3 className="text-xl font-serif font-semibold mb-4 text-gray-800">
                Our Location
              </h3>

              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63835.53694547219!2d30.1394191!3d-1.968577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76d8c0e46a9%3A0x7856f3b6c6c1b0e!2sKigali%20International%20Airport%20(KGL)!5e0!3m2!1sen!2srw!4v1700000000000!5m2!1sen!2srw"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Fidrofa Excellence School Location"
                ></iframe>
              </div>

              <div className="mt-4">
                <p className="text-gray-600 font-sans text-sm">
                  Eastern Province, Bugesera District, Mayange Sectory, Taba Cell
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
          >
            {/* Form background circles */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100/20 rounded-full translate-x-8 -translate-y-8" />
            <div className="absolute bottom-0 left-0 w-14 h-14 bg-purple-100/15 rounded-full -translate-x-7 translate-y-7" />

            <h3 className="text-2xl font-serif font-semibold mb-6 text-gray-800">
              Send us a Message
            </h3>

            {/* Status Message */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg mb-6 ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-sans"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-sans"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-sans"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-sans"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message *"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-sans"
                required
              />

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center font-sans ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
