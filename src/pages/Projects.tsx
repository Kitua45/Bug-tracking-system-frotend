export default function Projects() {
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

  const projects = [
    {
      id: 1,
      title: "Bug Tracker System",
      description: "Track bugs and manage projects efficiently.",
      assignedUsers: [users[0], users[1]],
      status: "In Progress",
      startDate: "2025-10-01",
      endDate: "2025-12-31",
    },
    {
      id: 2,
      title: "Kenya Sentinel App",
      description: "Citizen safety and incident reporting platform.",
      assignedUsers: [users[4], users[3]],
      status: "Completed",
      startDate: "2025-07-15",
      endDate: "2025-10-01",
    },
    {
      id: 3,
      title: "Hospital CMS",
      description: "Content management system for hospital records.",
      assignedUsers: [users[2], users[5]],
      status: "In Progress",
      startDate: "2025-09-01",
      endDate: "2025-12-15",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Data analytics platform for business insights.",
      assignedUsers: [users[6], users[7]],
      status: "Pending",
      startDate: "2025-11-01",
      endDate: "2026-02-28",
    },
    {
      id: 5,
      title: "Project Alpha",
      description: "Internal testing project for development team.",
      assignedUsers: [users[8], users[9]],
      status: "In Progress",
      startDate: "2025-08-15",
      endDate: "2025-11-30",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Pending":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#054003]">Projects</h1>

      <div className="overflow-x-auto bg-white p-6 shadow rounded-2xl border border-gray-100">
        <table className="table w-full">
          <thead className="bg-[#148C0F] text-white text-sm">
            <tr>
              <th className="rounded-l-lg">ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Assigned Users</th>
              <th>Status</th>
              <th>Start Date</th>
              <th className="rounded-r-lg">End Date</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50 transition-all duration-200">
                <td className="font-semibold">{project.id}</td>
                <td className="font-medium">{project.title}</td>
                <td className="text-gray-600 max-w-xs">{project.description}</td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {project.assignedUsers.map((user, i) => (
                      <span
                        key={i}
                        className="bg-[#E6F4EA] text-[#054003] px-2 py-1 rounded-full text-sm font-medium"
                      >
                        {user}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </td>
                <td className="text-gray-600">{project.startDate}</td>
                <td className="text-gray-600">{project.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
