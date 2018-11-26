import React from 'react';

class Navigation extends React.Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" onClick={this.goTo.bind(this, 'home')}>CoRate</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {
              !isAuthenticated() && (
                <li><button type="button" className="btn btn-primary" onClick={this.login.bind(this)}>Login</button></li>
              )
            }
            {
              isAuthenticated() && (
                <li><button type="button" className="btn btn-primary" onClick={this.logout.bind(this)}>Logout</button></li>
              )
            }
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation;