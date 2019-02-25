import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveSmurf } from '../actions/index';

class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			height: ''
		};
	}

	addSmurf = (event) => {
		event.preventDefault();

		const newSmurf = {
			name: this.state.name,
			age: this.state.age,
			height: this.state.height
		};

		this.props.saveSmurf(newSmurf);
		this.setState({
			name: '',
			age: '',
			height: ''
		});
	};

	handleInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className="SmurfForm">
				<form onSubmit={this.addSmurf}>
					<input onChange={this.handleInputChange} placeholder="name" value={this.state.name} name="name" />
					<input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" />
					<input
						onChange={this.handleInputChange}
						placeholder="height"
						value={this.state.height}
						name="height"
					/>
					<button type="submit">Add to the village</button>
				</form>
			</div>
		);
	}
}

const mapStateToprops = (state) => {
	return {
		smurfs: state.smurfs,
		fetchingSmurfs: state.sfetchingSmurfs,
		addingSmurf: state.addingSmurf
	};
};

export default connect(mapStateToprops, { saveSmurf })(SmurfForm);
