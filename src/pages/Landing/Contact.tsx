import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-10 bg-white"
    >
      <h2 className="text-3xl font-bold text-center text-[#054003] mb-8">
        Contact Us
      </h2>

      <div className="max-w-xl mx-auto text-center">
        <p className="text-gray-700 text-lg">
          Email: <span className="font-bold">support@bugtracker.com</span>
        </p>
        <p className="text-gray-700 text-lg mt-3">
          Phone: <span className="font-bold">+254 712 345 678</span>
        </p>
      </div>

      <p className="text-center text-gray-500 mt-16">
        © {new Date().getFullYear()} Bug Tracker System — All Rights Reserved
      </p>
    </motion.section>
  );
}
