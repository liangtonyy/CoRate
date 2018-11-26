import React, { Component } from 'react';
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation auth={this.props.auth} />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="content">
                <h3>See what others have to say</h3>
                <button className="btn btn-default btn-lg">Find a coworker</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;