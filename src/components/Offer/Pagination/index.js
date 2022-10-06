import React from "react";

const Pagination = ({totalPages, paginate}) => {

    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;
