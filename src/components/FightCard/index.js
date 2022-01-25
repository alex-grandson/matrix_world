import React, {useEffect, useState} from "react";
import { Divider, Typography} from "@mui/material";
import { useGetSubjectByIdQuery } from "../../redux/matrixAPI";
import SubjectAbilitiesForm from "../SubjectAbilitiesForm";
import Loader from "../Loader";
import SubjectMovingForm from "../SubjectMovingForm";

export default function FightCard({ character, fightTable }) {

    const { data = [], isLoading } = useGetSubjectByIdQuery(character.selectedSubject);

    useEffect(() => {
    }, [character.selectedSubject])

    if (isLoading) return <Loader />
    return(
        <div className="character-card">

            <Typography variant="h5" textAlign="center">Subject Card</Typography>
            <Typography><b>Name:</b> {data.name}</Typography>
            <Divider className="divider">Description</Divider>
            <Typography><b>Opportunities:</b> {data.opportunities}</Typography>
            <Typography><b>Characteristic:</b> {data.characteristic}</Typography>
            <Divider className="divider">Stats</Divider>
            <SubjectAbilitiesForm data={data} character={character} fightTable />
            {/*<SubjectMovingForm data={data} character={character} />*/}
        </div>
    )
}