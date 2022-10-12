import {ContactMapContainer} from "./ContactMapElements";

const ContactMap = () => {

    return (
        <ContactMapContainer id="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9992.590010423757!2d22.6032457!3d51.2347783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472256e68eabdc3d%3A0x1cfb76b1761e9114!2sAnny%20Walentynowicz%209%2C%2020-328%20Lublin!5e0!3m2!1sen!2spl!4v1665595327171!5m2!1sen!2spl"
                width="100%" height="500px" frameBorder="0" style={{border: '0'}} allowFullScreen/>
        </ContactMapContainer>
    );
}

export default ContactMap;
