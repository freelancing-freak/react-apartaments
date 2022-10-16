import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import './styles.css';

const OfferDetails = ({apartment}) => {

    window.scrollTo({top: 0, behavior: 'instant'});

    return (
        <>
            <section id='prodetails' className='section-p1'>
                <div className='single-pro-image'>
                    <Carousel autoPlay={true} interval={2500} infiniteLoop={true} className='main-slide'>
                        <div>
                            <img src="https://hosting2279419.online.pro/images/apartment-1.jpeg"/>
                        </div>
                        <div>
                            <img src="https://hosting2279419.online.pro/images/apartment-2.jpeg"/>
                        </div>
                        <div>
                            <img src="https://hosting2279419.online.pro/images/apartment-3.jpeg"/>
                        </div>
                        <div>
                            <img src="https://hosting2279419.online.pro/images/apartment-4.jpeg"/>
                        </div>
                        <div>
                            <img src="https://hosting2279419.online.pro/images/apartment-5.jpeg"/>
                        </div>
                        <div>
                            <img src="https://hosting2279419.online.pro/images/apartment-6.jpeg"/>
                        </div>
                        <div>
                            <img src="https://hosting2279419.online.pro/images/apartment-7.jpeg"/>
                        </div>
                        <div>
                            <img src="https://hosting2279419.online.pro/images/apartment-8.jpeg"/>
                        </div>
                    </Carousel>
                </div>
                <div className='single-pro-details'>
                    <h6>Numer referencyjny: {apartment.id}</h6>
                    <br/>
                    <h4>{apartment.name}</h4>
                    <h2>{apartment.price} €</h2>
                    <h5>{apartment.measurement} M<sup>2</sup>,&nbsp;{apartment.numberOfRooms} pokoje</h5>
                    <h5><i style={{fontSize: '20px'}} className="fa fa-map-marker"/> {apartment.location}</h5>
                    <br/>
                    <h4>Opis</h4>
                    <span>
                        {apartment.description}
                    </span>
                </div>
            </section>
            <section id='proother' className='section-p2'>
                <h4>Lokalizacja</h4>
                <br/>
                <iframe
                    src={apartment.locationSrc}
                    width="100%" height="500px" frameBorder="0" style={{border: '0'}} allowFullScreen/>
            </section>
        </>
    );
}

export default OfferDetails;
