import React from 'react';

import Aux from '../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>;
        });

    return (
        <Aux>
            <h2>Your Order</h2>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;