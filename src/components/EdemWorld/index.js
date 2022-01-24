import React from "react";
import './index.sass';
import {useGetLocationByWoldNumberQuery} from "../../redux/matrixAPI";
import {EDEM_WORLD} from "../../constants";
import Loader from "../Loader";
import Location from "../Location";

export default function EdemWorld({name}) {
    const {data = [], isLoading} = useGetLocationByWoldNumberQuery(EDEM_WORLD);
    if (isLoading) return <Loader />
    console.log('EDEM_WORLD', data);
    return (
        <div className="world">
            {data.map((location, idx) => <Location location={location} key={location.id}/>)}
        </div>
    )
}