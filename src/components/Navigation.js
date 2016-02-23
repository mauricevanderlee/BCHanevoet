import React, { Component } from 'react';
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

export default class Navigation extends Component {
	render() {
		return (
			<Navbar staticTop={true}>
				<Nav>
					<NavItem eventKey={1} href="#">Hoofdpagina</NavItem>
					<NavItem eventKey={2} href="#">De Club</NavItem>
					<NavItem eventKey={3} href="#">Junioren</NavItem>
					<NavItem eventKey={4} href="#">Senioren</NavItem>
					<NavItem eventKey={5} href="#">Contact</NavItem>
				</Nav>
			</Navbar>
		)
	}
}
