import React from 'react';
import classNames from 'classnames';
import { Drawer, Avatar, Divider, ClickAwayListener,
    IconButton , withStyles } from '@material-ui/core';
import { styles } from "./style";
import { Person, Close } from "@material-ui/icons";
import { MenuButton } from "./MenuButton";

export class SideStripComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedInternal: {area: "byConfig", index: -1},
            expandMenuInternal: false
        }
    }

    onClickMenu(area, index, config) {
        const { onClick } = this.props;
        if(config && config.onClick && typeof(onClick) === "function") {
            onClick(config);
        }
        else {
            const selectedInternal = { area: area, index: index };
            // noinspection JSCheckFunctionSignatures
            this.setState({ selectedInternal });
        }
    }

    onMouseOver() {
        // noinspection JSCheckFunctionSignatures
        this.setState({ expandMenuInternal: true });
    }

    onMouseOut() {
        // noinspection JSCheckFunctionSignatures
        this.setState({ expandMenuInternal: false });
    }

    render() {
        const {classes, mainLinks, bottomLinks, expandMenu,
            userLabel, imageUrl
        } = this.props;
        const {expandMenuInternal} = this.state;
        const expandMenuCalc = expandMenu || expandMenuInternal;

        return  (
            <ClickAwayListener
                onClickAway={()=> this.onMouseOut() }
            >
<div>

            <Drawer
                classes={{paper: classNames( classes.menuBase, {
                        [classes.menuExpand]: expandMenuCalc,
                        [classes.menuCollapse]: !expandMenuCalc,
                    })
                }}
                variant="permanent"
                open={true}
            >
            {expandMenuCalc &&
            <IconButton variant="outlined"
                        onClick={()=> this.onMouseOut() }
                        aria-label="Close"
                        className={classes.closeButton}>
                <Close fontSize="small" />
            </IconButton>
            }
            <Avatar src={imageUrl}
                    className={classes.avatarMain}
                    onMouseOver={() => this.onMouseOver() }>
                <Person/>
            </Avatar>
            {expandMenuCalc && <span className={classes.userLabel}>{userLabel}</span>}
            <Divider className={classes.divider}/>

              <div onMouseOver={() => this.onMouseOver() }
                   style={{minHeight: 450}}
              >
                {mainLinks.map((buttonConfig, index) => (
                    <MenuButton key={index}
                                config={buttonConfig}
                                showLabel={expandMenuCalc}
                                selected={
                                    (buttonConfig.selected
                                        && this.state.selectedInternal.area === "byConfig")
                                ||
                                    (this.state.selectedInternal.area === "main"
                                        && this.state.selectedInternal.index === index)}
                                onClick={() => this.onClickMenu("main", index, buttonConfig)}
                    />
                ))
                }

                <div style={{bottom: 0, position: "absolute"}}>
                    {bottomLinks.map((buttonConfig, index) => (
                        <MenuButton key={index}
                                    config={buttonConfig}
                                    showLabel={expandMenuCalc}
                                    selected={
                                        (buttonConfig.selected
                                            && this.state.selectedInternal.area === "byConfig")
                                        ||
                                        (this.state.selectedInternal.area === "bottom"
                                            && this.state.selectedInternal.index === index)}
                                    onClick={() => this.onClickMenu("bottom", index, buttonConfig)}
                        />
                    ))
                    }
                </div>
              </div>
            </Drawer>
</div>
            </ClickAwayListener>
        );
    }
}

export const  SideStrip = withStyles(styles, { withTheme: true })(SideStripComponent);