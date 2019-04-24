export const REQUEST_GROUP_CREATION = `REQUEST_GROUP_CREATION`;
export const CREATE_GROUP = `CREATE_GROUP`;
export const SET_JOIN = `SET_JOIN`;
export const SET_GROUP = `SET_GROUP`;
export const SET_GROUP_NAME = `SET_GROUP_NAME`;

export const requestGroupCreation = (groupID)=>({
    type:REQUEST_GROUP_CREATION,
    groupID
});

export const createGroup = (groupID,  parkID)=>({
    type:CREATE_GROUP,
    groupID,  
    parkID
});

export const setJoin = (id, isComplete = true)=>({
    type:SET_JOIN,
    groupID:id,
    isComplete
});

export const setGroup = (groupID, parkID)=>({
    type:SET_GROUP,
    groupID,
    parkID
});

export const setGroupName = (groupID, name)=>({
    type:SET_GROUP_NAME,
    groupID,
    name
});