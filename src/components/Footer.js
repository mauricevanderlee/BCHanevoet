import React, { Component } from 'react';
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

export default class Footer extends Component {
	render() {
		return (
			<footer className='footer-below'>
				<Grid>
					<Row>
						<Col md={12}>
	<p>Copyright © 2003-2016 BC Hanevoet - Maurice van der Lee</p>
						</Col>
					</Row>
				</Grid>
			</footer>
		)
	}
}
