import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 1 };
	}

	toggleCategories() {

		if(this.state.activeTab === 0){
			return(
				<div className="projects-grid">
					{/* Proyecto 1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardActions expand style={{height: '176px', background: 'url(https://scontent.fcnq2-2.fna.fbcdn.net/v/t1.0-9/22089972_1994363827512154_8083437633878684364_n.jpg?_nc_cat=104&oh=d9335359d8f8414f6110052e86b5deec&oe=5C270EA3) center / cover'}}></CardActions>
						<CardTitle expand>
							Relevamiento 1
						</CardTitle>
						<CardText style={{'padding-top': '0'}}>
							We don't have to be concerned about it. We just have to let it fall where it will. There are no limits in this world. That's a crooked tree. We'll send him to Washington. All you need to paint is a few tools, a little instruction, and a vision in your mind. Just let this happen. We just let this flow right out of our minds.
						</CardText>
						<CardActions border>
							<Button colored>VER PROYECTO</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>			
				</div>
			)
		} else if(this.state.activeTab === 1) {
			return (
				<div className="projects-grid">
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardActions expand style={{height: '176px', background: 'url(https://scontent.fcnq2-2.fna.fbcdn.net/v/t31.0-8/22179918_1994509114164292_1326617332953120879_o.jpg?_nc_cat=100&oh=68e0f359709e60f3d5b5d12a22be3fab&oe=5C197021) center / cover'}}></CardActions>
						<CardTitle expand>
							Vivienda lineal
						</CardTitle>
						<CardText style={{'padding-top': '0'}}>
							We don't have to be concerned about it. We just have to let it fall where it will. There are no limits in this world. That's a crooked tree. We'll send him to Washington. All you need to paint is a few tools, a little instruction, and a vision in your mind. Just let this happen. We just let this flow right out of our minds.
						</CardText>
						<CardActions border>
							<Button colored>VER PROYECTO</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/* Proyecto 2 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardActions expand style={{height: '176px', background: 'url(https://scontent.fcnq2-2.fna.fbcdn.net/v/t31.0-8/22218270_1995440130737857_5217270754031663795_o.jpg?_nc_cat=111&oh=a39b64a87ded3ae8e298e14357c66000&oe=5C5CDEE6) center / cover'}}></CardActions>
						<CardTitle expand>
							Vivienda binuclear
						</CardTitle>
						<CardText style={{'padding-top': '0'}}>
							We don't have to be concerned about it. We just have to let it fall where it will. There are no limits in this world. That's a crooked tree. We'll send him to Washington. All you need to paint is a few tools, a little instruction, and a vision in your mind. Just let this happen. We just let this flow right out of our minds.
						</CardText>
						<CardActions border>
							<Button colored>VER PROYECTO</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/* Proyecto 3 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardActions expand style={{height: '176px', background: 'url(https://scontent.fcnq2-2.fna.fbcdn.net/v/t1.0-9/22539727_2003310589950811_5443346427003223783_n.jpg?_nc_cat=110&oh=46518d7861f85cd5d1409b43be668ca6&oe=5C202CB0) center / cover'}}></CardActions>
						<CardTitle expand>
							Mueble de estudio
						</CardTitle>
						<CardText style={{'padding-top': '0'}}>
							We don't have to be concerned about it. We just have to let it fall where it will. There are no limits in this world. That's a crooked tree. We'll send him to Washington. All you need to paint is a few tools, a little instruction, and a vision in your mind. Just let this happen. We just let this flow right out of our minds.
						</CardText>
						<CardActions border>
							<Button colored>VER PROYECTO</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>		
				</div>
			)
		} else if(this.state.activeTab === 2) {
			return (
				<div className="projects-grid">
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardActions expand style={{height: '176px', background: 'url(https://scontent.fcnq2-2.fna.fbcdn.net/v/t31.0-8/22499144_2003330969948773_4490080594958716116_o.jpg?_nc_cat=103&oh=afa469b6dfbe38300f4686e8fc96f24f&oe=5C548609) center / cover'}}></CardActions>
						<CardTitle expand>
							Planta bulevar
						</CardTitle>
						<CardText style={{'padding-top': '0'}}>
							We don't have to be concerned about it. We just have to let it fall where it will. There are no limits in this world. That's a crooked tree. We'll send him to Washington. All you need to paint is a few tools, a little instruction, and a vision in your mind. Just let this happen. We just let this flow right out of our minds.
						</CardText>
						<CardActions border>
							<Button colored>VER PROYECTO</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/* Proyecto 2 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardActions expand style={{height: '176px', background: 'url(https://scontent.fcnq2-2.fna.fbcdn.net/v/t1.0-9/29365796_2088325674782635_5300740175914074112_n.jpg?_nc_cat=108&oh=7f9c5029fb04698a3917e1c59ccf6921&oe=5C5AF330) center / cover'}}></CardActions>
						<CardTitle expand>
							Planta vivienda lineal
						</CardTitle>
						<CardText style={{'padding-top': '0'}}>
							We don't have to be concerned about it. We just have to let it fall where it will. There are no limits in this world. That's a crooked tree. We'll send him to Washington. All you need to paint is a few tools, a little instruction, and a vision in your mind. Just let this happen. We just let this flow right out of our minds.
						</CardText>
						<CardActions border>
							<Button colored>VER PROYECTO</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/* Proyecto 3 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardActions expand style={{height: '176px', background: 'url(https://scontent.fcnq2-2.fna.fbcdn.net/v/t1.0-9/31081514_2106148836333652_4268749862142476288_n.jpg?_nc_cat=110&oh=e912dc3e47df6b9d8a9b015d7818c2cd&oe=5C59E9F2) center / cover'}}></CardActions>
						<CardTitle expand>
							Anteproyecto local
						</CardTitle>
						<CardText style={{'padding-top': '0'}}>
							We don't have to be concerned about it. We just have to let it fall where it will. There are no limits in this world. That's a crooked tree. We'll send him to Washington. All you need to paint is a few tools, a little instruction, and a vision in your mind. Just let this happen. We just let this flow right out of our minds.
						</CardText>
						<CardActions border>
							<Button colored>VER PROYECTO</Button>
						</CardActions>
						<CardMenu style={{color: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>		
				</div>
			)
		} else if(this.state.activeTab === 3) {
			return (
				<div>
					<h1>Obras dirigidas</h1>
				</div>
			)
		}

	}

	render() {
		return(
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>Relevamiento</Tab>
					<Tab>Diseño</Tab>
					<Tab>Planos</Tab>
					<Tab>Dirección de Obra</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
					<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects;