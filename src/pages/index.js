import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useState} from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import OfferSection from "../components/Offer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <OfferSection id={'offer'}/>
            <Footer/>
        </>
    );
}

export default Home
