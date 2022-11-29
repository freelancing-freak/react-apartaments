import styled from "styled-components";
import {Container} from "react-bootstrap";
import {MdKeyboardBackspace} from "react-icons/md";
import {Link} from "react-router-dom";

export const OfferDetailsContainer = styled(Container)`
  display: flex;
  gap: 2rem;
  max-width: 80%;
  margin: 7rem auto 3rem auto;

  @media (max-width: 1249px) {
    display: inherit;
  }

  @media (max-width: 767px) {
    max-width: 95%;
  }
`;

export const OfferDetailsContent = styled.section`
  max-width: 60rem;
  margin-bottom: 1rem;
`;

export const OfferDetailsBackBtn = styled.a`
  color: black;
  font-weight: bold;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const OfferDetailsBackLink = styled(Link)`
  color: black;
  font-weight: bold;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const ArrowLeft = styled(MdKeyboardBackspace)`
  margin-left: 8px;
  font-size: 30px;
`;

export const OfferDetailsTextHeader = styled.p`
  letter-spacing: 0.5px;
  font-size: 20px;
  line-height: 24px;
`;

export const OfferDetailsDate = styled.p`
  font-family: Geomanist, Arial, sans-serif;
  line-height: 16px;
  font-size: 12px;
  padding-top: 15px;
  padding-bottom: 10px;
  margin: 0;
`;

export const OfferDetailsPrice = styled.p`
  font-size: 24px;
  line-height: 26px;
  font-weight: bold;
  margin: 0;
  padding-bottom: 8px;
`;

export const OfferDetailsTagWrapper = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const OfferDetailsTag = styled.li`
  align-items: center;
  padding: 16px 16px 0;
  margin: 8px 8px 8px 0;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.55);
  color: rgba(0, 0, 0, 0.55);
  font-weight: bold;
  text-transform: uppercase;
`;

export const OfferDetailsLocationWrapper = styled.div`
  padding-bottom: 8px;

  i {
    font-size: 20px;
  }

  span {
    font-weight: bold;
  }
`;

export const OfferDetailsShowMoreButton = styled.div`
  display: inline-flex;
  font-size: 16px;
  line-height: 22px;
  margin: 0;
  padding: 8px 11px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #eee;
  border: 1px solid #eee;
`;
