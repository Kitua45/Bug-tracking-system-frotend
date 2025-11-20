
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  // Dummy data
  const totalUsers = 30;
  const totalProjects = 10;
  const totalBugs = 45;
  const bugsResolved = 25;

  const bugSeverityData = [
    { name: "Critical", value: 5 },
    { name: "High", value: 10 },
    { name: "Medium", value: 15 },
    { name: "Low", value: 15 },
  ];

  const COLORS = ["#E11D48", "#F97316", "#FACC15", "#22C55E"];

  const weeklyBugsData = [
    { day: "Mon", reported: 5, resolved: 2 },
    { day: "Tue", reported: 8, resolved: 5 },
    { day: "Wed", reported: 6, resolved: 4 },
    { day: "Thu", reported: 10, resolved: 6 },
    { day: "Fri", reported: 7, resolved: 3 },
    { day: "Sat", reported: 4, resolved: 4 },
    { day: "Sun", reported: 3, resolved: 2 },
  ];

  const recentBugs = [
    { id: 101, title: "Login button not working", project: "Bug Tracker", status: "Open", severity: "High", created: "2025-11-01" },
    { id: 102, title: "App crashes on signup", project: "Kenya Sentinel", status: "In Progress", severity: "Critical", created: "2025-11-02" },
    { id: 103, title: "Incorrect total in dashboard", project: "Analytics Dashboard", status: "Open", severity: "Medium", created: "2025-11-03" },
    { id: 104, title: "Email notifications missing", project: "Hospital CMS", status: "Resolved", severity: "Low", created: "2025-11-04" },
    { id: 105, title: "Data not saving correctly", project: "Project Alpha", status: "In Progress", severity: "High", created: "2025-11-05" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-red-100 text-red-700";
      case "In Progress": return "bg-yellow-100 text-yellow-700";
      case "Resolved": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-5 flex flex-col items-center">
          <span className="text-gray-500">Total Users</span>
          <span className="text-3xl font-bold text-[#148C0F]">{totalUsers}</span>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex flex-col items-center">
          <span className="text-gray-500">Total Projects</span>
          <span className="text-3xl font-bold text-[#054003]">{totalProjects}</span>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex flex-col items-center">
          <span className="text-gray-500">Total Bugs</span>
          <span className="text-3xl font-bold text-[#E11D48]">{totalBugs}</span>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex flex-col items-center">
          <span className="text-gray-500">Bugs Resolved</span>
          <span className="text-3xl font-bold text-[#22C55E]">{bugsResolved}</span>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bug Severity Pie Chart */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-[#054003]">Bugs by Severity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={bugSeverityData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {bugSeverityData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Bugs Line Chart */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-[#054003]">Weekly Bug Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyBugsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="reported" stroke="#E11D48" strokeWidth={3} name="Reported" />
              <Line type="monotone" dataKey="resolved" stroke="#22C55E" strokeWidth={3} name="Resolved" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Bugs Table */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-[#054003]">Recent Bugs</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-[#148C0F] text-white text-sm">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Project</th>
                <th>Status</th>
                <th>Severity</th>
                <th>Created Date</th>
              </tr>
            </thead>
            <tbody>
              {recentBugs.map((bug) => (
                <tr key={bug.id} className="hover:bg-gray-50 transition-all duration-200">
                  <td>{bug.id}</td>
                  <td>{bug.title}</td>
                  <td>{bug.project}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(bug.status)}`}>
                      {bug.status}
                    </span>
                  </td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      bug.severity === "Critical" ? "bg-red-500 text-white" :
                      bug.severity === "High" ? "bg-orange-400 text-white" :
                      bug.severity === "Medium" ? "bg-yellow-300 text-black" :
                      "bg-green-300 text-black"
                    }`}>
                      {bug.severity}
                    </span>
                  </td>
                  <td>{bug.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
