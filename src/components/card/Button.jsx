import def from "ajv-formats/node_modules/ajv/dist/vocabularies/validation/required";
import React from "react";

const Button = (props)=> {
    return (
        <button className={`btn ${props.cssClass}`} > Learn More </button>
    );
}


export default Button;