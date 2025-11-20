import { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#148C0F", "#2ABF24", "#5CE65A"];

const activityData = [
  { name: "Mon", bugs: 1 },
  { name: "Tue", bugs: 3 },
  { name: "Wed", bugs: 2 },
  { name: "Thu", bugs: 5 },
  { name: "Fri", bugs: 3 },
  { name: "Sat", bugs: 4 },
  { name: "Sun", bugs: 2 },
];

const pieData = [
  { name: "Completed", value: 65 },
  { name: "In Progress", value: 25 },
  { name: "Pending", value: 10 },
];

const userTasks = [
  { id: 1, task: "Fix login error", status: "Completed" },
  { id: 2, task: "UI polish on dashboard", status: "In Progress" },
  { id: 3, task: "API bug in comments", status: "Pending" },
  { id: 4, task: "Fix project ID mismatch", status: "Completed" },
  { id: 5, task: "Improve performance", status: "In Progress" },
  { id: 6, task: "Add validation checks", status: "Pending" },
  { id: 7, task: "Pagination feature", status: "In Progress" },
  { id: 8, task: "Add charts", status: "Completed" },
  { id: 9, task: "Implement shaking alert", status: "Pending" },
  { id: 10, task: "Fix CORS issue", status: "Completed" },
];

const ITEMS_PER_PAGE = 5;

export default function UserDashboard() {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedTasks = userTasks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(userTasks.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen px-6 py-10 bg-[#0F3D13] text-white">
      {/* Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
      >
        Welcome back, Agnes 👋
      </motion.h1>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-black rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-lg font-semibold mb-4">Weekly Bug Activity</h2>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="bugs" stroke="#148C0F" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-black rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-lg font-semibold mb-4">Task Completion Overview</h2>
          <div className="w-full h-64 flex justify-center">
            <ResponsiveContainer width="70%">
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={100}>
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Tasks Table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white text-black rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-lg font-semibold mb-4">Your Recent Tasks</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.task}</td>
                <td
                  className={
                    task.status === "Completed"
                      ? "text-green-600 font-semibold"
                      : task.status === "Pending"
                      ? "text-red-600 font-semibold"
                      : "text-yellow-600 font-semibold"
                  }
                >
                  {task.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between mt-6">
          <button
            className="btn btn-sm bg-[#148C0F] text-white"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="text-black">
            Page {page} of {totalPages}
          </span>
          <button
            className="btn btn-sm bg-[#148C0F] text-white"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
}
