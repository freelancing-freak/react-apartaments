import React from "react";
import './styles.css';

const Pagination = ({totalPages, currentPage, paginate}) => {

    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="demo">
            <nav className="pagination-outer" aria-label="Page navigation">
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
                            <a onClick={() => paginate(number)} className='page-link'>
                                {number + 1}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
