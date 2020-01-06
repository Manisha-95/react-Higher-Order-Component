import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class App extends Component {
  
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
