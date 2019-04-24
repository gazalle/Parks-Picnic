import React from 'react';
import {connect} from 'react-redux';
import { requestGroupCreation } from '../store/mutations';
import {Link} from 'react-router-dom'

export const PicnicGroups = ({picnic_groups,name, id, createNewGroup})=>(
    <div>
       
        <h3>
            {name}
        </h3>
        <div>
          {picnic_groups.map(picnic_group=> (
              <Link to={`/groups/id/${picnic_group.id}`} key={picnic_group.id}>
                <div > 
                    {picnic_group.name}                 
               </div>   </Link>            
        ))}
        <div>
            <button onClick={()=>createNewGroup(id)}>Add Group</button>
        </div>
        </div>
    </div>
);

function mapStateToProps(state, ownProps){
    let groupID=ownProps.id;

    return{
        name: ownProps.name,
        id: ownProps.groupID,        
        picnic_groups:state.picnic_groups.filter(picnic_group=> picnic_group.park===groupID)
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>({
    createNewGroup(id){
        console.log("Add new group ", id);
        dispatch(requestGroupCreation(id));
    }
});
export const ConnectedPicnicGroups = connect(mapStateToProps, mapDispatchToProps)(PicnicGroups);