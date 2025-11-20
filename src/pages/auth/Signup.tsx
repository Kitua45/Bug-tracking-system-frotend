export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white max-w-md w-full p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded" />
          <input type="email" placeholder="Email" className="border p-3 rounded" />
          <input type="password" placeholder="Password" className="border p-3 rounded" />

          <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already registered?{" "}
          <a href="/login" className="text-[#148C0F] font-semibold hover:text-[#1AB91F] transition-colors">
  Login
</a>
        </p>
      </div>
    </div>
  );
}
