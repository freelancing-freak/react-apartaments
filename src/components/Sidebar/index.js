import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>Oferta</SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>O nas</SidebarLink>
                    <SidebarLink to='/contact' onClick={toggle}>Kontakt</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar
