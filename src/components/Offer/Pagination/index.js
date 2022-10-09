import React from "react";
import './styles.css';

const Pagination = ({totalPages, currentPage, paginate}) => {

    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>

            <nav className="pagination-outer" aria-label="Page navigation">
                <ul className="pagination">
                    <li className={'page-item'}>
                        <a className='page-link' onClick={() => {
                            if (currentPage === 0) {
                                return;
                            }
                            paginate(currentPage - 1);
                        }}>
                            &lsaquo;
                        </a>
                    </li>
                    {pageNumbers.map(number => (
                        <li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
                            <a onClick={() => paginate(number)} className='page-link'>
                                {number + 1}
                            </a>
                        </li>
                    ))}
                    <li className={'page-item'}>
                        <a className='page-link' onClick={() => {
                            if (currentPage + 1 === pageNumbers.length) {
                                return;
                            }
                            paginate(currentPage + 1);
                        }}>
                            &rsaquo;
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
