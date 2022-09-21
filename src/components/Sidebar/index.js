import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='offer' onClick={toggle}>Oferta</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>O nas</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Kontakt</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute>Login</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar
