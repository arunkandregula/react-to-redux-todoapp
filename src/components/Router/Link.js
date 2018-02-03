import React from 'react';
import PropTypes from'prop-types';
import classNames from 'classnames';
import './Link.css';

export default class Link extends React.Component{
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }

  handleClick = (event)=>{
    event.preventDefault();
    this.context.linkHandler(this.props.to);
  }

  render(){
    const hrefClass = classNames({
      'active': this.props.to === this.context.route,
      'Link': true
    });
    return <a href='#' onClick={this.handleClick} className={hrefClass}>{this.props.children}</a>;
  }
}