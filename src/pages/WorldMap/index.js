import React from "react";
import {Grid, Stack} from "@mui/material";
import CharacterCard from "../../components/CharacterCard";
import EdemWorld from "../../components/EdemWorld";
import MatrixWorld from "../../components/MatrixWorld";



export default function WorldMap() {

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <EdemWorld name="Edem" />
            </Grid>
            <Grid item xs={5}>
                <MatrixWorld />
            </Grid>
            <Grid item xs={3}>
                <Stack direction="column">
                    <CharacterCard />

                </Stack>
            </Grid>
        </Grid>
    )
}