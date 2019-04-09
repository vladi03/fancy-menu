import React from 'react';
import { Drawer, Avatar, Divider,
    withStyles } from '@material-ui/core';
import { styles } from "./style";
import { Person } from "@material-ui/icons";
import { MenuButton } from "./MenuButton";

export const SideStripComponent = ({ classes, mainLinks, bottomLinks, expandMenu }) => (
    <Drawer
        classes={{ paper: classes.root }}
        variant="permanent"
        open={true}
    >
        <Avatar src="https://material-ui.com/static/images/avatar/7.jpg"  className={classes.avatarMain} >
            <Person/>
        </Avatar>
        <Divider className={classes.divider} />
        {mainLinks.map((link,index) => (
            <MenuButton key={index}
                        Icon={link.icon}
                        label={link.label}
                        showLabel={expandMenu}
                        selected={link.selected}
            />
          ))
        }

        <div style={{bottom: 0, position: "absolute"}}>
            {bottomLinks.map((link,index) => (
                <MenuButton key={index}
                            Icon={link.icon}
                            label={link.label}
                            showLabel={expandMenu}
                            selected={link.selected}
                />
            ))
            }
        </div>
    </Drawer>
);

export const  SideStrip = withStyles(styles, { withTheme: true })(SideStripComponent);