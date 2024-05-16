import React, { useState, useEffect } from 'react';
import Styles from "./Pagination.module.css";
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';

function Pagination({ totalPages, currentPage, onPageChange }) {

    // const maxVisiblePages = window.innerWidth < 768 ? 3 : 5;

    const [maxVisiblePages, setMaxVisiblePages] = useState(window.innerWidth < 768 ? 3 : 5);

    useEffect(() => {
        const handleResize = () => {
            setMaxVisiblePages(window.innerWidth < 768 ? 3 : 5);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage === totalPages) {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    const visiblePages = Array.from({ length: Math.min(totalPages, maxVisiblePages) }, (_, index) => startPage + index);

    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    return (
        <div className={Styles.pagination}>
            <button
                className={currentPage === 1 ? `${Styles.arrow} ${Styles.arrowLeft} ${Styles.disabled}` : `${Styles.arrow} ${Styles.arrowLeft}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <RiArrowLeftSFill className={Styles.icons} />
            </button>

            {visiblePages.map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={pageNumber === currentPage ? `${Styles.active} ${Styles.button}` : Styles.button}
                    onClick={() => handlePageClick(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}

            <button
                className={currentPage === totalPages ? `${Styles.arrow} ${Styles.arrowRight} ${Styles.disabled}` : `${Styles.arrow} ${Styles.arrowRight}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <RiArrowRightSFill className={Styles.icons} />
            </button>
        </div>
    );
}

export default Pagination;
