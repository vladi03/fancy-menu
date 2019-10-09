# fancy-menu
Navigation Menus based on React JS and Material UI

# Example
The following example show a side menu with two sets of links:
[Running Example](https://vladi03.github.io/fancy-menu "Fancy Menu")

```javascript
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

export const DemoMenu = ()=> (
    <SideStrip mainLinks={mainLinks}
                 bottomLinks={bottomLinks}
                 expandMenu={false}
                 userLabel="Jane Smith"
                 imageUrl="https://material-ui.com/static/images/avatar/7.jpg"
/>);
```