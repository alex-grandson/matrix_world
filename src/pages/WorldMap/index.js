import React from "react";
import {Grid} from "@mui/material";
import CharacterCard from "../../components/CharacterCard";
import World from "../../components/World";



export default function WorldMap() {

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <World name="Edem" />
            </Grid>
            <Grid item xs={5}>
                <World name="Matrix" />
            </Grid>
            <Grid item xs={3}>
                <CharacterCard />
            </Grid>
        </Grid>
    )
}