import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Menu, MenuItem } from '@mui/material';

import Tooltip from '../Tooltip/Tooltip';

export const MenuBarButton = ({ icon, menuItems = [] }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                {icon}
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {menuItems.map(({ label, onClick, tooltip }, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            onClick();
                            handleClose();
                        }}
                    >
                        <Tooltip title={tooltip} placement="right">
                            <span style={{ width: '100%' }}>{label}</span>
                        </Tooltip>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

MenuBarButton.propTypes = {
    icon: PropTypes.element,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func,
            tooltip: PropTypes.string,
        })
    ),
};
