import {FaBars} from "react-icons/fa";
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinkR,
    NavLogo,
    NavMenu
} from "./NavbarElements";
import {useEffect, useState} from "react";
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle, activePage}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Apartments</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinkR to='/'
                                          className={activePage === '/' ? 'active' : ''}>Strona główna</NavLinkR>
                            </NavItem>
                            <NavItem>
                                <NavLinkR to='about'
                                          className={activePage === '/about' ? 'active' : ''}>O nas</NavLinkR>
                            </NavItem>
                            <NavItem>
                                <NavLinkR to='contact'
                                          className={activePage === '/contact' ? 'active' : ''}>Kontakt</NavLinkR>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/login'>Login</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
