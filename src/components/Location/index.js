import React from "react";
import './index.sass'
import {Grid, Stack, Typography} from "@mui/material";
import Loader from "../Loader";
import {useGetSubjectByLocationNumberQuery} from "../../redux/matrixAPI";
import PersonDot from "../PersonDot";

export default function Location(props){
    const { location, character } = props;
    const { data = {}, isLoading } = useGetSubjectByLocationNumberQuery(location.location_number);

    if (isLoading) return <Loader />

    console.log('location', location);
    return (
        <div className="location">
            <Stack direction="row"  justifyContent="space-between" alignContent="start">
                <div>
                    <Typography variant="h5">
                        <span>{location.id}: </span>{location.name}
                    </Typography>
                    {data.map((subject) => <PersonDot key={subject.id} character={{ ...subject, character }} />)}
                </div>
                <Stack direction="column">
                    {location.array_of_neighbours.map((nei) => <span>{nei}</span>)}
                </Stack>
            </Stack>

        </div>
    )
}