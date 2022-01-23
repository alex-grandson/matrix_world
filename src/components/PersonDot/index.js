import React from "react";
import {IconButton, Popover} from "@mui/material";
import './index.sass';
import {Accessible, Person, PersonOutline} from '@mui/icons-material';
import CharacterCard from "../CharacterCard";

export default function PersonDot(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <IconButton className="oracle" aria-describedby={id} variant="contained" onClick={handleClick}>
                <Accessible />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
            >
                <CharacterCard />
            </Popover>
        </>

    )
}