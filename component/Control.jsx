import React from 'react';
import { Search, Plus } from 'lucide-react';

const Controls = ({ darkMode, searchTerm, setSearchTerm, filterStatus, setFilterStatus, sortBy, setSortBy, onAdd }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white/70 backdrop-blur-sm'} p-6 rounded-2xl shadow-lg mb-6 border ${darkMode ? 'border-gray-700' : 'border-white/20'}`}>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 items-center flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`pl-10 pr-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-64`}
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={`px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'} focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
          >
            <option value="all">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Completed">Completed</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'} focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
          >
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>

        <button
          onClick={onAdd}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
        >
          <Plus className="w-5 h-5" />
          <span>Add Sample</span>
        </button>
      </div>
    </div>
  );
};

export default Controls;
