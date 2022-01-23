import React from "react";
import './index.sass'

export default function Location(props){
    const { locationID, locationNeighbours } = props;

    return (
        <div>
            Локация {locationID}
        </div>
    )
}