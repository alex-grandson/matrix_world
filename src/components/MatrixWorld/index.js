import React from "react";
import {useGetLocationByWoldNumberQuery} from "../../redux/matrixAPI";
import {MATRIX_WORLD} from "../../constants";
import Loader from "../Loader";
import Location from "../Location";
import {Typography} from "@mui/material";

export default function MatrixWorld({ character }) {
    const { data = {}, isLoading } = useGetLocationByWoldNumberQuery(MATRIX_WORLD);
    if (isLoading) return <Loader />

    return (
        <div className="world">
            <Typography variant="h5" textAlign="center">Matrix</Typography>
            {data.map((location, idx) => <Location location={location} key={location.id} character={character}/>)}
        </div>
    )
}