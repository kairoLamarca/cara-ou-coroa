import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';

export default class CaraOuCoroa extends Component {
  render() {
    return (
      <Router>
        <Scene key='principal' component={Principal} initil title="Cara ou Coroa" />
        <Scene key='sobrejogo' component={SobreJogo} />
        <Scene key='outrosjogos' component={OutrosJogos} />
      </Router>
    );
  }
}

AppRegistry.registerComponent('caraOuCoroa', () => CaraOuCoroa);
