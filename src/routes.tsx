import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import OrphanagesMap from './pages/OrphanagesMap';
import AcessoRestrito from './pages/AcessoRestrito';
// import FamiliaAcolhedora from './pages/FamiliaAcolhedora';
import Dashboard from './pages/Dashboard';
import Pendentes from './pages/Pendentes';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/orphanages" exact component={OrphanagesMap} />
                
                <Route path="/acesso-restrito" exact component={AcessoRestrito} />
                <Route path="/acesso-restrito/dashboard" exact component={Dashboard} />
                <Route path="/acesso-restrito/pendentes" exact component={Pendentes} />
                <Route path="/orphanages/create" exact component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>    
    );
}
export default Routes;