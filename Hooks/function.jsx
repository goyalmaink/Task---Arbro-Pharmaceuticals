import { useState } from "react";
import { DATA_SAMPLE } from "../utlis /data"

export const useAlgorithm = () => {
    const [filterStatus, setfilterStatus] = useState('all')
    const [sort, setSortBy] = useState('date')
    const [data, setData] = useState(DATA_SAMPLE)
    const [searching, setSearching] = useState('');


    const filtered_data =
        data.filter(data => data.name.toLowerCase().includes(searching.toLowerCase()) ||
            data.id.toLowerCase().includes(searching.toLowerCase()))

            .filter(items => filterStatus === 'all' || items.status === filterStatus)
            .sort((a, b) => {
                if (sort === 'date') return new Date(b.collectedOn) - new Date(a.collectedOn)
                if (sort === 'name') return a.name.localeCompare(b.name);
                return 0;
            })

    const addData = (sampleData) => {
        const newId = 'S' + String(data.length + 1).padStart(3, '0');
        setData([...data, { ...sampleData, id: newId }])
    }

    const updateData = (id, sampleData) => {
        setData(data.map(s => s.id === id ? { ...sampleData, id } : s))
    }

    return {
        filtered_data,
        addData,
        updateData,
        setfilterStatus,
        setSortBy,
        setSearching
    };
}
