"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Waves, 
  Settings, 
  FileBarChart, 
  Database,
  ChevronDown,
  Activity,
  FileText,
  BarChart3
} from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logosaas.png";

const menuItems = [
  {
    title: "Tide Logger",
    icon: <Waves className="w-5 h-5" />,
    submenu: [
      { title: "Dashboard", path: "/dashboard/tide-logger" },
      { title: "Detail Device", path: "/dashboard/tide-logger/detail-device" },
      { title: "Job Specification", path: "/dashboard/tide-logger/job-specification" },
    ],
  },
  {
    title: "Tide Analyzer",
    icon: <Activity className="w-5 h-5" />,
    submenu: [
      { title: "Harmonic Constituent", path: "/dashboard/tide-analyzer/harmonic-constituent" },
      { title: "Tide Prediction", path: "/dashboard/tide-analyzer/tide-prediction" },
      { title: "Vertical Datum", path: "/dashboard/tide-analyzer/vertical-datum" },
    ],
  },
  {
    title: "Tide Report",
    icon: <FileText className="w-5 h-5" />,
    path: "/dashboard/tide-report",
  },
  {
    title: "Tide Acc",
    icon: <BarChart3 className="w-5 h-5" />,
    path: "/dashboard/tide-acc",
  },
];

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={32} height={32} />
          <span className="font-semibold text-gray-900">Geomarine</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          <Link
            href="/dashboard"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive("/dashboard")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Overview
          </Link>

          {menuItems.map((item) => (
            <div key={item.title} className="space-y-1">
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleExpanded(item.title)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      expandedItems.includes(item.title)
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedItems.includes(item.title) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedItems.includes(item.title) && (
                    <div className="pl-10 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive(subItem.path)
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}