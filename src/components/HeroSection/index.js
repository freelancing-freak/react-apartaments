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
import Image from '../../images/background.jpeg';
import {useState} from "react";
import {Button} from "../ButtonElement";

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <HeroImg src={Image}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Apartamenty na sprzedaż</HeroH1>
                <HeroP>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='offer'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Zobacz ofertę {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection
