import { shallow, mount } from 'enzyme';
import React from 'react';
import Todo from './Todo';
import { expect } from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('should create a Todo component', () => {
	const wrapper = shallow(<Todo />);
	expect(wrapper.length).to.be.greaterThan(0);
});

it('should render a checkbox in the Todo component', () => {
	const wrapper = shallow(<Todo />);
	expect(wrapper.find('input[type="checkbox"]').length).to.equal(1);
});

it('should render a Todo with text', () => {
	const wrapper = mount(<Todo todoText="do something"/>);
	expect(wrapper.find('label').text()).to.equal(wrapper.props().todoText);
});