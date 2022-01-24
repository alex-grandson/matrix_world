import React, {useState} from "react";
import {Grid, Stack} from "@mui/material";
import CharacterCard from "../../components/CharacterCard";
import EdemWorld from "../../components/EdemWorld";
import MatrixWorld from "../../components/MatrixWorld";



export default function WorldMap() {
    const [ selectedSubject, setSelectedSubject ] = useState(1);

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <EdemWorld character={{ selectedSubject, setSelectedSubject }} />
            </Grid>
            <Grid item xs={5}>
                <MatrixWorld character={{ selectedSubject, setSelectedSubject }}/>
            </Grid>
            <Grid item xs={3}>
                <Stack direction="column">
                    <CharacterCard character={{ selectedSubject, setSelectedSubject }}/>

                </Stack>
            </Grid>
        </Grid>
    )
}