import React from 'react';
import {OfferCol, OfferColFooter, OfferColHeader, OfferColImg, OfferContainer} from "./OfferListElements";
import ResponsiveGoogleMapDialog from "../../shared/ResponsiveGoogleMapDialog";

const OfferList = ({list}) => (
    <OfferContainer>
        {list.map((item) => (
            <OfferCol>
                <OfferColImg src={item.img} alt=''/>
                <OfferColHeader>
                    <h6>{item.title}</h6>
                </OfferColHeader>
                <OfferColFooter>
                    <ResponsiveGoogleMapDialog title={item.title}
                                               location={item.location.title}
                                               iframeSrc={item.location.iframeSrc}
                    />
                </OfferColFooter>
                <OfferColFooter>
                    <h6>{item.measurement} M<sup>2</sup>,&nbsp;{item.numberOfRooms} pokoje</h6>
                    <h6 className='price'>{item.price}<span> €</span></h6>
                </OfferColFooter>
            </OfferCol>
        ))}
    </OfferContainer>
);

export default OfferList;
