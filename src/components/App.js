import React from 'react';

import Header from './Header';
import Season from './seasonal/Season';

const App = () => {
    return (
        <div className="ui container ">
            <Header />
            <Season />
        </div>
    );
};

export default App;
