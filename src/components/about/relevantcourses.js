import React, { Component } from 'react';
import { Cell } from 'react-mdl';

class Relevant extends Component {
	render() {
		return(
			<Cell col={3}>
				<div style={{display: 'block', textAlign: 'center'}}>
					<img style={{height: '60px'}} src={this.props.icon} alt={this.props.name}/> {this.props.course}
					<small>{this.props.about}</small>
				</div>
			</Cell>
		)
	}
}

export default Relevant;