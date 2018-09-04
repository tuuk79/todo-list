import React, { Component } from 'react';

class TodoAdd extends Component {
	constructor(props) {
		super(props);

		this.addTodo = this.addTodo.bind(this);
	}

	addTodo() {

	}

	render() {
		return (
			<button onClick={this.addTodo}></button>
		);
	}
}

export default TodoAdd;