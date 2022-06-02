import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  static displayName = Footer.name;

  render () {
    return (
        <footer className="text-center ">
          <div className="text-center p-3">
           <p> Réalisé par Jason en Anthéstérion de l'an 515 avant JC</p>
          </div>
      </footer>
    );
  }
}
