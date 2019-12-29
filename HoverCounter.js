import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class HoverCounter extends Component
{
  
  render() {
    return(
    <p onMouseOver={this.props.incrementCount}> {this.props.name} Hover {this.props.count} times </p> )
  }
}
export default UpdatedComponent(HoverCounter);
