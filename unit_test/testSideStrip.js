import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import { mount } from 'enzyme';
import { SideStrip } from "../src/menus/sideStrip/SideStrip";
import { Drawer } from '@material-ui/core';
import {Home, Input, Settings, Wallpaper, Warning} from "@material-ui/icons/index";

describe('<SideStrip />', () => {
    const mainLinks = [
        {label : "Home", icon: Home, selected: true, link:"#home"  },
        {label : "Report", icon: Wallpaper, selected: false  }
    ];

    const bottomLinks = [
        {label : "Messages", icon: Warning, selected: false },
        {label : "Settings", icon: Settings, selected: false },
        {label : "Logout", icon: Input, selected: false, link:"#logout" }
    ];

    const wrapper = mount(<SideStrip mainLinks={mainLinks}
                                     expandMenu={false}
                                     bottomLinks={bottomLinks}
    />);

    it('component loads', () => {

        const drawers = wrapper.find("Drawer");
        const avatar = wrapper.find("Avatar");
        const navButtons = wrapper.find("Button");

        assert.strictEqual(drawers.length, 2, "# of drawers");
        assert.strictEqual(avatar.length, 2, "avatar");
        assert.strictEqual(navButtons.length, 5, "nav Buttons");
    });

    it('component buttons', () => {
        const navButtons = wrapper.find("Button");
        const navLabels = navButtons.first().text().trim();
        const homeHref = navButtons.first().props().href;
        const settingsHref = navButtons.at(1).props().href;
        const logoutHref = navButtons.at(4).props().href;
        const findLogoutIcon = navButtons.at(4).find("svg");

        assert.strictEqual(findLogoutIcon.length, 1, "find LogoutIcon");
        assert.strictEqual(navLabels, "", "nav Labels");
        assert.strictEqual(homeHref, "#home", "nav Labels");
        assert.strictEqual(settingsHref, undefined, "nav Labels");
        assert.strictEqual(logoutHref, "#logout", "nav Labels");
    });

    it('button selected', () => {
        const navButtons = wrapper.find("Button");
        const homeClass = navButtons.first().props().className;
        const settingsClass = navButtons.at(1).props().className;

        assert.strictEqual(homeClass.indexOf("menuButtonActive"), 61, "button active");
        assert.strictEqual(settingsClass.indexOf("menuButton"), 20, "button  not active");
    });
});