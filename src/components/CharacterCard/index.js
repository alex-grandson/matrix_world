import React, {useEffect, useState} from "react";
import './index.sass'
import { Divider, Typography} from "@mui/material";
import { useGetSubjectByIdQuery } from "../../redux/matrixAPI";
import SubjectAbilitiesForm from "../SubjectAbilitiesForm";
import Loader from "../Loader";
import SubjectMovingForm from "../SubjectMovingForm";

export default function CharacterCard({ character }) {

    const { data = [], isLoading, isFetching } = useGetSubjectByIdQuery(character.selectedSubject);

    useEffect(() => {
    }, [character.selectedSubject, data])

    if (isLoading) return <Loader />

    console.log('CharacterCard: character', character);
    console.log('CharacterCard: data', data);

    // return <Divider className="divider">No data</Divider>

    return (
        <div className="character-card">
            <Typography variant="h5" textAlign="center">Subject Card</Typography>
            <Typography><b>Name:</b> </Typography>
            <Typography>{!isFetching ? data.name : 'Fetching...'}</Typography>
            <Divider className="divider">Description</Divider>
            <Typography><b>Opportunities:</b></Typography>
            <Typography>{!isFetching ? data.opportunities : 'Fetching...'}</Typography>
            <Typography><b>Characteristic:</b></Typography>
            <Typography>{!isFetching ? data.characteristic : 'Fetching...'}</Typography>
            <Divider className="divider">Stats</Divider>
            {!isFetching && <SubjectAbilitiesForm data={data} character={character}/>}
            {/*<SubjectMovingForm data={data} character={character}/>*/}
        </div>
    )
}