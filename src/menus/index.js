import React, {Fragment} from "react";
import { SideStrip as CompSideStrip } from './sideStrip/SideStrip';
import Home from "@material-ui/icons/Home";
import Wallpaper from "@material-ui/icons/Wallpaper";
import PieChart from "@material-ui/icons/PieChart";
import Warning from "@material-ui/icons/Warning";
import Settings from "@material-ui/icons/Settings";
import Input from "@material-ui/icons/Input";
import Dashboard from "@material-ui/icons/Dashboard";
import DataUsage from "@material-ui/icons/DataUsage";

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

    return (
        <Fragment>
            <CompSideStrip mainLinks={mainLinks}
                           bottomLinks={bottomLinks}
                           expandMenu={false}
                           userLabel="Jane Smith"
                           avatarInitials="VM"
                           imageUrl="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <div style={{marginLeft: 86, marginTop: 20}}>Hello World ! This is a working example os fancy menu.</div>
        </Fragment>);
};
//this is used by subscriber
// noinspection JSUnusedGlobalSymbols
export const SideStrip = CompSideStrip;
