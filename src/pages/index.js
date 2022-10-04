import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useState} from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import OfferSection from "../components/Offer";
import ContactForm from "../components/ContactForm";
import TextSection from "../components/TextSection";

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
