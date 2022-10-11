import {Link} from "react-router-dom";
import styled from "styled-components";

import {v} from "../styles/variables";

export const SSidebar = styled.div`
  width: ${({isOpen}) => (!isOpen ? `auto` : v.sidebarWidth)};
  background: ${({theme}) => theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing};

  position: relative;
`;

export const SLogo = styled.div`
  width: 52px;

  img {
    max-width: 100%;
    height: auto;
  }

  cursor: pointer;

  margin-bottom: ${v.lgSpacing};
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({theme}) => theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
  background: ${({theme, isActive}) => (!isActive ? `transparent` : theme.bg3)};
  border-radius: ${v.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({theme}) => theme.bg3};
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`;
