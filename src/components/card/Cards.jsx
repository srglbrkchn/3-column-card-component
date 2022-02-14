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
            <FirstCard heading={sedans.brand} pic={sedans.pic} info={sedans.info}/>
            <MiddleCard heading={suvs.brand} pic={suvs.pic} info={suvs.info}/>
            <LastCard heading={luxury.brand} pic={luxury.pic} info={luxury.info}/>
        </div>
    );
}

export default Cards;