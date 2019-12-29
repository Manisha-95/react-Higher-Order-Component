import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <ClickCounter/>
         <HoverCounter/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
