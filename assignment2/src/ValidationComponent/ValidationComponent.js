import React from "react";

const validationComponent = props => {
    let validationComponent = "Text Long Enough";

    if (props.length <= 5) {
        validationComponent = "Text too short";
    }

    return (
        <div>
            <p>{validationComponent}</p>
        </div>
    );
};

export default validationComponent;
