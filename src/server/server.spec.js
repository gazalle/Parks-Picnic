import {addNewGroup, updateNewGroup} from './server'

(async function myFunc(){
    await addNewGroup({
        name:"New Group",
        id:"1298"
    });
    await updateNewGroup({
        id:"1298",
        name:"New Group UPDATED"      
    });
})();
