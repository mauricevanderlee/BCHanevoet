import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import FooterAbove from '../components/FooterAbove';
import Footer from '../components/Footer';

export default class Root extends Component {
	render() {
		return (
			<div>
				<PageHeader />
					<Navigation />
				<Content />
				<div className="footer-push"></div>
				<FooterAbove />
				<Footer />
			</div>
		)
	}
}
