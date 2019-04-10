import './index.css'
import React from 'react'
import {render} from 'react-dom'
import { SideStrip } from './menus/sideStrip/SideStrip';
import { Home, Wallpaper, PieChart, Warning, Settings, Input } from "@material-ui/icons";
const mainLinks = [
    {label : "Home", icon: Home, selected: true, link:"#home" },
    {label : "Report", icon: Wallpaper, selected: false, link:"#report" },
    {label : "Report", icon: PieChart, selected: false }
];

const bottomLinks = [
    {label : "Messages", icon: Warning, selected: false },
    {label : "Settings", icon: Settings, selected: false },
    {label : "Logout", icon: Input, selected: false, link:"#logout" }
];

render(<SideStrip mainLinks={mainLinks}
                  bottomLinks={bottomLinks}
                  expandMenu={false}
/>, document.querySelector('#app'));