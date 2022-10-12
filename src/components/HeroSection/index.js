import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroImg,
    HeroP
} from "./HeroElements";
import {useState} from "react";
import {Button} from "../ButtonElement";

const HeroSection = ({height, imgSrc, title, subtitle, btnVisibility}) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer style={{height: height}}>
            <HeroBg>
                <HeroImg src={imgSrc}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>{title}</HeroH1>
                <HeroP>
                    {subtitle}
                </HeroP>
                {btnVisibility === true ? <HeroBtnWrapper>
                    <Button to='offer'
                            smooth={true}
                            duration={50}
                            spy={true}
                            exact='true'
                            offset={-100} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Zobacz ofertę {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper> : <span/>}
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection
