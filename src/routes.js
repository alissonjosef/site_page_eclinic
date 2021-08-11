import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import QuemSomos from './pages/QuemSomos';
import Informacao from './pages/Informacao';
import Contato from './pages/Contato';

function Routes (){
    return {
        <BrowserRouter>
            <Switch>
                <Route path="/" components={Main} />
                <Route path="/" components={QuemSomos} />
                <Route path="/" components={Informacao} />
                <Route path="/" components={Contato} />
            </Switch>
        </BrowserRouter>
    };
};

export default Routes;