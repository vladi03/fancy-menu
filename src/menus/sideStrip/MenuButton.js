import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./style";
import classNames from "classnames";

export class MenuButtonComponent extends React.Component {

    render() {
        const { classes, config, showLabel, onClick, selected, onMouseOver } = this.props;

        return (
            <Button
                onClick={selected ? null : () => onClick()}
                onMouseOver={() => onMouseOver()}
                style={{paddingLeft: showLabel ? 20 : 0,}}
                href={config.link}
                className={classNames(classes.menuButtonShape , {
                    [classes.menuButton] : !selected,
                    [classes.menuButtonActive] : selected
                })}
            >
                <config.icon/> {showLabel && <span className={classes.menuButtonLabel}>{config.label}</span>}
            </Button>
        );
    }
}
export const  MenuButton = withStyles(
    styles, { withTheme: true })(MenuButtonComponent);
