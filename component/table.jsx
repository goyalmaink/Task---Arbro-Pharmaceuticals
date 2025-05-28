import React from 'react';
import { Edit, Trash2, TestTube } from 'lucide-react';
import StatusBadge from './StatusBadge';

const SamplesTable = ({ samples, darkMode, onEdit, onDelete,onStatusChange }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white/70 backdrop-blur-sm'} rounded-2xl shadow-lg overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-white/20'}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">Sample ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Collected On</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {samples.map((sample, index) => (
              <tr
                key={sample.id}
                className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-50/50'} transition-colors duration-150 ${index !== samples.length - 1 ? (darkMode ? 'border-b border-gray-700' : 'border-b border-gray-100') : ''
                  }`}
              >
                <td className="px-6 py-4 font-mono text-sm font-semibold text-blue-600">{sample.id}</td>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium">{sample.name}</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate max-w-xs`}>
                      {sample.description}
                    </div>
                  </div>
                </td>
                <td className={`px-6 py-4`}>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    {sample.type}
                  </span>
                </td>
                <td className={`px-6 py-4 font-mono text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {new Date(sample.collectedOn).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge
                    status={sample.status}
                    onStatusChange={newStatus => onStatusChange && onStatusChange(sample.id, newStatus)}
                  />
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => onEdit(sample)}
                    className="p-2 rounded-lg hover:bg-blue-100 text-blue-600 hover:text-blue-700 transition"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(sample.id)}
                    className="p-2 rounded-lg hover:bg-red-100 text-red-600 hover:text-red-700 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {samples.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No samples found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SamplesTable;
