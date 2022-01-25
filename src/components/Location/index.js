import React from "react";
import './index.sass'
import {Grid, Stack, Typography} from "@mui/material";
import Loader from "../Loader";
import {useGetSubjectByLocationNumberQuery} from "../../redux/matrixAPI";
import PersonDot from "../PersonDot";

export default function Location(props){
    const { location, character } = props;
    const { data = {}, isLoading } = useGetSubjectByLocationNumberQuery(location.worldId);

    if (isLoading) return <Loader />

    console.log(`Location ${location.id}`, location);
    return (
        <div className="location">
            <Stack direction="row"  justifyContent="space-between" alignContent="start">
                <div>
                    <Typography variant="h6">
                        <span>{location.id}: </span>{location.name}
                    </Typography>
                    {data && data?.map((subject) => <PersonDot key={subject.id} character={{ ...subject, character }} />)}
                </div>
                <Stack direction="column">
                    {location?.neighbours.map((nei) => <span key={nei}>{nei}</span>)}
                </Stack>
            </Stack>

        </div>
    )
}