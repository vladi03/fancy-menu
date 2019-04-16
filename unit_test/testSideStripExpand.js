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

    it('drawer expanded class name', () => {

        const mainContainer = wrapper.find("Drawer");
        const mainClass = mainContainer.props().classes.paper;

        assert.strictEqual(mainClass.indexOf("menuCollapse"), -1, "menu expanded");
        assert.strictEqual(mainClass.indexOf("menuExpand"), 70, "menu expanded");
    });

    it('drawer expand on event', () => {
        const wrapper = mount(<SideStrip mainLinks={mainLinks}
                                         expandMenu={false}
                                         bottomLinks={bottomLinks}
        />);

        const mainContainer = wrapper.find("Drawer");
        const mainClass = mainContainer.props().classes.paper;

        assert.strictEqual(mainClass.indexOf("menuExpand"), -1, "menu expanded");
        assert.strictEqual(mainClass.indexOf("menuCollapse"), 70, "menu expanded");
    });

    it('component expanded labels', () => {

        const navButtons = wrapper.find("Button");
        //.props().className
        const homeLabel = navButtons.first().text().trim();
        const logoutLabel = navButtons.at(4).text().trim();

        assert.strictEqual(navButtons.length, 5, "nav Buttons");
        assert.strictEqual(homeLabel, "Home", "nav Labels");
        assert.strictEqual(logoutLabel, "Logout", "nav Labels");
    });
});