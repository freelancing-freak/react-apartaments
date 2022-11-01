import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css';
import ImageGallery from 'react-image-gallery';
import {H1} from "./OfferDetailsElements";

const OfferDetails = ({apartment}) => {

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    const [showMore, setShowMore] = useState(false);

    let text = apartment.description;
    return (
        <>
            <main className='container'>
                <section className="content">
                    <ImageGallery items={images} lazyload={true} showPlayButton={false} autoPlay={true} showNav={false}
                                  thumbnailPosition={'right'}/>
                    <p className='abc'>
                        Dodane 28 października 2022
                    </p>
                    <p className='price'>
                        {apartment.price} €
                    </p>
                    <H1>{apartment.name}</H1>
                    <div className='location'>
                        <i style={{fontSize: '20px'}} className="fa fa-map-marker"/>
                        <b>&nbsp;{apartment.location}</b>
                    </div>
                    <ul className="css-sfcl1s">
                        <li className="css-ox1ptj"><p className="css-xl6fe0-Text eu5v0x0">
                            <span>{apartment.measurement} M<sup>2</sup></span></p></li>
                        <li className="css-ox1ptj"><p
                            className="css-xl6fe0-Text eu5v0x0">{apartment.numberOfRooms} pokoje</p></li>
                    </ul>
                    <br/>
                    <H1>Opis</H1>
                    <hr/>
                    {
                        text.length <= 250 ?
                            <h6>
                                {text}
                            </h6> :
                            <h6>
                                {showMore ? text : `${text.substring(0, 400)} ...`}
                                <br/>
                                <br/>
                                <button className='btnn' onClick={() => setShowMore(!showMore)}>
                                    {showMore ? 'Skróć opis' : 'Zobacz więcej'}
                                </button>
                            </h6>
                    }
                    <br/>
                    <H1>Lokalizacja</H1>
                    <hr/>
                    <iframe
                        src={apartment.locationSrc}
                        width="100%" height="500px" frameBorder="0" style={{border: '0'}} allowFullScreen/>
                </section>
                <aside className="form-contact">
                    <h2>Skontaktuj się</h2>
                    <input type="text" className="field" placeholder="Imię"/>
                    <input type="text" className="field" placeholder="E-mail"/>
                    <input type="text" className="field" placeholder="Telefon"/>
                    <textarea placeholder="Wiadomość" value='Dzień dobry, zainteresowała mnie ta oferta.'
                              className="field"/>
                    <button className="btn">Wyślij</button>
                </aside>
            </main>
        </>
    );
}

export default OfferDetails;
