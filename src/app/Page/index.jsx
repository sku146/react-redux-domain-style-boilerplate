import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

export class Page extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidUpdate({ location }) {
    if (this.props.location !== location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div className="page-container">
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Page);
