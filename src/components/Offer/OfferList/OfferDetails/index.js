import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css';
import ImageGallery from 'react-image-gallery';
import {OfferDetailsContainer} from "./OfferDetailsElements";

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

    window.scrollTo({top: 0, behavior: 'instant'});
    return (
        <>
            <main>
                <section className="content">
                    <div className="image-gallery">
                        <ImageGallery items={images} lazyload={true} showPlayButton={false} autoPlay={true} showNav={false} thumbnailPosition={'right'}/>
                    </div>
                </section>
                <aside className="form-contact">
                    <h2>Skontaktuj się</h2>
                    <input type="text" className="field" placeholder="Imię"/>
                    <input type="text" className="field" placeholder="E-mail"/>
                    <input type="text" className="field" placeholder="Telefon"/>
                    <textarea placeholder="Wiadomość" value='Dzień dobry, zainteresowała mnie ta oferta.' className="field"/>
                    <button className="btn">Wyślij</button>
                </aside>
            </main>
        </>
    );
}

export default OfferDetails;
