import OfferList from "./OfferList";
import {useState} from "react";
import {dataList} from "../../constants";

const OfferSection = ({id}) => {

    const [list] = useState(dataList);

    return (
        <div id={id}>
            <div>
                <OfferList list={list}/>
            </div>
        </div>
    );
}

export default OfferSection
