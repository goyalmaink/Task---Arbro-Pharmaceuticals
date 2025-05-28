export const SAMPLE_TYPE = [
    'Blood', 'Urine', 'Tissue', 'Saliva', 'Plasma'
]

export const STATUS = [
    'Pending', 'Processing', 'Completed'
]

export const SORT_BY = [
    { value: 'name', label: 'Sort by name' },
    { value: 'date', label: 'Sort by date' }
]
export const FILTER_BY = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'completed', label: 'Completed' }
]

export const DATA_SAMPLE = [
    {
        id: '001',
        name: 'Mayank Goel',
        type: 'Blood',
        collectedOn: '2024-05-25',
        status: 'Processing',
        description: 'Routine blood work for patient screening'
    },
    {
        id: '002',
        name: 'Paanav Puri',
        type: 'Tissue',
        collectedOn: '2024-05-25',
        status: 'Pending',
        description: 'Routine blood work for patient screening'
    }
    ,
    {
        id: '003',
        name: 'Karan Ahuja',
        type: 'Urine',
        collectedOn: '2024-05-25',
        status: 'Completed',
        description: 'Routine urine work for patient screening'
    }, {
        id: '004',
        name: 'Dishant Kapoor',
        type: 'Blood',
        collectedOn: '2024-05-25',
        status: 'Processing',
        description: 'Routine blood work for patient screening'
    },
    {
        id: '005',
        name: 'Mehul Gupta',
        type: 'Blood',
        collectedOn: '2024-05-25',
        status: 'Completed',
        description: 'Routine blood work for patient screening'
    }
]

export const STATUS_COLOR = (status) => {
    switch (status) {
        case 'Completed': return 'bg-emeralf-500';
        case 'Processing': return 'bg-amber-500';
        case 'Pending': return 'bg-red-500';
        default: return 'bg-gray-500';
    }
}

export const getStatusBadge = (status) => {
  const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold text-white";
  return `${baseClasses} ${STATUS_COLOR(status)}`;
};