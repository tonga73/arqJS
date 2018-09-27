import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t1.0-1/p160x160/27545267_188956101859194_5580931424523149274_n.jpg?_nc_cat=111&oh=a4e5a475759a54c70dda5829841f1d31&oe=5C2359CE"
							alt="avatar"
							className="avatar-img"
						/>

						 <div className="banner-text">
						 	<h1>Arquitecta</h1>

						 	<hr />

						 	<p>Relevamiento | Diseño | Planos | Dirección de Obra | Asesoramiento General</p>
						 	
						 	<div className="social-links">

						 		{/* LinkedIn */}
						 		<a href="http://google.com" rel="noopener noreferrer" target="_blank">
						 			<i className="fab fa-linkedin" aria-hidden="true"></i>
						 		</a>

						 		{/* Instagram */}
						 		<a href="http://google.com" rel="noopener noreferrer" target="_blank">
						 			<i className="fab fa-instagram" aria-hidden="true"></i>
						 		</a>

						 		{/* Facebook */}
						 		<a href="http://google.com" rel="noopener noreferrer" target="_blank">
						 			<i className="fab fa-facebook" aria-hidden="true"></i>
						 		</a>

						 		{/* Email */}
						 		<a href="http://google.com" rel="noopener noreferrer" target="_blank">
						 			<i className="fa fa-envelope" aria-hidden="true"></i>
						 		</a>

						 	</div>
						 </div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;