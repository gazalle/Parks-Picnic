import { take, put, select } from 'redux-saga/effects';
import * as mutations from './mutations';
import uuid from 'uuid';

export function* groupCreationSaga(){
    while (true){
        const {groupID} = yield take(mutations.REQUEST_GROUP_CREATION);
        const parkID = `P1`;
        //yield select(state=>state.session.id);
        const p_groupID = uuid();
        yield put(mutations.createGroup(p_groupID, groupID, parkID));
        console.log("Got group ID",groupID );
    }
}