import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, deleteSmurf } from '../actions/index';

// import Smurf from './Smurf';

class Smurfs extends Component {
	componentDidMount() {
		this.props.fetchSmurfs();
	}
	render() {
		return (
			<div className="Smurfs">
				<h1>Smurf Village</h1>
				<ul>
					{this.props.smurfs.map((smurf) => {
						return (
							<div className="Smurf">
								<h3>{smurf.name}</h3>
								<h2>
									{' '}
									<button onClick={() => this.props.deleteSmurf()}>DELETE </button>
								</h2>
								<strong>{smurf.height} tall</strong>
								<p>{smurf.age} smurf years old</p>
							</div>
						);
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToprops = (state) => {
	return {
		smurfs: state.smurfs,
		fetchingSmurfs: state.fetchingSmurfs,
		addingSmurf: state.addingSmurf
	};
};
export default connect(mapStateToprops, { fetchSmurfs, deleteSmurf })(Smurfs);
