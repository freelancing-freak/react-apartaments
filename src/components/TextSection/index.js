import {H2, H6, TextSectionContainer} from "./TextSectionElemenets";

const TextSection = ({title, titleSpan, subtitle}) => {

    return (
        <TextSectionContainer>
            <H2>{title}<span>{titleSpan}</span></H2>
            <H6>{subtitle}</H6>
        </TextSectionContainer>
    );
}

export default TextSection;
