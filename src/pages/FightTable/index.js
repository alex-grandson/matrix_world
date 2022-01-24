import React from 'react';
import FightCard from "../../components/FightCard";
import {Grid} from "@mui/material";
import {useGetSubjectByLocationNumberQuery} from "../../redux/matrixAPI";
import Loader from "../../components/Loader";

export default function FightTable() {
    const {data = [], isLoading} = useGetSubjectByLocationNumberQuery(6);

    if (isLoading) return <Loader />;
    const rand = Math.floor(Math.random() * data.length);
    const first = data[rand];
    const second = data[(rand + 1) % data.length];

    console.log('first', first);
    console.log('second', second);
    return (
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <FightCard character={{ selectedSubject: first.id }} />
            </Grid>
            <Grid item xs={4} alignContent="center" justifyContent="center">

            </Grid>
            <Grid item xs={4}>
                <FightCard character={{ selectedSubject: second.id }} />
            </Grid>
        </Grid>
    )
}