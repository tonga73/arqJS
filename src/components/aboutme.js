import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './about/education';
import Experiencie from './about/experiencie';
import Skills from './about/skills';
import Relevant from './about/relevantcourses';

class About extends Component {
	render() {
		return(
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{textAlign: 'center'}}>
							<img 
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMvm3Rz3nNofP5YwFXn_SVRGu7Ds7rASocFR-HpgBZJA-b1m3"
								alt="avatar"
								style={{height: '200px'}}
							/>
						</div>

						<h2>Julia Sosa</h2>
						<h4 style={{color: 'grey'}}>Arquitecta</h4>
						<hr style={{width: '50%', borderTop: '3px solid #67B26F'}}/>
						<p>Me considero una persona responsable, dinámica y creativa. Deseo poner en páctica y transmitir todos los conocimientos adquiridos durante mi formación universitaria y poder formar parte de un equipo de trabajo que me permita desarrollar tanto personal como profesionalmente. Cuento con disponibilidad horaria y ansias de ampliar mi campo laboral hacia nuevos desafíos.</p>
						<hr style={{width: '50%', borderTop: '3px solid #67B26F'}}/>
						<h5>Dirección</h5>
						<p>Barrio 105 viviendas · casa 5</p>
						<h5>Ciudad</h5>
						<p>Campo Viera - Misiones</p>
						<h5>Teléfono</h5>
						<p>03755 - 672213</p>
						<h5>Correo Electrónico</h5>
						<p>arquitectajuliasosa@gmail.com</p>
						<h5>Web</h5>
						<p>arquitectajuliasosa.tk</p>
					</Cell>
					<Cell className="about-right-col" col={8}>
					  <h2>Formación</h2>
						<Education 
							startYear={2002}
							endYear={2006}
							schoolName="Técnico en constucciones"
							schoolDescription="E.P.E.T. nº3 Polonia"
							location="Oberá - Misiones"
						/>
						<Education 
							startYear={2007}
							endYear={2016}
							schoolName="Arquitectura"
							schoolDescription="Universidad Católica de Santa Fé"
							location="Posadas - Misiones"
						/>
					  <hr style={{borderTop: '3px solid #4ca2cd'}} />
					  <h2>Experiencia laboral</h2>
						<Experiencie 
							startYear={2014}
							endYear={2016}
							jobName="Estudio Soto y Gentiluomo"
							jobDescription="Dibujante"
							location="Posadas - Misiones"
						/>
						<Experiencie 
							startYear={2017}
							endYear="actualmente"
							jobName="Estudio JS"
							jobDescription="Arquitecta"
							location="Campo Viera - Misiones"
						/>
					  <hr style={{borderTop: '3px solid #4ca2cd'}} />
					  <h2>Habilidades</h2>
					  <Grid>
						<Skills 
							skill="PowerPoint"
							progress="85"
							icon="https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/PowerPoint_15.png"
							/>
						<Skills 
							skill="Excel"
							progress="80"
							icon="http://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Excel-icon.png"
							/>
						<Skills 
							skill="AutoCad"
							progress="95"
							icon="https://cdn2.iconfinder.com/data/icons/icons-mega-pack-1-and-2/256/Autodesk_AutoCAD.png"
							/>
						<Skills 
							skill="Corel Draw"
							progress="85"
							icon="https://cdn2.iconfinder.com/data/icons/coreldraw-graphics-suite-x6-icons/256/Corel_Draw_1.png"
							/>
						<Skills 
							skill="SketchUp"
							progress="95"
							icon="https://png.icons8.com/color/1600/google-sketchup.png"
							/>
						<Skills 
							skill="Photoshop"
							progress="85"
							icon="https://mir-s3-cdn-cf.behance.net/project_modules/disp/75564226303743.56353f2346c45.png"
							/>
					  </Grid>
					  <hr style={{borderTop: '3px solid #4ca2cd'}} />
					  <h2>Cursos relevantes</h2>
					  <Grid>
					  	<Relevant 
					  		course="Paisajismo"
					  		icon="http://www.paisajismoestrada.com/wp-content/uploads/2017/07/icon_forest.png"
					  	/>
					  	<Relevant 
					  		course="Gestión y control de obra"
					  		icon="https://freeiconshop.com/wp-content/uploads/edd/clipboard-list-outline-filled.png"
					  	/>
					  	<Relevant 
					  		course="Arquitectura bioclimática"
					  		icon="https://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-light-blue.png"
					  	/>
					  	<Relevant 
					  		course="Emprendimientos Constructivos"
					  		icon="https://cdn4.iconfinder.com/data/icons/buildings-4-4/66/155-512.png"
					  	/>
					  </Grid>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default About;