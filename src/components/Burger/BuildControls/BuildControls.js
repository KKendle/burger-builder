import React from 'react';

import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'}
];

// iterate over each control
// use the labl for the key and also the text label
// assign and return it to an individual BuildControl component
const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price: ${props.price.toFixed(2)}</p>
        {controls.map(ctrl => {
            return <BuildControl 
                        key={ctrl.label}
                        ingredientLabel={ctrl.label}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />
        })}
        <button
            className="OrderButton"
            disabled={!props.purchaseable}
            onClick={props.ordered}>Order Now</button>
    </div>
);

export default buildControls;