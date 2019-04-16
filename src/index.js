import './index.css'
import React from 'react'
import {render} from 'react-dom'
import { SideStrip } from './menus/sideStrip/SideStrip';
import { Home, Wallpaper, PieChart, Warning, Settings, Input,
    Dashboard, DataUsage
} from "@material-ui/icons";
const mainLinks = [
    {label : "Home", icon: Home, selected: true, link:"#home" },
    {label : "Report", icon: Wallpaper, selected: false, link:"#report" },
    {label : "Sine", icon: PieChart, selected: false,
        subMenu: [
            { label : "My Dashboard", icon: Dashboard, selected: false, link:"#mydashboard" },
            { label : "Data Discovery", icon: DataUsage, selected: false, link:"#datausage" },
        ]
    }
];

const bottomLinks = [
    {label : "Messages", icon: Warning, selected: false },
    {label : "Settings", icon: Settings, selected: false },
    {label : "Logout", icon: Input, selected: false, link:"#logout" }
];

render(<SideStrip mainLinks={mainLinks}
                  bottomLinks={bottomLinks}
                  expandMenu={false}
                  userLabel="Jane Smith"
                  imageUrl="https://material-ui.com/static/images/avatar/7.jpg"
/>, document.querySelector('#app'));