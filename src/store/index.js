import {createStore, applyMiddleware} from 'redux';
import {appEntities} from '../server/appEntities';
import {createLogger} from 'redux-logger';

export const store = createStore(
    function reducer(state = appEntities, action){
        return state;
    },
    applyMiddleware(createLogger())
);