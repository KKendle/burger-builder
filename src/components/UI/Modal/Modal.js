import React from 'react';

import './Modal.scss';

const modal = (props) => {
    let classes = ['Modal'];
    if(props.show) {
        classes.push('active');
    }

    return (
        <div className={classes.join(' ')}>
            <button onClick={props.close} className="close">Close X</button>
            {props.children}
        </div>
    );
};

export default modal;