import React from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLogo,
    SSidebar
} from "./styles";

import {logoSVG} from "../../../assets";

import {
    AiOutlineHome,
    AiOutlineSetting,
} from "react-icons/ai";
import {MdLogout} from "react-icons/md";
import {useLocation} from "react-router-dom";

const Sidebar = () => {
    const {pathname} = useLocation();

    return (
        <SSidebar>
            <SLogo>
                <img src={logoSVG} alt="logo"/>
            </SLogo>
            {linksArray.map(({icon, label, to}) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to}>
                        <SLinkIcon>{icon}</SLinkIcon>
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider/>
            {secondaryLinksArray.map(({icon, label, to}) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to}>
                        <SLinkIcon>{icon}</SLinkIcon>
                    </SLink>
                </SLinkContainer>
            ))}
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Apartments",
        icon: <AiOutlineHome/>,
        to: "/admin/apartments"
    },
];

const secondaryLinksArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting/>,
        to: "/admin/settings"
    },
    {
        label: "Logout",
        icon: <MdLogout/>,
        to: "/"
    },
];

export default Sidebar;
