import { props } from "bluebird";
import Reacr from "react";
import CardHeading from "./CardHeading";
import CarPic from "./CarPic";
import CardInfo from "./CardInfo";

const MiddleCard = (props)=> {
    return(
        <div className="middle-card card">
            <CarPic pic={props.pic} />
            <CardHeading heading={props.heading} />
            <CardInfo info = {props.info} /> 
        </div>
    );
}

export default MiddleCard;