import React from 'react';
import {OfferDetailsContainer} from "./OfferDetailsElements";

const OfferDetails = ({apartment}) => {
    return (
        <OfferDetailsContainer>
            <h1>Hello world! {apartment.id}</h1>
        </OfferDetailsContainer>
    );
}

export default OfferDetails;
