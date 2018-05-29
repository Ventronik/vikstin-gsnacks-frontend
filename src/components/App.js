import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AuthenticatedRoute } from '../helpers'

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
        <div>
          <div className="container">
          </div>
          {/* <Switch> */}
          <p>'HAMBRUGARZ'</p>
          {/* </Switch> */}
        </div>
      // </BrowserRouter>
    );
  }
}

export default App;
