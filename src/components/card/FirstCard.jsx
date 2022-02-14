import React from "react";
import CardHeading from "./CardHeading";
import CarPic from "./CarPic";
import CardInfo from "./CardInfo";


const FirstCard = (props)=> {
    return(
        <div className="first-card card"> 
            <CarPic pic={props.pic} />
            <CardHeading heading={props.heading} />
            <CardInfo info = {props.info} /> 
        </div>
    );
}

export default FirstCard;