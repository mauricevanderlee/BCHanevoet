import React from 'react';
//import Dropdown from './node_modules/bootstrap-material-design/less/Dropdown';
var Dropdown = require('react-bootstrap').Dropdown;

class PageLogin extends React.Component {

  render() {
    let { children, title, noCaret, ...props } = this.props;

    return (
      <Dropdown {...props} componentClass="li">
        <Dropdown.Toggle
          useAnchor
          disabled={props.disabled}
          noCaret={noCaret}
        >
          <i className="material-icons">account_circle</i>&nbsp;
		  {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {children}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

PageLogin.propTypes = {
  noCaret: React.PropTypes.bool,
  title: React.PropTypes.node.isRequired,
  ...Dropdown.propTypes
};

export default PageLogin;