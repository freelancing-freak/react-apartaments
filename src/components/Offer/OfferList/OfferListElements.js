import styled from "styled-components";
import {Container} from "react-bootstrap";

export const OfferContainer = styled(Container)`
  margin-top: 80px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  padding: 10px;

  @media (max-width: 992px) {
    grid-template-columns: auto;
    grid-gap: 20px;
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
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p:first-child span {
    color: rgba(0, 0, 0, 0.26);
    font-weight: 600;
  }
`;
