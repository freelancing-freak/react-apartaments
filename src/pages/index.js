import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useLayoutEffect, useState} from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import OfferSection from "../components/Offer";
import ContactForm from "../components/Contact/ContactForm";
import TextSection from "../components/TextSection";
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
            <TextSection title={'Zapraszamy do '}
                         titleSpan={'kontaktu'}
                         subtitle={'Wypełnij formularz za pośrednictwem strony, a skontaktujemy sie z tobą najszybciej, jak to możliwe'}
            />
            <ContactForm/>
            <Footer/>
        </>
    );
}

export default Home
