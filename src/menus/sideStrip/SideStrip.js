import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';

import { styles } from "./style";
import Person from "@material-ui/icons/Person";
import Close from "@material-ui/icons/Close";
import Menu from "@material-ui/icons/Menu";

import { MenuButton } from "./MenuButton";
import { SideSecondary } from "./SideSecondary";

let timerRef = null;

export class SideStripComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedInternal: {area: "byConfig", index: -1},
            isMobile: false,
            hideMenu: false,
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
            this.handleCloseMenu({ selectedInternal, disableMouseOver: true });
            // noinspection JSCheckFunctionSignatures
            timerRef = setTimeout(()=>
                this.setState({disableMouseOver: false}), 1000 );
        }
    }

    handleCloseMenu(extraState) {
        const { isMobile } = this.state;
        const { onMenuClose } = this.props;
        if(onMenuClose) onMenuClose();
        // noinspection JSCheckFunctionSignatures
        this.setState({...extraState, expandMenuInternal: false, hideMenu: isMobile });
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        const { expandMenu } = this.props;
        const isMobile = expandMenu !== undefined && window.innerWidth <= 760;
        // noinspection JSCheckFunctionSignatures
        this.setState({isMobile, hideMenu: isMobile});
    }

    componentWillUnmount() {
        clearTimeout(timerRef);
        window.removeEventListener("resize", this.resize);
    }

    onCloseSecondaryMenu() {
        // noinspection JSCheckFunctionSignatures
        this.handleCloseMenu({secondaryMenuOptions: []});
    }
    onMouseOverMenu(event, config) {
        //event.stopPropagation();
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


    render() {
        const {classes, mainLinks, bottomLinks, expandMenu,
            userLabel, imageUrl, avatarInitials, hideAvatar
        } = this.props;
        const {expandMenuInternal, secondaryMenuOptions, secondaryMenuParent,
            hideMenu
        } = this.state;

        const expandMenuCalc = expandMenu || expandMenuInternal;
        const showSecondaryMenu = expandMenuCalc && secondaryMenuOptions.length > 0;
        const showAvatar = hideAvatar != true;

        return  (
            <ClickAwayListener
                onClickAway={()=> this.handleCloseMenu() }
            >
                <div
                    className={expandMenuInternal && classes.littleRightBorder || ""}
                    onMouseLeave={() => this.handleCloseMenu() }
                >
                    {secondaryMenuParent &&
                    <SideSecondary show={showSecondaryMenu}
                       menuParent={secondaryMenuParent}
                       onClose={() => this.onCloseSecondaryMenu()}
                       menuList={secondaryMenuOptions || []}/>
                    }
                    {(!hideMenu || expandMenuCalc )&&
                    <Drawer
                        classes={{
                            paper: classNames(classes.menuBase, {
                                [classes.menuExpand]: expandMenuCalc,
                                [classes.menuCollapse]: !expandMenuCalc,
                            })
                        }}
                        variant="permanent"
                        open={true}
                    >
                        {expandMenuCalc &&
                        <IconButton variant="outlined"
                                    onClick={() => this.handleCloseMenu()}
                                    aria-label="Close"
                                    className={classes.closeButton}>
                            <Close fontSize="small"/>
                        </IconButton>
                        }
                        {showAvatar && <Avatar src={imageUrl}
                                className={classes.avatarMain}
                                onMouseOver={() => this.onMouseOver()}>
                            {avatarInitials || <Person/>}
                        </Avatar>}
                        {expandMenuCalc && <p className={classes.userLabel}>{userLabel}</p>}
                        <Divider className={classes.divider}/>

                        <div onMouseOver={() => this.onMouseOver()}

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
                                            onMouseOver={(event) => this.onMouseOverMenu(event, buttonConfig)}
                                />
                            ))
                            }

                            <div style={{bottom: 0, position: "absolute", width: "100%"}}>
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
                                                onMouseOver={() => this.onMouseOverMenu(buttonConfig)}
                                    />
                                ))
                                }
                            </div>
                        </div>
                    </Drawer>
                    }
                    {hideMenu && !expandMenuCalc &&
                        <IconButton
                            className={classes.menuButtonExpandMobile}
                            onClick={() => {
                                this.onMouseOver();
                            }}
                        >
                            <Menu/>
                        </IconButton>
                    }
                </div>
            </ClickAwayListener>
        );
    }
}

export const  SideStrip = withStyles(styles, { withTheme: true })(SideStripComponent);