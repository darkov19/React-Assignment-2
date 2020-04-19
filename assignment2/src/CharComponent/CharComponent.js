import React from "react";
import "./CharComponent.css";

const charComponent = props => {
    return (
        <div onClick={props.click} className="box">
            {props.char}
        </div>
    );
};

export default charComponent;
