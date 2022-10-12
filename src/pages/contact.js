import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {useLayoutEffect, useState} from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ContactForm from "../components/Contact/ContactForm";
import ContactSection from "../components/Contact";
import TextSection from "../components/TextSection";
import ContactMap from "../components/Contact/ContactMap";
import {backgroundOtherImg} from "../assets";

const ContactPage = () => {
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
            <Navbar toggle={toggle} activePage={'/contact'}/>
            <HeroSection height={'600px'}
                         imgSrc={backgroundOtherImg}
                         title={'Skontaktuj Się Z Nami'}
                         subtitle={'Zapraszamy do poniższych form kontaktu'}
                         btnVisibility={false}/>
            <ContactSection/>
            <TextSection title={'Zapraszamy do '}
                         titleSpan={'kontaktu'}
                         subtitle={'Wypełnij formularz za pośrednictwem strony, a skontaktujemy sie z tobą najszybciej, jak to możliwe'}
            />
            <ContactForm/>
            <ContactMap/>
            <Footer/>
        </>
    );
}

export default ContactPage;
