export default function Users() {
  const users = [
    { id: 1, name: "Agnes Mwikali", email: "agnes.mwikali@gmail.com", phone: "0712 345 678", role: "Admin" },
    { id: 2, name: "Brian Kemboi", email: "brian.kemboi@devmail.com", phone: "0798 123 456", role: "Manager" },
    { id: 3, name: "Daisy Mumbi", email: "daisy.mumbi@company.co.ke", phone: "0700 876 543", role: "Developer" },
    { id: 4, name: "John Ochieng", email: "john.ochieng@gmail.com", phone: "0722 333 444", role: "Tester" },
    { id: 5, name: "Mary Kimani", email: "mary.kimani@yahoo.com", phone: "0733 555 666", role: "Developer" },
    { id: 6, name: "Peter Njoroge", email: "peter.njoroge@outlook.com", phone: "0711 777 888", role: "Project Manager" },
    { id: 7, name: "Sharon Wambui", email: "sharon.wambui@gmail.com", phone: "0700 999 000", role: "Developer" },
    { id: 8, name: "Michael Otieno", email: "michael.otieno@company.co.ke", phone: "0799 111 222", role: "Tester" },
    { id: 9, name: "Nancy Akinyi", email: "nancy.akinyi@gmail.com", phone: "0710 444 555", role: "Developer" },
    { id: 10, name: "David Kariuki", email: "david.kariuki@gmail.com", phone: "0721 888 999", role: "Admin" },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 text-red-600";
      case "Manager":
      case "Project Manager":
        return "bg-blue-100 text-blue-600";
      case "Developer":
        return "bg-green-100 text-green-700";
      case "Tester":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#054003]">Users</h1>

      <div className="overflow-x-auto bg-white p-4 shadow rounded-xl border border-gray-100">
        <table className="table w-full">
          <thead className="bg-[#148C0F] text-white">
            <tr>
              <th className="rounded-l-lg">ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="rounded-r-lg">Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 transition">
                <td>{user.id}</td>
                <td className="font-medium">{user.name}</td>
                <td className="text-gray-600">{user.email}</td>
                <td className="text-gray-600">{user.phone}</td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

