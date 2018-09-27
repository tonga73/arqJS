import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent  } from 'react-mdl';

class Contact extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">

					<Cell col={6}>
						<span className="contact-header">
							<img alt={this.props.name} src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t1.0-1/p200x200/22089764_1994334754181728_412719131620178263_n.jpg?_nc_cat=103&oh=0ed68d11f9c27317b3a910ecd0038a69&oe=5C564D0D" />
							<h1 style={{margin: 0}}>Julia Sosa <small>Arquitecta</small></h1>
						</span>
						<p>I want everbody to be happy. That's what it's all about. We don't make mistakes we just have happy little accidents. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. Let's put some happy little clouds in our world. If we're going to have animals around we all have to be concerned about them and take care of them. Isn't that fantastic? You can just push a little tree out of your brush like that. If what you're doing doesn't make you happy - you're doing the wrong thing. Now let's put some happy little clouds in here. If these lines aren't straight, your water's going to run right out of your painting and get your floor wet. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart.</p>
					</Cell>

					<Cell style={{dislay: 'flex', textAlign: 'center', justifyContent: 'center'}} col={6}>
						<h1 className="contact-list-header" style={{margin: '0px'}}>Contactame</h1>
						<hr style={{borderTop: '3px dotted #333', width: '50%', margin: 'auto', paddingBottom: '5em'}}/>

						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{fontSize: '35px'}}>
										<i className="fa fa-phone" />
										(03755) - 444333
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{fontSize: '35px'}}>
										<i className="fa fa-mobile" />
										(03755) - 672213
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{fontSize: '35px'}}>
										<i className="fa fa-envelope" />
										arquitectajuliasosa@gmail.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{fontSize: '35px'}}>
										<i className="fab fa-skype" />
										Skype-ID
									</ListItemContent>
								</ListItem>
							</List>
						</div>							
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;