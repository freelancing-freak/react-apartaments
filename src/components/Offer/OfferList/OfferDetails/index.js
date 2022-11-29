import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css';
import ImageGallery from 'react-image-gallery';
import {
    ArrowLeft,
    OfferDetailsBackBtn,
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

const OfferDetails = ({apartment}) => {

    const images = insertImages(apartment);

    const [scrollToTop, setScrollToTop] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches)
    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener('change', e => setMatches(e.matches));
    }, []);

    const text = apartment.description;

    if (scrollToTop) {
        window.scrollTo({top: 0, behavior: 'instant'});
    }

    return (
        <>
            <OfferDetailsContainer id='wrapper'>
                <OfferDetailsContent>
                    <OfferDetailsBackBtn className='back-btn' onClick={() => window.history.back()}>
                        <OfferDetailsTextHeader><ArrowLeft/> Powrót</OfferDetailsTextHeader>
                    </OfferDetailsBackBtn>
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
                                <OfferDetailsShowMoreButton onClick={() => {
                                    setScrollToTop(false);
                                    setShowMore(!showMore);
                                }}>
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
                    <hr/>
                    <input type="text" className="field" placeholder="Imię"/>
                    <input type="text" className="field" placeholder="Telefon"/>
                    <textarea placeholder="Wiadomość" defaultValue='Dzień dobry, zainteresowała mnie ta oferta.'
                              className="field"></textarea>
                    <button className="btn">Wyślij</button>
                </aside>
            </OfferDetailsContainer>
        </>
    );
}

function insertImages(apartment) {
    let images = [{
        original: apartment.mainImage,
        thumbnail: apartment.mainImage
    }];
    let tempImages = new Set([]);
    for (let i = 0; i < apartment.images.length; i++) {
        if (!tempImages.has(apartment.images[i])) {
            tempImages.add(apartment.images[i]);
            images.push({
                original: apartment.images[i],
                thumbnail: apartment.images[i]
            });
        }
    }
    return images;
}

export default OfferDetails;
