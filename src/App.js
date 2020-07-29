import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'assets/global.css';

import Home from 'screens/Home';
import Portfolio from 'screens/Portfolio';
import Settings from 'screens/Settings';

const App = () => {
    return (
        <Switch>
            <Route path='/portfolio' render={() => <Portfolio />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route exact path='/' render={() => <Home />} />
        </Switch>
    );
};

export default App;
