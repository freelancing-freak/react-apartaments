import React from 'react';
import {OfferDetailsContainer} from "./OfferDetailsElements";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import './styles.css';

const OfferDetails = ({apartment}) => {

    window.scrollTo({top: 0, behavior: 'instant'});

    return (
        <OfferDetailsContainer>
            <div className='row'>
                <div className='col-9'>
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
                    </Carousel>
                </div>
                <div className='col-3'>
                    <h1>Contact form!</h1>
                </div>
            </div>
        </OfferDetailsContainer>
    );
}

export default OfferDetails;
