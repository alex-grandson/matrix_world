import React, {useEffect, useState} from 'react';
import FightCard from "../../components/FightCard";
import {Button, Grid, Stack, Typography} from "@mui/material";
import {useGetSubjectByLocationNumberQuery} from "../../redux/matrixAPI";
import Loader from "../../components/Loader";
import './index.sass';


export default function FightTable() {
    const { data = [], isLoading, refetch } = useGetSubjectByLocationNumberQuery(6);
    const [rand, setRand] = useState(Math.floor(Math.random() * data.length));
    const [rerender, setRerender] = useState(false);
    const [winner, setWinner] = useState(undefined);
    const [isDataChanged, setIsDataChanged] = useState(false);
    const handleChangeFighters = () => {
        setRerender(true);
        setWinner(undefined);
    }

    const handleFight = () => {
        console.log('FightTable: Fight', first);
        if (first.health - second.impactForce > second.health - first.impactForce) {
            setWinner(first);
        } else {
            setWinner(second);
        }
        console.log('FightTable: winner', winner);
    }

    useEffect(() => {
        if (isDataChanged) {
            setIsDataChanged(false);
        } else
        if (rerender) {
            setRand(Math.floor(Math.random() * data.length));
            setRerender(false);
        }
    }, [rerender, winner, isDataChanged]);

    if (isLoading) return <Loader />;

    let first = data[rand];
    let second = data[(rand + 1) % data.length];

    console.log('first', first);
    console.log('second', second);
    return (
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <FightCard character={{ selectedSubject: first.id }} fightTable />
            </Grid>
            <Grid item xs={4} >
                <Stack
                    direction="column"
                    className="fight-control"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={ handleChangeFighters }
                    >
                        Change fighters
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={(first, second) => handleFight(first, second)}
                    >
                        Fight
                    </Button>
                    {winner &&
                        <Typography variant="h6"><b>Winner: </b>{winner.name}</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={4}>
                <FightCard character={{ selectedSubject: second.id }} fightTable/>
            </Grid>
        </Grid>
    )
}