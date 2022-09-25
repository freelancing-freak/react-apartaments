import {animateScroll as scroll} from "react-scroll";
import './styles.css';
import {Container} from "react-bootstrap";
import {ContainerWrapper} from "./FooterElements";

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <ContainerWrapper>
                <Container>
                    <footer className="footer-distributed">
                        <div className="footer-left">
                            <p className="footer-company-about">
                                <span>O nas</span>
                                <strong>Lorem Ipsum </strong>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s
                            </p>
                            <div className="footer-icons">
                                <a href="#"><i className="fa fa-facebook"/></a>
                                <a href="#"><i className="fa fa-instagram"/></a>
                                <a href="#"><i className="fa fa-linkedin"/></a>
                                <a href="#"><i className="fa fa-twitter"/></a>
                                <a href="#"><i className="fa fa-youtube"/></a>
                            </div>
                        </div>
                        <div className="footer-center">
                            <span>Skontaktuj się</span>
                            <div>
                                <i className="fa fa-map-marker"/>
                                <p style={{fontSize: '13px'}}><a href='https://goo.gl/maps/QVwM2BSrq29jACzs9' target='_blank'>Walentynowicz 9, 20-328 Lublin</a></p>
                            </div>
                            <div>
                                <i className="fa fa-phone"/>
                                <p><a href='tel:+48-123-456-789'>+48 123 456 789</a></p>
                            </div>
                            <div>
                                <i className="fa fa-envelope"/>
                                <p><a href="mailto:letscode@op.pl">xyz@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="footer-right">
                            <span>Dodatkowe strony</span>
                            <p className="footer-links">
                                <a href='#' onClick={toggleHome}>Strona główna</a>
                                <a href="#">O nas</a>
                                <a href="#">Kontakt</a>
                                <a href="#">Polityka prywatności</a>
                            </p>
                            <p className="footer-company-name">Apartments © {new Date().getFullYear()} Wszystkie prawa zastrzeżone.</p>
                        </div>
                    </footer>
                </Container>
            </ContainerWrapper>
        </>
    );
}

export default Footer;
