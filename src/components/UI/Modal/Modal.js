import React from 'react';

import './Modal.scss';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    let classes = ['Modal'];
    if(props.show) {
        classes.push('active');
    }

    return (
        <Aux>
            <Backdrop
                show={props.show} />
            <div className={classes.join(' ')}>
                <button onClick={props.close} className="close">Close X</button>
                {props.children}
            </div>
        </Aux>
    );
};

export default modal;