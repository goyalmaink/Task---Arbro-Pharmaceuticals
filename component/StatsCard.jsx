import React from 'react';
import { TestTube, Clock, Calendar } from 'lucide-react';

const StatsCards = ({ samples, darkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card
        darkMode={darkMode}
        title="Total Samples"
        count={samples.length}
        icon={<TestTube className="w-8 h-8 text-blue-600" />}
        textColor="text-blue-600"
      />
      <Card
        darkMode={darkMode}
        title="Processing"
        count={samples.filter(s => s.status === 'Processing').length}
        icon={<Clock className="w-8 h-8 text-amber-600" />}
        textColor="text-amber-600"
      />
      <Card
        darkMode={darkMode}
        title="Completed"
        count={samples.filter(s => s.status === 'Completed').length}
        icon={<Calendar className="w-8 h-8 text-emerald-600" />}
        textColor="text-emerald-600"
      />
    </div>
  );
};

const Card = ({ darkMode, title, count, icon, textColor }) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white/70 backdrop-blur-sm'} p-6 rounded-2xl shadow-lg border ${darkMode ? 'border-gray-700' : 'border-white/20'}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
        <p className={`text-3xl font-bold ${textColor}`}>{count}</p>
      </div>
      {icon}
    </div>
  </div>
);

export default StatsCards;
