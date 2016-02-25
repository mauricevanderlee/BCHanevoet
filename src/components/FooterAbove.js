import React, { Component } from 'react';
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

export default class FooterAbove extends Component {
	render() {
		return (
			<footer className='footer-above'>
				<Grid>
					<Row>
						<Col md={4}>
	<h3>Locatie</h3>
	<p>Sporthal "De Genderbeemd"<br />
	Sterkenburg 616<br />
	5653 NP Eindhoven</p>
						</Col>
						<Col md={4}>
	<h3>Sponsoren</h3>
	<p>Uw logo hier!</p>
						</Col>
						<Col md={4}>
	<h3>Volg ons op Social Media</h3>
	<p className="addthis_horizontal_follow_toolbox"></p>
						</Col>
					</Row>
				</Grid>
			</footer>
		)
	}
}
