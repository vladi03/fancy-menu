import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import { styles } from "./style";

export class MenuButtonComponent extends React.Component {

    render() {
        const { classes, config, showLabel, onClick, selected } = this.props;

        return (
            <Button
                onClick={selected ? null : () => onClick()}
                style={{paddingLeft: showLabel ? 20 : 0,}}
                href={config.link}
                className={selected ? classes.menuButtonActive : classes.menuButton}
            >
                <config.icon/> {showLabel && <span className={classes.menuButtonLabel}>{config.label}</span>}
            </Button>
        );
    }
}
export const  MenuButton = withStyles(
    styles, { withTheme: true })(MenuButtonComponent);
