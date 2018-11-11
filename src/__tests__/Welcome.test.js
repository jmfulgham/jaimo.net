import React from 'react';
import Welcome from '../components/Welcome/Welcome';
import {configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Typography from "@material-ui/core/Typography";

configure({ adapter: new Adapter() });

describe('<Welcome />', () => {
    let wrapper = shallow(<Welcome />);
    
    it('renders', () => {
        expect(wrapper).toBeTruthy();
    });
    it('finds Typography', ()=>{
        expect(wrapper.find(Typography)).toHaveLength(2);
    });
})