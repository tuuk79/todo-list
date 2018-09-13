import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<input type="checkbox"></input>
				<span>{this.props.text}</span>
			</div>
		);
	}
}

export default Todo;