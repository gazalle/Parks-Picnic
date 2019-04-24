import React from 'react';
import {connect} from 'react-redux'
import { ConnectedPicnicGroups} from './PicnicGroups';

export const Parks = ({parks})=>(
    <div>
       
        {parks.map(park=> (
            <ConnectedPicnicGroups id={park.id} name={park.name}/>
        ))}
    </div>
);

function mapStateToProps(state){
    return{
        parks:state.parks
    }
}
export const ConnectedParks = connect(mapStateToProps)(Parks);