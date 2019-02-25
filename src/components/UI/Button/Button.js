import React from 'react';

const button = (props) => {
    let classes = ["button"];

    // sample for specific button types and their default classes
    // could also probably be made into their own components
    if(props.btnType === "primary") {
        classes.push('primary', 'compact', 'large');
    }
    if(props.btnType === "secondary") {
        classes.push('secondary', 'small');
    }

    return (<button
        className={classes.join(' ')}
        onClick={props.clicked}>{props.children}</button>
    );
};

export default button;