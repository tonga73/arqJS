import React, { Component } from 'react';
import { Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
	render() {
		return(
			<Cell col={2}>
				<div style={{display: 'block', textAlign: 'center'}}><img alt={this.props.name} style={{height: '60px'}} src={this.props.icon}/> {this.props.skill} <ProgressBar style={{marginTop: '5px'}} progress={this.props.progress} /> </div>
			</Cell>
		)
	}
}

export default Skills;