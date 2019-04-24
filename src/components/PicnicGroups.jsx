import React from 'react';
import {connect} from 'react-redux'


export const PicnicGroups = ({picnic_groups,name})=>(
    <div>
       
        <h3>
            {name}
        </h3>
        <div>
          {picnic_groups.map(picnic_group=> (
                <div> 
                    {picnic_group.name}
                </div>
        ))}
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
export const ConnectedPicnicGroups = connect(mapStateToProps)(PicnicGroups);