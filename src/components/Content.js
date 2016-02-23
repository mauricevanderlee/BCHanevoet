import React, { Component } from 'react';
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

export default class Content extends Component {
	render() {
		return (
			<Grid>
			<Row className="show-grid">
				<Col xs={12} md={8}>One column: <a>Tekst</a> to display</Col>
				<Col xs={12} md={4}>Second column</Col>
			</Row>
			</Grid>
		)
	}
}
