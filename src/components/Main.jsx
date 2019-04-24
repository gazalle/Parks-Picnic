import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import {ConnectedParks } from './Parks';

export const Main = ()=>(
    <Provider store={store}>     
    <div>      
      <ConnectedParks />
     </div>
    </Provider> 
)