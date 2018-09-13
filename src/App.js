import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list/TodoList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		}

		this.addTodo = this.addTodo.bind(this);
	}

	addTodo(todo) {
		todo = {
			text: 'hi',
			isChecked: true
		}

		let todos = this.state.todos.slice();
		todos.push(todo);

		this.setState({
			todos: todos
		});
	}

	render() {
		return (
			<div>
				<TodoList todos={this.state.todos}/>
				<button onClick={this.addTodo}>Add</button>
			</div>
		);
	}
}

export default App;
