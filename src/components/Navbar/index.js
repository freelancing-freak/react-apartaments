import {FaBars} from "react-icons/fa";
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu
} from "./NavbarElements";
import {useEffect, useState} from "react";
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {
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
                                <NavLinks to='offer'
                                          smooth={true}
                                          duration={50}
                                          spy={true}
                                          exact='true'
                                          offset={-80}>Oferta</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='about'>O nas</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact'>Kontakt</NavLinks>
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
