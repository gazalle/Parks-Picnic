import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import {Router, Route} from 'react-router-dom';
import {history} from '../store/history'
import {ConnectedParks } from './Parks';
import {ConnectedNavigation} from './Navigation';
import { ConnectedGroupDetails} from './GroupDetails';

export const Main = ()=>(
    <Router history={history}>
        <Provider store={store}>     
        <div>   

        < ConnectedNavigation />
            <Route 
                exact
                path="/parks"
                render={()=> (<ConnectedParks />)}
            />
             <Route 
                exact
                path="/groups/:id"
                render={({match})=> (<ConnectedGroupDetails match={match} />)}
            />
 
        </div>
        </Provider> 
    </Router>
)