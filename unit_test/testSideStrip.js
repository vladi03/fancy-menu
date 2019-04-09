import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import { mount } from 'enzyme';
import { SideStrip } from "../menus/sideStrip/SideStrip";

describe('<SideStrip />', () => {
    it('component loads', () => {
        const wrapper = mount(<SideStrip />);
        const mainContainer = wrapper.find("div");
        assert.strictEqual(mainContainer.length, 1, "found main container");
    });
});