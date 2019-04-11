import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import { mount } from 'enzyme';
import { SideStrip } from "../src/menus/sideStrip/SideStrip";
import {Home, Input, Settings, Wallpaper, Warning} from "@material-ui/icons/index";

describe('<SideStrip /> Clicks', () => {
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

        const navButtons = wrapper.find("Button");
        const homeButton = navButtons.first();
        const homeButtonStartClass = homeButton.props().className;
        const settingsButton = navButtons.at(1);
        const settingsButtonStartClass = settingsButton.props().className;
        settingsButton.simulate("click");

        const navButtonsAfter = wrapper.find("Button");
        const homeButtonAfter = navButtonsAfter.first();
        const homeButtonAfterClass = homeButtonAfter.props().className;

        const settingsButtonAfter = navButtonsAfter.at(1);
        const settingsButtonAfterClass = settingsButtonAfter.props().className;

        assert.strictEqual(navButtons.length, 5, "nav Buttons");
        assert.strictEqual(homeButtonStartClass.indexOf("menuButtonActive"), 20, "button active");
        assert.strictEqual(settingsButtonStartClass.indexOf("menuButton"), 20, "button  not active");

        assert.strictEqual(settingsButtonAfterClass.indexOf("menuButtonActive"), 20, "button active after click");
        assert.strictEqual(homeButtonAfterClass.indexOf("menuButton"), 20, "button not active after click");
    });
});