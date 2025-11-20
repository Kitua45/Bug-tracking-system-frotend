export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E6F4EA] px-6">
      <div className="bg-white max-w-md w-full p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-center text-[#054003] mb-6">
          Login
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#148C0F]"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#148C0F]"
          />

          <button className="bg-[#148C0F] text-white py-3 rounded-lg shadow hover:bg-[#1AB91F] transition-colors">
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-[#148C0F] font-semibold hover:text-[#1AB91F] transition-colors"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

