import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Rotas from './src/Rotas';

export default class CaraOuCoroa extends Component {
  render() {
    return (
      // Todas as rotas estão isoladas em um único arquivo
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('caraOuCoroa', () => CaraOuCoroa);
