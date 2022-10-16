import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useLayoutEffect, useState} from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import OfferSection from "../components/Offer";
import {backgroundImg} from "../assets";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useLayoutEffect(() => {
        window.scrollTo({top: 0, behavior: 'instant'})
    });

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} activePage={'/'}/>
            <HeroSection height={'800px'}
                         imgSrc={backgroundImg}
                         title={'APARTAMENTY NA SPRZEDAŻ'}
                         subtitle={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                         btnVisibility={true}/>
            <OfferSection id={'offer'}/>
            <Footer/>
        </>
    );
}

export default Home
