import React from "react";
import CardHeading from "./CardHeading";
import CarPic from "./CarPic";
import CardInfo from "./CardInfo";
import Button from "./Button";

const LastCard = (props)=> {
    return(
        <div className="last-card card">
            <CarPic pic={props.pic} />
            <CardHeading heading={props.heading} />
            <CardInfo info = {props.info} /> 
            <Button cssClass={props.cssClass} />
        </div>
    );
}

export default LastCard;