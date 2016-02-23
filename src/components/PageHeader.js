import React, { Component } from 'react';
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var MenuItem = require('react-bootstrap').MenuItem;
var Glyphicon = require('react-bootstrap').Glyphicon;
import PageLogin from '../components/PageLogin';

export default class PageHeader extends Component {
	render() {
		return (
			<Navbar staticTop={true}>
				<Navbar.Header>
					<Navbar.Brand>
						<a className="sitelogo" href="./"></a>
						<div className="sitename">
							<a>BC HANEVOET <small>Website</small></a><br />
							Recreatieve Badminton Club in EINDHOVEN
						</div>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<PageLogin title="Welkom Gast!" id="Login">
						<MenuItem eventKey={1.1}>
							<Glyphicon glyph="log-in" />&nbsp;
							Inloggen
						</MenuItem>
						<MenuItem eventKey={1.2}>
							<Glyphicon glyph="question-sign" />&nbsp;
							Wachtwoord herstellen
						</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={1.3}>
							<Glyphicon glyph="pencil" />&nbsp;
							Registreren
						</MenuItem>
					</PageLogin>
				</Nav>
			</Navbar>
		)
	}
}
