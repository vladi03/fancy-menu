import React from 'react';
import { Drawer, Avatar, Divider, ClickAwayListener,
    withStyles } from '@material-ui/core';
import { styles } from "./style";
import { Person } from "@material-ui/icons";
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
        this.setState({ expandMenuInternal: true });
    }

    onMouseOut() {
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
            <Drawer
                classes={{paper: expandMenuCalc ? classes.menuExpand :  classes.menuCollapse}}
                variant="permanent"
                onMouseOver={() => this.onMouseOver() }

                open={true}
            >
                <Avatar src={imageUrl} className={classes.avatarMain}>
                    <Person/>

                </Avatar>
                {expandMenuCalc && <span className={classes.userLabel}>{userLabel}</span>}
                <Divider className={classes.divider}/>
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
            </Drawer>
            </ClickAwayListener>
        );
    }
}

export const  SideStrip = withStyles(styles, { withTheme: true })(SideStripComponent);