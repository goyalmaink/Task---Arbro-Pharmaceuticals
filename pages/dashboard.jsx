import React, { useState, useEffect } from 'react';
import Header from "../component/Header";
import Controls from '../component/Control';
import SampleModal from '../component/SampleModel';
import SamplesTable from '../component/table';
import StatusBadge from '../component/StatusBadge';
import StatsCards from '../component/StatsCard';
import { AnimationPagination } from './Animation';
const initialSamples = [
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
    },
    {
        id: '006',
        name: 'Ankit Sharma',
        type: 'Tissue',
        collectedOn: '2024-05-25',
        status: 'Pending',
        description: 'Routine tissue work for patient screening'
    },
    {
        id: '007',
        name: 'Rohan Singh',
        type: 'Urine',
        collectedOn: '2024-05-25',
        status: 'Processing',
        description: 'Routine urine work for patient screening'
    },
    {
        id: '008',
        name: 'Sahil Verma',
        type: 'Blood',
        collectedOn: '2024-05-25',
        status: 'Completed',
        description: 'Routine blood work for patient screening'
    },
    {
        id: '009',
        name: 'Aarav Mehta',
        type: 'Tissue',
        collectedOn: '2024-05-25',
        status: 'Pending',
        description: 'Routine tissue work for patient screening'
    },
    {
        id: '010',
        name: 'Vansh Kapoor',
        type: 'Urine',
        collectedOn: '2024-05-25',
        status: 'Processing',
        description: 'Routine urine work for patient screening'
    },
    {
        id: '011',
        name: 'Arjun Yadav',
        type: 'Blood',
        collectedOn: '2024-05-25',
        status: 'Completed',
        description: 'Routine blood work for patient screening'
    },
    {
        id: '012',
        name: 'Rahul Jain',
        type: 'Tissue',
        collectedOn: '2024-05-25',
        status: 'Pending',
        description: 'Routine tissue work for patient screening'
    }
];

const YLIMSDashboard = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [samples, setSamples] = useState(initialSamples);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [sortBy, setSortBy] = useState('date');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingSample, setEditingSample] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const samplesPerPage = 5;
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filterStatus, sortBy]);

    const openAddModal = () => {
        setEditingSample(null);
        setModalOpen(true);
    };

    const openEditModal = (sample) => {
        setEditingSample(sample);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const saveSample = (sample) => {
        if (editingSample) {
            setSamples(prev => prev.map(s => s.id === sample.id ? sample : s));
        } else {
            setSamples(prev => [sample, ...prev]);
        }
        closeModal();
    };

    const deleteSample = (id) => {
        if (confirm('Are you sure you want to delete this sample?')) {
            setSamples(prev => prev.filter(s => s.id !== id));
        }
    };

    const filteredSamples = samples
        .filter(s => {
            const matchSearch =
                s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                s.id.toLowerCase().includes(searchTerm.toLowerCase());
            const matchStatus = filterStatus === 'all' || s.status === filterStatus;
            return matchSearch && matchStatus;
        })
        .sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'date') {
                return new Date(b.collectedOn) - new Date(a.collectedOn);
            }
            return 0;
        });

    
    const totalPages = Math.ceil(filteredSamples.length / samplesPerPage);
    const paginatedSamples = filteredSamples.slice(
        (currentPage - 1) * samplesPerPage,
        currentPage * samplesPerPage
    );


    const handleStatusChange = (id, newStatus) => {
        setSamples(prev =>
            prev.map(sample =>
                sample.id === id ? { ...sample, status: newStatus } : sample
            )
        );
    }
    // const statusOptions = ['Pending', 'Processing', 'Completed'];

    return (
        // <div className={`min-h-screen w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>

        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition-colors duration-300`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="max-w-7xl mx-auto px-6 py-8">
                <StatsCards samples={samples} darkMode={darkMode} />
                <Controls
                    darkMode={darkMode}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    onAdd={openAddModal}
                />
                <SamplesTable
                    samples={paginatedSamples}
                    darkMode={darkMode}
                    onEdit={openEditModal}
                    onDelete={deleteSample}
                    onStatusChange={handleStatusChange}
                />
                <AnimationPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                darkMode={darkMode}></AnimationPagination>
            </main>

            <SampleModal
                isOpen={modalOpen}
                onClose={closeModal}
                onSave={saveSample}
                darkMode={darkMode}
                initialData={editingSample}
            />
        </div>
    );
};

export default YLIMSDashboard;
