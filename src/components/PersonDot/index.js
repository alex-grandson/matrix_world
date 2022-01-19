import React from "react";
import {Button, IconButton, Popover, Typography} from "@mui/material";
import './index.sass';
import {Accessible, Person, PersonOutline} from '@mui/icons-material';

export default function PersonDot(props) {

    const {}

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
                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
        </>

    )
}