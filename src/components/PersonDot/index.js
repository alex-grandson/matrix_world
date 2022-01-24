import React from "react";
import {IconButton, Popover} from "@mui/material";
import './index.sass';
import {Accessible, Person, PersonOutline} from '@mui/icons-material';
import CharacterCard from "../CharacterCard";
import {store} from "../../redux/store";

export default function PersonDot({ character }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        character.character.setSelectedSubject(character.id);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <IconButton
                className="oracle"
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                sx={{ margin: "5px"}}
            >
                <Accessible />
            </IconButton>
            {/*<Popover*/}
            {/*    id={id}*/}
            {/*    open={open}*/}
            {/*    anchorEl={anchorEl}*/}
            {/*    onClose={handleClose}*/}
            {/*    anchorOrigin={{*/}
            {/*        vertical: 'center',*/}
            {/*        horizontal: 'right',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <CharacterCard />*/}
            {/*</Popover>*/}
        </>

    )
}