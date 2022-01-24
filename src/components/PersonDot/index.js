import React from "react";
import {IconButton, Popover} from "@mui/material";
import './index.sass';
import Icon from '@mui/material/Icon';
import {sideColors, sideIcons} from "../../constants";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                sx={{ margin: "5px", backgroundColor: sideColors[character?.side ? character?.side : 'grey'] }}
            >
                <Icon component={character?.side ? sideIcons[character?.side] : AccountCircleIcon} />
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