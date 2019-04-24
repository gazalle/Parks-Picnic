import {createStore, applyMiddleware, combineReducers} from 'redux';
import {appEntities} from '../server/appEntities';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import * as mutations from './mutations';

import * as sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    combineReducers({
            picnic_groups(picnic_groups=appEntities.picnic_groups, action){
                switch(action.type){
                    case mutations.CREATE_GROUP:
                        return [...picnic_groups, {
                            id: action.p_groupID,
                            name: "New Group",                          
                            park:action.parkID,
                            slots: "unlimited",
                            isAvailable: false
                        }]

                }
            return picnic_groups;
            },
            items(items=appEntities.items){
                return items;
            },
            picnic_group(picnic_group=appEntities.picnic_groups){
                return picnic_group;
            },
            parks(parks=appEntities.parks){
                return parks;
            }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}