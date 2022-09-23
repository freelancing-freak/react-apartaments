import React from 'react';
import {Col} from "react-bootstrap";
import {OfferColFooter, OfferColHeader, OfferColImg, OfferContainer} from "./OfferListElements";

const OfferList = ({list}) => (
    <OfferContainer>
        {list.map((item) => (
            <Col>
                <OfferColImg src={item.coverSrc} alt=''/>
                <OfferColHeader>
                    <h6>{item.title}</h6>
                </OfferColHeader>
                <OfferColFooter>
                    <p>
                        <b>{item.serviceTime}</b> <span> Delivery Fee ${item.deliveryFee}</span>
                    </p>
                    <p>
                        <b>€{item.price}</b>
                    </p>
                </OfferColFooter>
            </Col>
        ))}
    </OfferContainer>
);

export default OfferList;
