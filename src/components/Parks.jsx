import React from 'react';
import {connect} from 'react-redux'

export const Parks = ({parks})=>(
    <div>
        <h2>Parks</h2>
        {parks.map(park=> (
            <div> 
                {park.name}
            </div>
        ))}
    </div>
);

function mapStateToProps(state){
    return{
        parks:state.parks
    }
}
export const ConnectedParks = connect(mapStateToProps)(Parks);