import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/Landing/LandingPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import UserDashboard from "./pages/Landing/UserDashboard"; // User dashboard

import Dashboard from "./pages/Dashboard"; //admin dashboard
import Projects from "./pages/Projects";
import Bugs from "./pages/Bugs";
import Users from "./pages/Users";
import Comments from "./pages/Comments";

import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Dashboard Pages */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/bugs" element={<Layout><Bugs /></Layout>} />
        <Route path="/users" element={<Layout><Users /></Layout>} />
        <Route path="/comments" element={<Layout><Comments /></Layout>} />

        {/* User Dashboard Page */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}
