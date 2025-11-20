import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  FolderIcon,
  BugAntIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

type SidebarProps = {
  className?: string;
};

const menu = [
  { name: "Dashboard", icon: HomeIcon, path: "/dashboard" },
  { name: "Projects", icon: FolderIcon, path: "/projects" },
  { name: "Bugs", icon: BugAntIcon, path: "/bugs" },
  { name: "Users", icon: UsersIcon, path: "/users" },
  { name: "Comments", icon: ChatBubbleLeftRightIcon, path: "/comments" },
];

export default function Sidebar({ className = "" }: SidebarProps) {
  const { pathname } = useLocation();

  return (
    <div className={`bg-white shadow-lg p-5 flex flex-col h-full ${className}`}>
      {/* Logo / Title */}
      <h2 className="text-2xl font-bold mb-8 text-green-700 tracking-wide">
        BugTracker Admin
      </h2>

      {/* Menu */}
      <ul className="flex-1 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`
                  flex items-center gap-3 p-3 rounded-lg transition-colors duration-200
                  ${active ? "bg-green-600 text-white shadow" : "text-gray-700 hover:bg-gray-100 hover:text-green-700"}
                `}
              >
                <Icon className="w-6 h-6" />
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Footer */}
      <div className="mt-auto text-gray-400 text-sm">
        © 2025 BugTracker
      </div>
    </div>
  );
}
