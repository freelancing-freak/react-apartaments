import OfferList from "./OfferList";
import {useEffect, useState} from "react";
import axios from 'axios';
import Pagination from "./Pagination";

const OfferSection = ({id}) => {

    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalElements, setTotalElements] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageSize] = useState(6);

    useEffect(() => {
        fetchApartments(currentPage).catch((error) => console.log(error))
    }, []);

    const fetchApartments = async (page) => {
        setLoading(true);
        const res = await axios.get('http://localhost:8080/api/apartments?size=' + pageSize + '&page=' + page);
        setApartments(res.data['data']);
        let pagination = res.data['pagination'];
        setCurrentPage(pagination['pageNumber']);
        setTotalElements(pagination['totalElements']);
        setTotalPages(pagination['totalPages']);
        setLoading(false);
    }

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        fetchApartments(pageNumber)
            .then(() => window.scrollTo({top: 780, behavior: 'instant'}))
            .catch((error) => console.log(error))
    }

    return (
        <div id={id}>
            <div>
                <div style={{marginTop: '80px', marginBottom: '-80px'}}>
                    <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate}/>
                </div>
                <OfferList apartments={apartments} loading={loading}/>
                <div style={{marginBottom: '80px'}}>
                    <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate}/>
                </div>
            </div>
        </div>
    );
}

export default OfferSection
