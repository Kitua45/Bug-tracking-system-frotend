export default function Comments() {
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

  const bugs = [
    "Login button not working",
    "App crashes on signup",
    "Incorrect total in dashboard",
    "Missing email notifications",
    "Data not saving correctly",
  ];

  const comments = [
    {
      id: 1,
      text: "Login button issue occurs only on mobile.",
      user: users[0],
      bug: bugs[0],
      createdDate: "2025-11-01",
    },
    {
      id: 2,
      text: "Signup crash fixed in latest build.",
      user: users[4],
      bug: bugs[1],
      createdDate: "2025-11-02",
    },
    {
      id: 3,
      text: "Dashboard totals need recalculation logic.",
      user: users[6],
      bug: bugs[2],
      createdDate: "2025-11-03",
    },
    {
      id: 4,
      text: "Email notifications are now triggering correctly.",
      user: users[2],
      bug: bugs[3],
      createdDate: "2025-11-04",
    },
    {
      id: 5,
      text: "Data save issue persists for large files.",
      user: users[9],
      bug: bugs[4],
      createdDate: "2025-11-05",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-[#054003] tracking-tight">
        Comments
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
        <table className="table w-full">
          <thead className="bg-[#148C0F] text-white text-sm">
            <tr>
              <th className="rounded-l-xl">ID</th>
              <th>Comment</th>
              <th>User</th>
              <th>Bug</th>
              <th className="rounded-r-xl">Date</th>
            </tr>
          </thead>

          <tbody>
            {comments.map((comment) => (
              <tr
                key={comment.id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                <td className="font-semibold">{comment.id}</td>

                <td className="max-w-md text-gray-700">{comment.text}</td>

                <td>
                  <span className="px-3 py-1 rounded-lg text-sm bg-[#2ABF24]/15 text-[#054003] font-medium">
                    {comment.user}
                  </span>
                </td>

                <td>
                  <span className="px-3 py-1 rounded-lg text-sm bg-[#BF0F1E]/10 text-[#590202] font-medium">
                    {comment.bug}
                  </span>
                </td>

                <td className="text-gray-600">
                  {new Date(comment.createdDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
