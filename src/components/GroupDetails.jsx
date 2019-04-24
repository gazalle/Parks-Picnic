import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as mutations from '../store/mutations'

export const GroupDetails = ({
        id,
        items,
        picnic_groups,
        isAvailable,

        setJoin
}) =>(
        <div>
            <h2>{picnic_groups.name}</h2>
            <button onClick={()=>setJoin(id,!isAvailable )}>{isAvailable? `Join`: `Request To Waiting List`}</button>
            <select>
                {picnic_groups.map(picnic_group=>(
                        <option key={picnic_group.id} value={picnic_group.id}> {picnic_group.name} </option >
                 ) )}
            </select>
                <Link to="/parks">
                        <button>Join</button> 
                </Link>
        </div>
);

function mapStateToProps(state,ownProps){
    let id = ownProps.match.params.id;
    let groups = state.picnic_groups.find(picnic_group=>picnic_group.id === id);
    let items = state.items.filter(item=>item.picnic_group === id);
    let isPark = state.session.id === picnic_group.park;
    let p_groups = state.picnic_groups;

    return {
        id,
        groups,
        items,
        isPark,
        sessionID: state.session.id,
        isAvailable: picnic_group.isAvailable,
        p_groups
    }
}

function mapDispatchToProps(dispatch, ownProps){
    const id = ownProps.match.params.id;

    return{
        setJoin(id,isComplete){
            dispatch(mutations.setJoin(id,isComplete));
        }
    }


}

export const ConnectedGroupDetails = connect(mapStateToProps, mapDispatchToProps)(GroupDetails);