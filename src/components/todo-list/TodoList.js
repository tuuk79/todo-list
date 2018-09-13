import React, { Component } from 'react';
import Todo from '../todo/Todo';

class TodoList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const todos = this.props.todos && this.props.todos.map((todo, index) => {
			return <Todo key={index} text={todo.text} />
		});

		return (
			<ul>{todos}</ul>
		);
	}
}

export default TodoList;