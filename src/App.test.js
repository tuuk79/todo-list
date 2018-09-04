import { shallow, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './components/todo-list/TodoList';
import TodoAdd from './components/todo-add/TodoAdd';
import { expect } from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should render a TodoList component', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find(TodoList).length).to.be.greaterThan(0);
});

it('should render a TodoAdd component', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find(TodoAdd).length).to.be.greaterThan(0);
});
