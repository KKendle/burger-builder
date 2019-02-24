import React from 'react';

import Aux from '../../hoc/Aux';
import './Layout.scss';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default layout;