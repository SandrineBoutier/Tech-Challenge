import React, { Component } from 'react';
import logo from '../wild-logo.png'
import './Header.css';

export class Header extends Component {
  static displayName = Header.name;

  render () {
      return (
          <header className="navbar d-flex justify-content-center">
              <div className="container-fluid d-flex justify-content-center">
                <img src={logo} alt="Wild Code School logo" width="120" height="40" />
                <span className="navbar-brand mb-0 h1">Les Argonautes</span>
              </div>
        </header>
    );
  }
}
