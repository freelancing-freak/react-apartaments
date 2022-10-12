import React from 'react';
import {OfferCol, OfferColFooter, OfferColHeader, OfferColImg, OfferContainer} from "./OfferListElements";
import ResponsiveGoogleMapDialog from "../../shared/ResponsiveGoogleMapDialog";
import {CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";

const OfferList = ({apartments, loading}) => {

    if (loading) {
        return <div style={{display: 'flex', justifyContent: 'center', margin: '50px 0 50px 0'}}>
            <CircularProgress color="success"/>
        </div>
    }

    return <OfferContainer>
        {apartments.map(apartment => (
            <Link to={'/offer/' + apartment.id} state={{apartment: apartment}}>
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
            </Link>
        ))}
    </OfferContainer>;
}

export default OfferList;
