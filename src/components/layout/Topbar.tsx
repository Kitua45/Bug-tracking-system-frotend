export default function Topbar() {
  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">
      {/* Title / Logo */}
      <h1 className="text-xl font-semibold text-gray-700">Admin Panel</h1>

      {/* Right-side controls */}
      <div className="flex items-center gap-4">
        {/* Search input */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
        </div>

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            🔔
            <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white px-1 rounded-full">
              3
            </span>
          </button>
        </div>

        {/* User info */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="font-medium text-gray-700">Admin</span>
        </div>
      </div>
    </div>
  );
}

