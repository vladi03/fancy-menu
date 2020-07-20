import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from "./style";
import classNames from "classnames";

export const MenuButtonComponent = ({ config, showLabel, onClick,
                                        selected, onMouseOver }) => {
        const classes = useStyles();
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
};

const useStyles = makeStyles(styles);

export const  MenuButton = MenuButtonComponent;
