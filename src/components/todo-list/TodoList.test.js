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

it('should add a todo to the todo list', () => {
	const wrapper = shallow(<TodoList/>);

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

	wrapper.setState({todoItems: todoItems});

	const renderedTodos = wrapper.find(Todo).length;
	const stateTodoItems = wrapper.state().todoItems.length;

	expect(renderedTodos).to.equal(stateTodoItems);
});