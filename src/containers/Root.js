import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

export default class Root extends Component {
	render() {
		return (
			<div>
				<PageHeader />
				<Navigation />
				<Content />
			</div>
		)
	}
}
