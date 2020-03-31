import React, {useState, Fragment} from "react";
import { SideStrip as CompSideStrip } from './sideStrip/SideStrip';
import {IconButton} from "@material-ui/core";
import { Home, Wallpaper, PieChart, Warning, Settings, Input,
    Dashboard, DataUsage, Menu
} from "@material-ui/icons";

const mainLinks = [
    {label : "Home", icon: Home, selected: true, link:"#home" },
    {label : "Report", icon: Wallpaper, link:"#report" },
    {label : "Admin", icon: PieChart,
        subMenu: [
            { label : "My Dashboard", icon: Dashboard, link:"#mydashboard" },
            { label : "Data Discovery", icon: DataUsage, link:"#datausage" },
        ]
    }
];

const bottomLinks = [
    {label : "Messages", icon: Warning },
    {label : "Settings", icon: Settings },
    {label : "Logout", icon: Input, link:"#logout" }
];

export const DemoMenu = ()=> {
    const [openMenu, setOpenMenu] = useState(false);
    const [pauseMenuClose, setPauseMenuClose] = useState(false);
    return (
        <Fragment>
            <IconButton
                onClick={() => {
                    setOpenMenu(true);
                    setPauseMenuClose(true);
                    setTimeout(()=> {
                        setPauseMenuClose(false);
                    }, 5000);
                }}
            >
                <Menu/>
            </IconButton>
            <CompSideStrip mainLinks={mainLinks}
                           bottomLinks={bottomLinks}
                           onMenuClose={() => {
                               if(!pauseMenuClose)
                                   setOpenMenu(false);
                           }}
                           expandMenu={openMenu}
                           userLabel="Jane Smith"
                           imageUrl="https://material-ui.com/static/images/avatar/7.jpg"
            />
        </Fragment>);
};
//this is used by subscriber
// noinspection JSUnusedGlobalSymbols
export const SideStrip = CompSideStrip;
