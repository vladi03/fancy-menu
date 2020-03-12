import React from 'react';
import classNames from 'classnames';
import { Drawer, Avatar, Divider, ClickAwayListener,
    IconButton , withStyles } from '@material-ui/core';
import { styles } from "./style";
import { Person, Close } from "@material-ui/icons";
import { MenuButton } from "./MenuButton";
import { SideSecondary } from "./SideSecondary";

export class SideStripComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedInternal: {area: "byConfig", index: -1},
            disableMouseOver: false,
            expandMenuInternal: false,
            secondaryMenuOptions: [],
            secondaryMenuParent: null
        };
    }

    onClickMenu(area, index, config) {
        const { onClick } = this.props;
        //test to see if the menu option from parent has a ocClick function
        if(config && config.onClick && typeof(onClick) === "function") {
            onClick(config);
        }
        else {
            const selectedInternal = { area: area, index: index };

            // noinspection JSCheckFunctionSignatures
            this.setState({ selectedInternal, expandMenuInternal: false, disableMouseOver: true });
            // noinspection JSCheckFunctionSignatures
            setTimeout(()=> this.setState({disableMouseOver: false}), 1000 );
        }
    }

    onCloseSecondaryMenu() {
        // noinspection JSCheckFunctionSignatures
        this.setState({secondaryMenuOptions: [], expandMenuInternal: false});
    }
    onMouseOverMenu(config) {
        const secondaryMenuOptions = config && Array.isArray(config.subMenu) ?
            config.subMenu : [];

        // noinspection JSCheckFunctionSignatures
        this.setState({ secondaryMenuOptions, secondaryMenuParent: config });
    }

    onMouseOver() {
        const {disableMouseOver} = this.state;

        if(disableMouseOver === false) {
            // noinspection JSCheckFunctionSignatures
            this.setState({expandMenuInternal: true});
        }
    }

    onCollapse() {
        // noinspection JSCheckFunctionSignatures
        this.setState({ expandMenuInternal: false });
    }

    render() {
        const {classes, mainLinks, bottomLinks, expandMenu,
            userLabel, imageUrl
        } = this.props;
        const {expandMenuInternal, secondaryMenuOptions, secondaryMenuParent
        } = this.state;
        const expandMenuCalc = expandMenu || expandMenuInternal;
        const showSecondaryMenu = expandMenuCalc && secondaryMenuOptions.length > 0;

        return  (
            <ClickAwayListener
                onClickAway={()=> this.onCollapse() }
            >
                <div>
                    {secondaryMenuParent &&
                    <SideSecondary show={showSecondaryMenu}
                       menuParent={secondaryMenuParent}
                       onClose={() => this.onCloseSecondaryMenu()}
                       menuList={secondaryMenuOptions || []}/>
                    }
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
                                onClick={()=> this.onCollapse() }
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
                    {expandMenuCalc && <p className={classes.userLabel}>{userLabel}</p>}
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
                                        onMouseOver={() => this.onMouseOverMenu(buttonConfig) }
                            />
                        ))
                        }

                        <div style={{bottom: 0, position: "absolute", width:"100%"}}>
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
                                            onMouseOver={() => this.onMouseOverMenu(buttonConfig) }
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