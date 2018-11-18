import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Routes from '../components/Routes/Routes'
configure({ adapter: new Adapter() });

describe('Routes', ()=>{
    it('renders', ()=>{
        let wrapper = shallow(<Routes/>);
        expect(wrapper.exists()).toBeTruthy();
    })
})