import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component{
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext(){
    // Mistake 1 : return this.props.store;
    return {
      store: this.props.store
    };
  }

  render(){
    return this.props.children;
  }
}

export default Provider;