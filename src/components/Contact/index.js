import './styles.css';

const ContactSection = () => {

    return (
        <div className="contact-information">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-item">
                            <i className="fa fa-phone"/>
                            <h4>Telefon</h4>
                            <p>Zadzwoń do nas na poniższy<br/>numer telefonu</p>
                            <a href="tel:+48-123-456-789">123 456 789</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-item">
                            <i className="fa fa-envelope"/>
                            <h4>Adres e-mail</h4>
                            <p>Wyślij wiadomość na podany adres<br/>e-mail, a my skontaktujemy się z Tobą</p>
                            <a href="mailto:letscode@op.pl">xyz@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-item">
                            <i className="fa fa-map-marker"/>
                            <h4>Biuro</h4>
                            <p>Odwiedź nas w naszym biurze<br/>Walentynowicz 9, 20-328 Lublin</p>
                            <a href="https://goo.gl/maps/QVwM2BSrq29jACzs9" target='_blank'>Zobacz na Google Maps</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
