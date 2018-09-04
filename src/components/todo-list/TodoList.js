import React, { Component } from 'react';
import Todo from '../todo/Todo';

class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			todoItems: []
		};
	}

	render() {
		const todoListItems = this.state.todoItems.map((todoItem, index) => {
			return <Todo key={index} todoText={todoItem.text} />
		});

		return (
			<ul>{todoListItems}</ul>
		);
	}
}

export default TodoList;