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
    it('component loads', () => {
        const wrapper = mount(<SideStrip mainLinks={mainLinks}
                                         expandMenu={false}
                                         bottomLinks={bottomLinks}
        />);
        const mainContainer = wrapper.find("Drawer");
        const avatar = wrapper.find("Avatar");
        const navButtons = wrapper.find("Button");
        const navLabels = navButtons.first().text().trim();
        const homeHref = navButtons.first().props().href;
        const settingsHref = navButtons.at(1).props().href;
        const logoutHref = navButtons.at(4).props().href;
        const findLogoutIcon = navButtons.at(4).find("svg");

        assert.strictEqual(mainContainer.length, 1, "main container");
        assert.strictEqual(avatar.length, 1, "avatar");
        assert.strictEqual(navButtons.length, 5, "nav Buttons");
        assert.strictEqual(findLogoutIcon.length, 1, "find LogoutIcon");
        assert.strictEqual(navLabels, "", "nav Labels");
        assert.strictEqual(homeHref, "#home", "nav Labels");
        assert.strictEqual(settingsHref, undefined, "nav Labels");
        assert.strictEqual(logoutHref, "#logout", "nav Labels");
    });

    it('component expanded', () => {
        const wrapper = mount(<SideStrip mainLinks={mainLinks}
                                         expandMenu={true}
                                         bottomLinks={bottomLinks}
        />);

        const navButtons = wrapper.find("Button");
        const homeLabel = navButtons.first().text().trim();
        const logoutLabel = navButtons.at(4).text().trim();

        assert.strictEqual(navButtons.length, 5, "nav Buttons");
        assert.strictEqual(homeLabel, "Home", "nav Labels");
        assert.strictEqual(logoutLabel, "Logout", "nav Labels");
    });
});