import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import { mount } from 'enzyme';
import { SideStrip } from "../src/menus/sideStrip/SideStrip";
import {Dashboard, DataUsage, Home, Input, Settings, Wallpaper, Warning} from "@material-ui/icons/index";

describe('<SideSeconadry /> Mouse Over', () => {
    const mainLinks = [
        {label : "Home", icon: Home, selected: true, link:"#home"  },
        {label : "Report", icon: Wallpaper, selected: false,
            subMenu: [
                { label : "My Dashboard", icon: Dashboard, link:"#mydashboard" },
                { label : "Data Discovery", icon: DataUsage, link:"#datausage" },
            ]  }
    ];

    const bottomLinks = [
        {label : "Messages", icon: Warning, selected: false },
        {label : "Settings", icon: Settings, selected: false },
        {label : "Logout", icon: Input, selected: false, link:"#logout" }
    ];
    it('component loads', () => {
        const wrapper = mount(<SideStrip mainLinks={mainLinks}
                                         expandMenu={false}
                                         bottomLinks={bottomLinks}
        />);

        const navButtons = wrapper.find("Button");
        const drawersBefore = wrapper.find("Drawer");
        const listItemsBefore = wrapper.find("ListItem");
        const settingsButton = navButtons.at(1);

        settingsButton.simulate("mouseOver");
        //after.
        const listItems = wrapper.find("ListItem");
        const drawers = wrapper.find("Drawer");
        const avatar = wrapper.find("Avatar");

        assert.strictEqual(listItemsBefore.length, 0, "# of secondary list items before mouse over");
        assert.strictEqual(drawersBefore.length, 1, "# of drawers before mouse over");
        //after mouse over
        assert.strictEqual(drawers.length, 2, "# of drawers");
        assert.strictEqual(avatar.length, 2, "avatar");
        assert.strictEqual(listItems.length, 2, "# of secondary list items");
    });
});