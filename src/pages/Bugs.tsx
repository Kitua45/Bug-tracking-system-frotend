export default function Bugs() {
  // Users array (same as Users page)
  const users = [
    "Agnes Mwikali",
    "Brian Kemboi",
    "Daisy Mumbi",
    "John Ochieng",
    "Mary Kimani",
    "Peter Njoroge",
    "Sharon Wambui",
    "Michael Otieno",
    "Nancy Akinyi",
    "David Kariuki",
  ];

  // Projects array (same as Projects page)
  const projects = [
    "Bug Tracker System",
    "Kenya Sentinel App",
    "Hospital CMS",
    "Analytics Dashboard",
    "Project Alpha",
  ];

  // Dummy bugs data
  const bugs = [
    {
      id: 1,
      title: "Login button not working",
      project: projects[0],
      assignedUser: users[0],
      severity: "High",
      status: "Open",
      createdDate: "2025-11-01",
      updatedDate: "2025-11-05",
    },
    {
      id: 2,
      title: "App crashes on signup",
      project: projects[1],
      assignedUser: users[4],
      severity: "Critical",
      status: "In Progress",
      createdDate: "2025-10-20",
      updatedDate: "2025-11-02",
    },
    {
      id: 3,
      title: "Incorrect total in dashboard",
      project: projects[3],
      assignedUser: users[6],
      severity: "Medium",
      status: "Open",
      createdDate: "2025-11-03",
      updatedDate: "2025-11-06",
    },
    {
      id: 4,
      title: "Missing email notifications",
      project: projects[2],
      assignedUser: users[2],
      severity: "Low",
      status: "Resolved",
      createdDate: "2025-10-25",
      updatedDate: "2025-11-04",
    },
    {
      id: 5,
      title: "Data not saving correctly",
      project: projects[4],
      assignedUser: users[9],
      severity: "High",
      status: "In Progress",
      createdDate: "2025-11-02",
      updatedDate: "2025-11-07",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#054003]">Bugs</h1>

      <div className="overflow-x-auto bg-white p-4 shadow rounded-xl">
        <table className="table w-full">
          <thead className="bg-[#148C0F] text-white">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Project</th>
              <th>Assigned User</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Updated Date</th>
            </tr>
          </thead>

          <tbody>
            {bugs.map((bug) => (
              <tr key={bug.id} className="hover:bg-gray-100">
                <td>{bug.id}</td>
                <td>{bug.title}</td>
                <td>{bug.project}</td>
                <td>{bug.assignedUser}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-lg text-sm ${
                      bug.severity === "Critical"
                        ? "bg-red-500 text-white"
                        : bug.severity === "High"
                        ? "bg-orange-400 text-white"
                        : bug.severity === "Medium"
                        ? "bg-yellow-300 text-black"
                        : "bg-green-300 text-black"
                    }`}
                  >
                    {bug.severity}
                  </span>
                </td>
                <td>{bug.status}</td>
                <td>{bug.createdDate}</td>
                <td>{bug.updatedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

