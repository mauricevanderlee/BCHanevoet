import React, { Component } from 'react';
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;

export default class Content extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col xs={12} md={8}>One column: <a>Tekst</a> to display</Col>
					<Col xs={12} md={4}>
						<Panel header="Default">
		Panel content
						</Panel>

						<Panel header="Primary" bsStyle="primary">
		Panel content
						</Panel>

						<Panel header="Success" bsStyle="success">
		Panel content
						</Panel>

						<Panel header="Info" bsStyle="info">
		Panel content
						</Panel>

						<Panel header="Warning" bsStyle="warning">
		Panel content
						</Panel>

						<Panel header="Danger" bsStyle="danger">
		Panel content
						</Panel>
					</Col>
				</Row>
			</Grid>
		)
	}
}
