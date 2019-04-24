import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import {Router, Route} from 'react-router-dom';
import {history} from '../store/history'
import {ConnectedParks } from './Parks';
import {ConnectedNavigation} from './Navigation'

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

        </div>
        </Provider> 
    </Router>
)