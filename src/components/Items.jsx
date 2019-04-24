import React from 'react';
import {connect} from 'react-redux'


export const Items = ({items})=>(
    <div>
       
        
        <div>
          {items.map(item=> (
                <div> 
                    {item.name}
                   
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
        items:state.items.filter(item=> item.groups===groupID)
    }
}
export const ConnectedItems = connect(mapStateToProps)(Items);