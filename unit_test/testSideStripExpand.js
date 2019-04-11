import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import { mount } from 'enzyme';
import { SideStrip } from "../src/menus/sideStrip/SideStrip";
import {Home, Input, Settings, Wallpaper, Warning} from "@material-ui/icons/index";

describe('<SideStrip /> Expanded', () => {
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
                                     expandMenu={true}
                                     bottomLinks={bottomLinks}
    />);

    it('component expanded labels', () => {
        const navButtons = wrapper.find("Button");
        const homeLabel = navButtons.first().text().trim();
        const logoutLabel = navButtons.at(4).text().trim();

        assert.strictEqual(navButtons.length, 5, "nav Buttons");
        assert.strictEqual(homeLabel, "Home", "nav Labels");
        assert.strictEqual(logoutLabel, "Logout", "nav Labels");
    });
});