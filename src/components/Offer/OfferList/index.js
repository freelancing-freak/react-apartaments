import React from 'react';
import {OfferCol, OfferColFooter, OfferColHeader, OfferColImg, OfferContainer, OfferLink} from "./OfferListElements";
import ResponsiveGoogleMapDialog from "../../shared/ResponsiveGoogleMapDialog";

const OfferList = ({apartments}) => {
    return <OfferContainer>
        {apartments.map(apartment => (
            <OfferCol key={apartment.id}>
                <OfferLink to={'/offer/' + apartment.id} state={{apartment: apartment}}>
                    <OfferColImg src={apartment.mainImage} alt=''/>
                    <OfferColHeader>
                        <h6>{apartment.name}</h6>
                    </OfferColHeader>
                </OfferLink>
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
