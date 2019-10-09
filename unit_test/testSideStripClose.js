import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import { mount } from 'enzyme';
import { SideStrip } from "../src/menus/sideStrip/SideStrip";
import {Home, Input, Settings, Wallpaper, Warning} from "@material-ui/icons/index";

describe('<SideStrip /> Close', () => {
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

        const closeButtons = wrapper.find("IconButton");
        const avatar = wrapper.find("Avatar");
        //open the side menu
        avatar.at(0).simulate("mouseOver");
        const closeButtonsAfter = wrapper.find("IconButton");
        //close the side menu
        closeButtonsAfter.at(0).simulate("click");
        const closeButtonsLast = wrapper.find("IconButton");
        //test results
        assert.strictEqual(closeButtons.length, 0, "No Close Button");
        assert.strictEqual(avatar.length, 1, "avatar on canvas");
        assert.strictEqual(closeButtonsAfter.length, 1, "Has Close Button");
        assert.strictEqual(closeButtonsLast.length, 0, "No Close Button after click");
    });
});