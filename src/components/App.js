import React from 'react';

import Header from './Header';
import Season from './seasonal/Season';

const App = () => {
    return (
        <div className="ui grid">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <Season />
            </div>
        </div>
    );
};

export default App;
