import React from "react";
import {useGetLocationByWoldNumberQuery} from "../../redux/matrixAPI";
import {MATRIX_WORLD} from "../../constants";
import Loader from "../Loader";
import Location from "../Location";

export default function MatrixWorld({ character }) {
    const { data = {}, isLoading } = useGetLocationByWoldNumberQuery(MATRIX_WORLD);
    if (isLoading) return <Loader />

    return (
        <div className="world">
            {data.map((location, idx) => <Location location={location} key={location.id} character={character}/>)}
        </div>
    )
}