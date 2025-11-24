import { useState } from "react";

interface SignupForm {
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  role_user: string;
}

export default function Signup() {
  const [form, setForm] = useState<SignupForm>({
    first_name: "",
    last_name: "",
    email: "",
    password_hash: "",
    role_user: "",
  });

  // handle input + select change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle form submit (no backend)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FORM DATA:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="border p-3 rounded w-full"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="border p-3 rounded w-full"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-3 rounded w-full"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password_hash"
            placeholder="Password"
            className="border p-3 rounded w-full"
            onChange={handleChange}
            required
          />

          <select
            name="role_user"
            className="border p-3 rounded w-full"
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="developer">Developer</option>
            <option value="tester">Tester</option>
            <option value="MLops">MLops</option>
            <option value="QA">QA</option>
          </select>

          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already registered?{" "}
          <a
            href="/login"
            className="text-[#148C0F] font-semibold hover:text-[#1AB91F] transition-colors"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
