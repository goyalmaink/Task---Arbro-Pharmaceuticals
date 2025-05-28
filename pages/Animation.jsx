import React from 'react';
import { useState } from 'react';

export const AnimationPagination = ({ currentPage, totalPages, onPageChange, darkMode }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    const handlePage = (newPage) => {
        if (newPage === currentPage || isAnimated) return;
        setIsAnimated(true);
        setTimeout(() => {
            onPageChange(newPage);
            setIsAnimated(false);
        }, 150);
    }

    const getVisinPage = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, '...');
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages);
        } else {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    }


    if (totalPages <= 1) return null;

    return (
        <>
            <style jsx>{`
                .pagination-container {
                    transition: all 0.3s ease;
                }
                .pagination-container.animating {
                    transform: scale(0.95);
                    opacity: 0.7;
                }
                .pagination-btn {
                    transition: all 0.2s ease;
                }
                .pagination-btn:hover:not(:disabled) {
                    transform: scale(1.05);
                }
                .page-number {
                    min-width: 40px;
                    height: 40px;
                    transition: all 0.3s ease;
                }
                .page-number:hover:not(.active) {
                    transform: scale(1.1);
                }
                .page-number.active {
                    transform: scale(1.1);
                }
                .chevron-left::before {
                    content: "‹";
                    font-size: 18px;
                    font-weight: bold;
                }
                .chevron-right::before {
                    content: "›";
                    font-size: 18px;
                    font-weight: bold;
                }
            `}</style>

            <div className={`flex items-center justify-center mt-8 pagination-container ${isAnimated ? 'animating' : ''}`}>
                <div className={`flex items-center p-2 rounded-xl shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'
                    }`} style={{ gap: '8px' }}>


                    <button
                        onClick={() => handlePage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`flex items-center px-4 py-2 rounded-lg font-medium pagination-btn ${currentPage === 1
                                ? darkMode
                                    ? 'text-gray-600 bg-gray-700 cursor-not-allowed'
                                    : 'text-gray-400 bg-gray-100 cursor-not-allowed'
                                : darkMode
                                    ? 'text-white bg-gray-700 hover:bg-gray-600'
                                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                            }`}
                        style={{ gap: '8px' }}
                    >
                        <span className="chevron-left"></span>
                        <span className="hidden sm:inline">Previous</span>
                    </button>


                    <div className="flex items-center" style={{ gap: '4px' }}>
                        {getVisinPage().map((page, index) => {
                            if (page === '...') {
                                return (
                                    <span
                                        key={`dots-${index}`}
                                        className={`px-3 py-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                    >
                                        ...
                                    </span>
                                );
                            }

                            const isActive = page === currentPage;
                            return (
                                <button
                                    key={page}
                                    onClick={() => handlePage(page)}
                                    className={`page-number rounded-lg font-medium flex items-center justify-center ${isActive
                                            ? 'bg-blue-500 text-white shadow-lg active'
                                            : darkMode
                                                ? 'text-gray-300 hover:bg-gray-700'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </div>


                    <button
                        onClick={() => handlePage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`flex items-center px-4 py-2 rounded-lg font-medium pagination-btn ${currentPage === totalPages
                                ? darkMode
                                    ? 'text-gray-600 bg-gray-700 cursor-not-allowed'
                                    : 'text-gray-400 bg-gray-100 cursor-not-allowed'
                                : darkMode
                                    ? 'text-white bg-gray-700 hover:bg-gray-600'
                                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                            }`}
                        style={{ gap: '8px' }}
                    >
                        <span className="hidden sm:inline">Next</span>
                        <span className="chevron-right"></span>
                    </button>
                </div>


                <div className={`ml-6 text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    Page <span className="font-semibold text-blue-500">{currentPage}</span> of <span className="font-semibold">{totalPages}</span>
                </div>
            </div>
        </>
    );
};