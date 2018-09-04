import { shallow } from 'enzyme';
import React from 'react';
import TodoAdd from './TodoAdd';
import { expect } from 'chai';
import sinon from 'sinon';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('should render a TodoAdd component', () => {
	const wrapper = shallow(<TodoAdd />);
	expect(wrapper.length).to.be.greaterThan(0);
});

it('should have a button element in the TodoAdd component', () => {
	const wrapper = shallow(<TodoAdd />);
	expect(wrapper.find('button').length).to.be.greaterThan(0);
});

it('should have a prop called onClick', () => {
	const wrapper = shallow(<TodoAdd />);
	expect(wrapper.props()).to.have.property('onClick');
});