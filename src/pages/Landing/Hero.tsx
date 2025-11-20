import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-[#E6F4EA] rounded-xl">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl font-bold text-[#054003] leading-tight"
        >
          Bug Tracking & Project Management
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-700 mt-4 text-lg"
        >
          A powerful system to manage projects, track bugs, monitor user
          activity, and streamline your workflow.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
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
            className="border border-[#148C0F] text-[#148C0F] px-6 py-3 rounded-lg hover:bg-[#DFF7E0]"
          >
            Login
          </motion.a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
     <motion.div className="flex-1 flex justify-center items-center">
  <motion.img
    src="/hero2.png"
    alt="Bug Tracker Illustration"
    className="w-[520px] md:w-[560px] lg:w-[600px] rounded-xl shadow-lg"
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  />
</motion.div>
    </section>
  );
}

