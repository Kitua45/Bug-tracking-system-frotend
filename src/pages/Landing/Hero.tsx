import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-10 py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero4.jpg')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative max-w-xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white leading-tight"
        >
          Bug Tracking & Project Management
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-200 mt-4 text-lg"
        >
          A powerful system to manage projects, track bugs, monitor user
          activity, and streamline your workflow.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-4 mt-8"
        >
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#148C0F] text-white px-6 py-3 rounded-lg shadow hover:bg-[#1AB91F]"
          >
            Get Started
          </motion.a>

          <motion.a
            href="/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-[#148C0F] text-white px-6 py-3 rounded-lg hover:bg-white/20"
          >
            Login
          </motion.a>
        </motion.div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        className="relative z-10 flex-1 flex justify-center items-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/hero2.png"
          alt="Bug Tracker App Preview"
          className="w-[480px] md:w-[540px] lg:w-[600px] rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}
