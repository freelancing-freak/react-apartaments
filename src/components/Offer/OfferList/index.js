import React from 'react';
import {OfferCol, OfferColFooter, OfferColHeader, OfferColImg, OfferContainer} from "./OfferListElements";
import ResponsiveGoogleMapDialog from "../../shared/ResponsiveGoogleMapDialog";

const OfferList = ({apartments, loading}) => {

    if (loading) {
        return <h2>Loading ...</h2>;
    }

    return <OfferContainer>
        {apartments.map(apartment => (
            <OfferCol key={apartment.id}>
                <OfferColImg src={apartment.mainImage} alt=''/>
                <OfferColHeader>
                    <h6>{apartment.name}</h6>
                </OfferColHeader>
                <OfferColFooter>
                    <ResponsiveGoogleMapDialog title={apartment.name}
                                               location={apartment.location}
                                               iframeSrc={apartment.locationSrc}
                    />
                </OfferColFooter>
                <OfferColFooter>
                    <h6>{apartment.measurement} M<sup>2</sup>,&nbsp;{apartment.numberOfRooms} pokoje</h6>
                    <h6 className='price'>{apartment.price}<span> €</span></h6>
                </OfferColFooter>
            </OfferCol>
        ))}
    </OfferContainer>;
}

export default OfferList;
