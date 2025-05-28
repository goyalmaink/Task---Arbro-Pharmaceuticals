import React from 'react';
import { TestTube, Moon, Sun } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80 backdrop-blur-md border-white/20'} border-b shadow-lg sticky top-0 z-50`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <TestTube className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YLIMS
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Laboratory Information Management System
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className={`text-larger ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Welcome, Dr. Goel
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
