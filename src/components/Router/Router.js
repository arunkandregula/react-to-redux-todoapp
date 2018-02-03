import React from 'react';
import PropTypes from 'prop-types';

function getCurrentPath(){
  /* eslint-disable no-restricted-globals */
  debugger;
  let path = document.location.pathname;
  path = path.substring(path.lastIndexOf('/'));
  return path;
}

export default class Router extends React.Component{
  state = {
    route: getCurrentPath()
  }
  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }
  getChildContext(){
    return {
      route : getCurrentPath(),
      linkHandler: this.handleLinkClick
    };
  }
  handleLinkClick = (to)=>{
    this.setState({
      route: to
    });
    history.pushState(null, '', to);
  }

  componentDidMount(){
    let that = this;
    window.onpopstate = function(){
      that.setState({
        route: getCurrentPath()
      });
    }
  }

  render(){
    return <div>{this.props.children}</div>;
  }
}

