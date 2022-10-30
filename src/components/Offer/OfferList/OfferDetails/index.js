import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import './styles.css';
import ImageGallery from 'react-image-gallery';
import {Button} from "../../../ButtonElement";

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
        <div className='container'>
            <section id='prodetails' className='section-p1'>
                <div className='single-pro-image'>
                    <h3>{apartment.name}</h3>
                    <ImageGallery items={images} lazyload={true} showPlayButton={false} autoPlay={true} showNav={false} thumbnailPosition={'bottom'}/>
                </div>
            </section>
            <section id='description'>
                <h3>Szczegóły oferty</h3>
                <h2>{apartment.price} €</h2>
                <h5>{apartment.measurement} M<sup>2</sup>,&nbsp;{apartment.numberOfRooms} pokoje</h5>
                <h5><i style={{fontSize: '20px'}} className="fa fa-map-marker"/> {apartment.location}</h5>
                <br/>
                <p style={{fontSize: '14px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                </p>
            </section>
            <section id='proother' className='section-p2'>
                <h3>Lokalizacja</h3>
                <iframe
                    src={apartment.locationSrc}
                    width="100%" height="500px" frameBorder="0" style={{border: '0'}} allowFullScreen/>
            </section>
        </div>
    );
}

export default OfferDetails;
