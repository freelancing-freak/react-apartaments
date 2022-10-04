import React from 'react';
import {Col} from "react-bootstrap";
import {OfferColFooter, OfferColHeader, OfferColImg, OfferContainer} from "./OfferListElements";

const OfferList = ({list}) => (
    <OfferContainer>
        {list.map((item) => (
            <Col>
                <OfferColImg src={item.img} alt=''/>
                <OfferColHeader>
                    <h6>{item.title}</h6>
                </OfferColHeader>
                <OfferColFooter>
                    <p>
                        <a href='#'>
                            <i className="fa fa-map-marker"/>
                            <b>&nbsp;{item.location.title}</b>
                        </a>
                    </p>
                </OfferColFooter>
                <OfferColFooter>
                    <h6>{item.measurement} M<sup>2</sup>,&nbsp;{item.numberOfRooms} pokoje</h6>
                    <h6 className='price'>{item.price}<span> €</span></h6>
                </OfferColFooter>
            </Col>
        ))}
    </OfferContainer>
);

export default OfferList;
