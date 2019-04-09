import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import { styles } from "./style";

export const MenuButtonComponent = ({ classes, Icon, label,
                                        showLabel, selected }) => (
    <Button
        className={selected ? classes.menuButtonActive : classes.menuButton }
    >
        <Icon /> {showLabel &&
        <span className={classes.menuButtonLabel}>{label}</span>}
    </Button>
);

export const  MenuButton = withStyles(
    styles, { withTheme: true })(MenuButtonComponent);
