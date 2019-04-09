import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import { mount } from 'enzyme';
import { SideStrip } from "../src/menus/sideStrip/SideStrip";
import { Drawer } from '@material-ui/core';
import {Home, Input, Settings, Wallpaper, Warning} from "@material-ui/icons/index";

describe('<SideStrip />', () => {
    const mainLinks = [
        {label : "Home", icon: Home, selected: true  },
        {label : "Report", icon: Wallpaper, selected: false  }
    ];

    const bottomLinks = [
        {label : "Messages", icon: Warning, selected: false },
        {label : "Settings", icon: Settings, selected: false },
        {label : "Logout", icon: Input, selected: false }
    ];
    it('component loads', () => {
        const wrapper = mount(<SideStrip mainLinks={mainLinks}
                                         expandMenu={false}
                                         bottomLinks={bottomLinks}
        />);
        const mainContainer = wrapper.find("Drawer");
        const avatar = wrapper.find("Avatar");
        const navButtons = wrapper.find("Button");
        const navLabels = navButtons.first().text().trim(); //wrapper.find("span.MenuButtonComponent-menuButtonLabel-62");

        assert.strictEqual(mainContainer.length, 1, "main container");
        assert.strictEqual(avatar.length, 1, "avatar");
        assert.strictEqual(navButtons.length, 5, "nav Buttons");
        assert.strictEqual(navLabels, "", "nav Labels");
    });

    it('component expanded', () => {
        const wrapper = mount(<SideStrip mainLinks={mainLinks}
                                         expandMenu={true}
                                         bottomLinks={bottomLinks}
        />);

        const navButtons = wrapper.find("Button");
        const homeLabel = navButtons.first().text().trim(); //wrapper.find("span.MenuButtonComponent-menuButtonLabel-62");

        assert.strictEqual(navButtons.length, 5, "nav Buttons");
        assert.strictEqual(homeLabel, "Home", "nav Labels");
    });
});