import { take, put, select } from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';

import { history } from './history'
import * as mutations from './mutations';
const url = `http://localhost:7777`;

export function* groupCreationSaga(){
    while (true){
        const {groupID} = yield take(mutations.REQUEST_GROUP_CREATION);
        const parkID = `P1`;
        //yield select(state=>state.session.id);
        const p_groupID = uuid();
        yield put(mutations.createGroup(p_groupID, groupID, parkID));
        const { res } = yield axios.post(url + `/group/new`,{
            id: p_groupID,
            name: "New Group",                          
            park:parkID,
            slots: "unlimited",
            isAvailable: false                        
        });
        console.info("Got response", res); 
    }
}