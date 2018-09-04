import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list/TodoList';
import TodoAdd from './components/todo-add/TodoAdd';

class App extends Component {
	render() {
		return (
			<div>
				<TodoList />
				<TodoAdd />
			</div>
		);
	}
}

export default App;
