import React from "react";
import './index.sass'
import { Divider, Typography} from "@mui/material";
import { useGetSubjectByIdQuery } from "../../redux/matrixAPI";
import HumanAbilitiesForm from "../HumanAbilitiesForm";

export default function CharacterCard() {
    const { data = [], isLoading } = useGetSubjectByIdQuery(1);

    if (isLoading) return <Typography variant="p">Loading...</Typography>;

    return(
        <div className="character-card">

            <Typography variant="h5" textAlign="center">Character Card</Typography>
            <Typography><b>Name:</b> {data[0].name}</Typography>
            <Divider className="divider">Description</Divider>
            <Typography><b>Opportunities:</b> {data[0].opportunities}</Typography>
            <Typography><b>Characteristic:</b> {data[0].characteristic}</Typography>
            <Divider className="divider">Stats</Divider>
            <HumanAbilitiesForm data={data} />
        </div>
    )
}