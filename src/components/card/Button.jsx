import React from "react";

const Button = (props)=> {
    return (
        <button className={`btn ${props.cssClass}`} > Learn More </button>
    );
}


export default Button;