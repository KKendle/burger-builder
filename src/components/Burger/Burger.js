import React from 'react';

import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // get keys from ingredients state object
    // iterate each ingredient and toss it into an array - creating an array with a length of the value from the key
    // (the 'cheese' key has a value of '2' so it creates an array with a length of 2)
    // iterate again, generating a unique key since there are multiple components of the same type
    // return the component with the related type
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        });

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;