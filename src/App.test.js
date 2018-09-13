import { shallow, render } from 'enzyme';
import React from 'react';
import App from './App';
import TodoList from './components/todo-list/TodoList';
import { expect } from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('should render a TodoList component', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find(TodoList).length).to.be.greaterThan(0);
});

it('should render an `Add` button', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find('button').text()).to.equal('Add');
});

it('should add a todo to the list when calling addTodo function', () => {
	const wrapper = shallow(<App />);

	const todo = {
		text: 'some todo item',
		isChecked: true
	}

	wrapper.instance().addTodo(todo);
	expect(wrapper.state().todos.length).to.equal(1);
});

it('should display the todo list with zero todos on the page', () => {
	const wrapper = render(<App />);
	expect(wrapper.find('ul').length).to.be.greaterThan(0);
});

it('should render an `X` at the end of every todo in the list', () => {
	// todo
});

it('should delete the todo from the todo list', () => {
	// todo
});