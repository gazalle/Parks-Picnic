import {createStore} from 'redux';
import {appEntities} from '../server/appEntities';

export const store = createStore(
    function reducer(state = appEntities, action){
        return state;
    }
)