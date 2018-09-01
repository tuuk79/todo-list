import { shallow } from 'enzyme';
import React from 'react';
import TodoList from './TodoList';
import Todo from '../todo/Todo';
import { expect } from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('should render a TodoList component', () => {
	const wrapper = shallow(<TodoList />);
	expect(wrapper.length).to.be.greaterThan(0);
});

it('should add a Todo component to TodoList component', () => {
	const todoItems = [
		{
			text: 'some todo item',
			isChecked: true
		},
		{
			text: 'another todo item',
			isChecked: false
		}
	];
	
	const wrapper = shallow(<TodoList/>);
	wrapper.setState({todoItems: todoItems});

	expect(wrapper.find(Todo).length).to.equal(wrapper.state().todoItems.length);
});