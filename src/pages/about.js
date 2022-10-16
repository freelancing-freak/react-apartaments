import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useLayoutEffect, useState} from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import {backgroundOtherImg} from "../assets";
import AboutSection from "../components/About";

const AboutPage = () => {
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
            <Navbar toggle={toggle} activePage={'/about'}/>
            <HeroSection height={'600px'}
                         imgSrc={backgroundOtherImg}
                         title={'O nas'}
                         subtitle={'POSIADAMY PONAD 20 LAT DOŚWIADCZENIA'}
                         btnVisibility={false}/>
            <AboutSection/>
            <Footer/>
        </>
    );
}

export default AboutPage;
