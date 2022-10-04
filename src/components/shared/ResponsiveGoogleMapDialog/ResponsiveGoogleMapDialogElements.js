import styled from "styled-components";
import Dialog from "@mui/material/Dialog";

export const GoogleMapWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
`;

export const GoogleMapLocationHref = styled.a`
  cursor: pointer;
  color: black;
  font-size: 15px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;

export const GoogleMapDialog = styled(Dialog)`
  @media (max-width: 992px) {
    height: 50% !important;
    top: 25% !important;
  }
`;
