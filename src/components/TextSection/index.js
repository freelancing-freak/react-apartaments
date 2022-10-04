import {H2, H6} from "./TextSectionElemenets";

const TextSection = ({title, titleSpan, subtitle}) => {

    return (
        <>
            <H2>{title}<span>{titleSpan}</span></H2>
            <H6>{subtitle}</H6>
        </>
    );
}

export default TextSection;
