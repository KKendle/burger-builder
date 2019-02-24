import React from 'react';

import './BuildControl.scss';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.ingredientLabel}</div>
        <button className="Less" onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className="More" onClick={props.added}>More</button>
    </div>
);

export default buildControl;