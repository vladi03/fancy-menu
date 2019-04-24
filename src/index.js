import './index.css'
import React from 'react'
import {render} from 'react-dom'
import { SideStrip } from './menus/sideStrip/SideStrip';
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

render(<SideStrip mainLinks={mainLinks}
                  bottomLinks={bottomLinks}
                  expandMenu={false}
                  userLabel="Jane Smith"
                  imageUrl="https://material-ui.com/static/images/avatar/7.jpg"
/>, document.querySelector('#app'));