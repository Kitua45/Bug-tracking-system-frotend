import React from "react";
import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-64 bg-white shadow-lg" />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar />

        {/* Scrollable content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}

