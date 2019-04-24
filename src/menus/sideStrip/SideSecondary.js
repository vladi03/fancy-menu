import React from 'react';
import { Drawer, Avatar, List,
    ListItem, ListItemIcon, ListItemText, withStyles } from '@material-ui/core';
import { styles } from "./style";


export const SideSecondaryComponent = ({classes, show, menuParent, menuList, onClose}) => {
    return (
        <Drawer
            classes={{paper: classes.menuSecond  }}
            variant="persistent"
            open={show}
        >
            <Avatar
                className={classes.avatarMain}
            >
                <menuParent.icon />
            </Avatar>
            <p className={classes.userLabel}>{menuParent.label}</p>

            <List

            >
            {menuList.map((menuItem, index) => (
                <ListItem component="a"
                onClick={() => onClose()}
                          href={menuItem.link}
                          key={index} button>
                    <ListItemIcon>
                        <menuItem.icon />
                    </ListItemIcon>
                    <ListItemText inset primary={menuItem.label} />
                </ListItem>
            ))}
            </List>
        </Drawer>
    )
};

export const  SideSecondary = withStyles(styles, { withTheme: true })(SideSecondaryComponent);

