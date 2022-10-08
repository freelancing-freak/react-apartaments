import styled from "styled-components";
import {Col, Container} from "react-bootstrap";

export const OfferContainer = styled(Container)`
  margin-top: 80px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  padding: 10px;

  @media (max-width: 992px) {
    grid-template-columns: auto;
    grid-gap: 20px;
  }
`;

export const OfferCol = styled(Col)`
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 15px;
  
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.1);
    z-index: 3;
    cursor: pointer;
  }
`;

export const OfferColImg = styled.img`
  width: 100%;
  border-radius: 15px;
  height: 200px;
  object-fit: cover;
`;

export const OfferColHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
  align-items: center;
  height: 50px;

  h6 {
    text-transform: uppercase;
  }
`;

export const OfferColFooter = styled.footer`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  .price {
    color: #01bf71;
  }

  h6 {
    color: rgba(0, 0, 0, 0.55);
    font-weight: 600;
    text-transform: uppercase;
  }
`;
