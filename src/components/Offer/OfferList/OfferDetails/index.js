import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css';
import ImageGallery from 'react-image-gallery';
import {
    OfferDetailsContainer,
    OfferDetailsContent,
    OfferDetailsDate,
    OfferDetailsLocationWrapper,
    OfferDetailsPrice,
    OfferDetailsShowMoreButton,
    OfferDetailsTag,
    OfferDetailsTagWrapper,
    OfferDetailsTextHeader
} from "./OfferDetailsElements";
import {matches} from "@testing-library/jest-dom/dist/utils";

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
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches)
    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener('change', e => setMatches(e.matches));
    }, []);

    const text = apartment.description;

    return (
        <>
            <OfferDetailsContainer id='wrapper'>
                <OfferDetailsContent>
                    {matches && <ImageGallery items={images}
                                              lazyload={true}
                                              showPlayButton={false}
                                              autoPlay={true}
                                              thumbnailPosition={'right'}/>}
                    {!matches && <ImageGallery items={images}
                                               lazyload={true}
                                               showPlayButton={false}
                                               autoPlay={true}
                                               thumbnailPosition={'bottom'}/>}
                    <OfferDetailsDate>Dodane 28 października 2022</OfferDetailsDate>
                    <OfferDetailsPrice>{apartment.price} €</OfferDetailsPrice>
                    <OfferDetailsTextHeader>{apartment.name}</OfferDetailsTextHeader>
                    <OfferDetailsLocationWrapper>
                        <i className="fa fa-map-marker"/>
                        <span>&nbsp;{apartment.location}</span>
                    </OfferDetailsLocationWrapper>
                    <OfferDetailsTagWrapper>
                        <OfferDetailsTag>{apartment.measurement} M<sup>2</sup></OfferDetailsTag>
                        <OfferDetailsTag><p>{apartment.numberOfRooms} pokoje</p></OfferDetailsTag>
                    </OfferDetailsTagWrapper>
                    <br/>
                    <OfferDetailsTextHeader>Opis</OfferDetailsTextHeader>
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
                                <OfferDetailsShowMoreButton onClick={() => setShowMore(!showMore)}>
                                    {showMore ? 'Skróć opis' : 'Zobacz więcej'}
                                </OfferDetailsShowMoreButton>
                            </h6>
                    }
                    <br/>
                    <OfferDetailsTextHeader>Lokalizacja</OfferDetailsTextHeader>
                    <hr/>
                    <iframe src={apartment.locationSrc}
                            width="100%"
                            height="500px"
                            frameBorder="0"
                            style={{border: '0'}} allowFullScreen/>
                </OfferDetailsContent>
                <aside className="form-contact">
                    <h2>Skontaktuj się</h2>
                    <input type="text" className="field" placeholder="Imię"/>
                    <input type="text" className="field" placeholder="Telefon"/>
                    <textarea placeholder="Wiadomość" value='Dzień dobry, zainteresowała mnie ta oferta.'
                              className="field"/>
                    <button className="btn">Wyślij</button>
                </aside>
            </OfferDetailsContainer>
        </>
    );
}

export default OfferDetails;
