import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights
} from "./FooterElements";
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Kontakt</FooterLinkTitle>
                            <FooterLink to='/login'>+48 509 498 453</FooterLink>
                            <FooterLink to='/login'>How it works</FooterLink>
                            <FooterLink to='/login'>Careers</FooterLink>
                            <FooterLink to='/login'>Investors</FooterLink>
                            <FooterLink to='/login'>Terms of service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/login'>Login</FooterLink>
                            <FooterLink to='/login'>How it works</FooterLink>
                            <FooterLink to='/login'>Careers</FooterLink>
                            <FooterLink to='/login'>Investors</FooterLink>
                            <FooterLink to='/login'>Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/login'>Login</FooterLink>
                            <FooterLink to='/login'>How it works</FooterLink>
                            <FooterLink to='/login'>Careers</FooterLink>
                            <FooterLink to='/login'>Investors</FooterLink>
                            <FooterLink to='/login'>Terms of service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/login'>Login</FooterLink>
                            <FooterLink to='/login'>How it works</FooterLink>
                            <FooterLink to='/login'>Careers</FooterLink>
                            <FooterLink to='/login'>Investors</FooterLink>
                            <FooterLink to='/login'>Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Apartments
                        </SocialLogo>
                        <WebsiteRights>Nazwa © {new Date().getFullYear()} Wszystkie prawa zastrzeżone.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'><FaYoutube/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer