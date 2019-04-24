import React from 'react';
import {connect} from 'react-redux'
import { ConnectedPicnicGroups} from './PicnicGroups';
import { ConnectedItems} from './Items';

export const Parks = ({parks})=>(
    <div>
       
        {parks.map(park=> (
            <ConnectedPicnicGroups key={park.id} id={park.id} name={park.name} />
                             
        ))}       
       
    </div>
);

function mapStateToProps(state){
    return{
        parks:state.parks
    }
}
export const ConnectedParks = connect(mapStateToProps)(Parks);