import React from "react";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Left - Logo */}
      <div className="flex flex-col items-center space-x-1">
        <span className="text-green-600 font-bold text-lg">Better</span>
        <span className="text-gray-500 text-sm">Mortgage</span>
      </div>

      {/* Middle - Progress Indicator */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          {/* Line */}
          <div className="absolute top-[180%] left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2" />
          {/* Active Step */}
          <div className="relative flex top-[130%] justify-center">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 shadow-lg shadow-green-300 animate-pulse">
              <div className="w-3 h-3 bg-white rounded-sm rotate-45" />
            </div>
          </div>
        </div>
      </div>

      {/* Right - Contact */}
      <div className="hidden sm:flex items-center space-x-2 text-sm">
        <Phone className="w-4 h-4 text-green-600" />
        <span className="text-gray-800 max-md:hidden">
          Need help? <span className="font-semibold">Call 415-523-8837</span>
        </span>
      </div>
    </nav>
  );
}
