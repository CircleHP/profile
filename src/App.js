import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'assets/global.css';

import Home from 'screens/Home';
import Portfolio from 'screens/Portfolio';
import Settings from 'screens/Settings';

const App = () => {
    return (
        <Switch>
            <Route to='/' render={() => <Home />} />
            <Route to='/portfolio' render={() => <Portfolio />} />
            <Route to='/settings' render={() => <Settings />} />
        </Switch>
    );
};

export default App;
