import React, { useState } from 'react';

const STATUS_OPTIONS = ['Pending', 'Processing', 'Completed'];

const StatusBadge = ({ status, onStatusChange }) => {
  const [editing, setEditing] = useState(false);

  const getStatusColor = () => {
    switch (status) {
      case 'Completed': return 'bg-emerald-500';
      case 'Processing': return 'bg-amber-500';
      case 'Pending': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (editing) {
    return (
      <select
        value={status}
        onChange={e => {
          setEditing(false);
          onStatusChange && onStatusChange(e.target.value);
        }}
        onBlur={() => setEditing(false)}
        autoFocus
        className="px-2 py-1 rounded-full text-xs font-semibold"
      >
        {STATUS_OPTIONS.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    );
  }

  const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold text-white cursor-pointer";
  return (
    <span
      className={`${baseClasses} ${getStatusColor()}`}
      onClick={() => onStatusChange && setEditing(true)}
      title="Click to change status"
    >
      {status}
    </span>
  );
};

export default StatusBadge;