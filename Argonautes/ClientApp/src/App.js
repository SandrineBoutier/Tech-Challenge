import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { AddFetchArgonauts } from './components/AddFetchArgonauts';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

// ce composant (App.js) contient un composant <Route> dans un composant <Layout>
// <Layout> s'occupe du rendu d'éléments tels que le Header et le footer pour l'ensemble de l'application et les composants <Route> permettent d'indiquer les chemins vers des composants spécifiques
// Quand on lance l'application dans le navigateur, si on va sur la route /random-component, c'est le random-component qui sera rendu, si on va sur la route d'un autre composant,
// alors le random-component est ignoré dans le DOM et c'est le nouveau composant qui s'affiche.
// Comme <Layout> n'est pas rendu via une route, il est visible tout le temps, indépendamment de la route sur laquelle on se trouve.
  render () { 
    return (
      <Layout>
        <Route path='/' component={AddFetchArgonauts} />
      </Layout>
    );
  }
}
