import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experiencie extends Component {
	render() {
		return(
			<Grid>
				<Cell col={8}>
					<h5>{this.props.startYear} - {this.props.endYear}</h5>
				</Cell>
				<Cell col={4}>
					<h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
					<small><i class="fas fa-map-marker-alt"></i> {this.props.location}</small>
					<p>{this.props.jobDescription}</p>
				</Cell>
			</Grid>
		)
	}
}

export default Experiencie;