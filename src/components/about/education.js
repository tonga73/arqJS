import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
	render() {
		return(
			<Grid>
				<Cell col={8}>
					<h5>{this.props.startYear} - {this.props.endYear}</h5>
				</Cell>
				<Cell col={4}>
					<h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
					<small><i class="fas fa-map-marker-alt"></i> {this.props.location}</small>
					<p>{this.props.schoolDescription}</p>
				</Cell>
			</Grid>
		)
	}
}

export default Education;