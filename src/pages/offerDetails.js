import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useLayoutEffect, useState} from "react";
import Footer from "../components/Footer";
import OfferDetails from "../components/Offer/OfferList/OfferDetails";
import {useLocation} from "react-router-dom";

const OfferDetailsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useLayoutEffect(() => {
        window.scrollTo({top: 0, behavior: 'instant'})
    });

    const location = useLocation();
    const {apartment} = location.state || {};

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} activePage={'/offer'}/>
            <OfferDetails apartment={apartment}/>
            <Footer/>
        </>
    );
}

export default OfferDetailsPage;
