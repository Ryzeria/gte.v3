"use client";
import { Activity, BarChart3, Timer } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const data = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 600 },
  { month: "Apr", value: 800 },
  { month: "May", value: 500 },
  { month: "Jun", value: 700 },
];

const lineData = [
  { name: "Jan", water_level: 600, tide: 400 },
  { name: "Feb", water_level: 650, tide: 450 },
  { name: "Mar", water_level: 700, tide: 500 },
  { name: "Apr", water_level: 680, tide: 480 },
  { name: "May", water_level: 720, tide: 520 },
  { name: "Jun", water_level: 750, tide: 550 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Active Devices Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Devices</p>
              <h3 className="text-2xl font-bold mt-2">24</h3>
              <p className="text-sm text-green-600 mt-1">
                <span className="font-medium">↑ 12%</span> vs last month
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-full">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Data Points Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Data Points</p>
              <h3 className="text-2xl font-bold mt-2">145,281</h3>
              <p className="text-sm text-green-600 mt-1">
                <span className="font-medium">↑ 8%</span> vs last month
              </p>
            </div>
            <div className="bg-purple-50 p-3 rounded-full">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Uptime Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">System Uptime</p>
              <h3 className="text-2xl font-bold mt-2">99.9%</h3>
              <p className="text-sm text-green-600 mt-1">
                <span className="font-medium">↑ 0.2%</span> vs last month
              </p>
            </div>
            <div className="bg-green-50 p-3 rounded-full">
              <Timer className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Data Collection Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-6">Monthly Data Collection</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Water Level & Tide Trends */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-6">Water Level & Tide Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="water_level" 
                  stroke="#4F46E5" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="tide" 
                  stroke="#10B981" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}