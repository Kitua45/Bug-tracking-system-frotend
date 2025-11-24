import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="py-20 px-10 bg-[#f5f5f5]">
      <h2 className="text-4xl font-bold text-center text-[#054003]">
        System Features
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
        Everything you need to manage bugs, users, comments, and projects with ease.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {[
          {
            title: "Bug Tracking",
            desc: "Track bugs with severity levels, assign users, and update statuses.",
            border: "#148C0F",
          },
          {
            title: "Project Management",
            desc: "Organize, assign, and monitor all your development projects.",
            border: "#2ABF24",
          },
          {
            title: "Collaboration Tools",
            desc: "Users, comments, updates, notifications - stay aligned always.",
            border: "#BF0F1E",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            className={`p-8 bg-white rounded-xl shadow border-l-4`}
            style={{ borderColor: item.border }}
          >
            <h3 className="text-xl font-semibold text-[#054003]">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

