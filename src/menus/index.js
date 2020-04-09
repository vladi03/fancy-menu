import React from "react";
import { SideStrip as CompSideStrip } from './sideStrip/SideStrip';
import { Home, Wallpaper, PieChart, Warning, Settings, Input,
    Dashboard, DataUsage
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
//https://avatarfiles.alphacoders.com/115/115265.png
//https://material-ui.com/static/images/avatar/7.jpg
export const DemoMenu = ()=> (
    <CompSideStrip mainLinks={mainLinks}
                   bottomLinks={bottomLinks}
                   expandMenu={false}
                   userLabel="Jane Smith"
                   avatarInitials="VM"
                   imageUrl="https://material-ui.com/static/images/avatar/7.jpg"

/>);

export const SideStrip = CompSideStrip;
