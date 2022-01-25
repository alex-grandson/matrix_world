import React from "react";
import './index.sass';
import {useGetLocationByWoldNumberQuery} from "../../redux/matrixAPI";
import {EDEM_WORLD} from "../../constants";
import Loader from "../Loader";
import Location from "../Location";
import {Typography} from "@mui/material";

export default function EdemWorld({ character }) {
    const {data = [], isLoading} = useGetLocationByWoldNumberQuery(EDEM_WORLD);
    console.log('EDEM_WORLD: GetLocation', data)
    if (isLoading) return <Loader />
    return (
        <div className="world">
            <Typography variant="h5" textAlign="center">Edem</Typography>
            {data?.map((location, idx) => <Location location={location} key={location.id} character={character}/>)}
        </div>
    )
}