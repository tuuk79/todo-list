import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<label>
				<input type="checkbox"></input>
				<span>{this.props.todoText}</span>
			</label>
		);
	}
}

export default Todo;