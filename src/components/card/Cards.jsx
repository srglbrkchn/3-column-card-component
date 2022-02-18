import React from "react";
import FirstCard from "./FirstCard";
import MiddleCard from "./MiddleCard";
import LastCard from "./LastCard";
import cars from "./data.js";

const Cards = () => {
    const [sedans,
        suvs,
        luxury] = cars;

    return (
        <div className="cards">
            <FirstCard heading={sedans.brand} pic={sedans.pic} info={sedans.info} cssClass={"first-btn"} />
            <MiddleCard heading={suvs.brand} pic={suvs.pic} info={suvs.info} cssClass={"middle-btn"} />
            <LastCard heading={luxury.brand} pic={luxury.pic} info={luxury.info} cssClass={"last-btn"}/>
        </div>
    );
}

export default Cards;