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


    return (
        <>
            <Typography variant="h5">
                {location.name}
            </Typography>
            {data.map((subject) => <PersonDot key={subject.id} character={{ ...subject, character }} />)}

        </>
    )
}