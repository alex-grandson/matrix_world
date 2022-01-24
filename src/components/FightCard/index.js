import React, {useEffect, useState} from "react";
import { Divider, Typography} from "@mui/material";
import { useGetSubjectByIdQuery } from "../../redux/matrixAPI";
import SubjectAbilitiesForm from "../SubjectAbilitiesForm";
import Loader from "../Loader";
import SubjectMovingForm from "../SubjectMovingForm";

export default function FightCard({ character }) {

    const { data = [], isLoading } = useGetSubjectByIdQuery(character.selectedSubject);

    useEffect(() => {
    }, [character.selectedSubject])

    if (isLoading) return <Loader />
    return(
        <div className="character-card">

            <Typography variant="h5" textAlign="center">Subject Card</Typography>
            <Typography><b>Name:</b> {data[0].name}</Typography>
            <Divider className="divider">Description</Divider>
            <Typography><b>Opportunities:</b> {data[0].opportunities}</Typography>
            <Typography><b>Characteristic:</b> {data[0].characteristic}</Typography>
            <Divider className="divider">Stats</Divider>
            <SubjectAbilitiesForm data={data} character={character}/>
            <SubjectMovingForm data={data} character={character} />
        </div>
    )
}