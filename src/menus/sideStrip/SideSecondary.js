import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

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
                    <ListItemText primary={menuItem.label} />
                </ListItem>
            ))}
            </List>
        </Drawer>
    )
};

export const  SideSecondary = withStyles(styles, { withTheme: true })(SideSecondaryComponent);

