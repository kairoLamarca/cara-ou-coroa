import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';

const Rotas = () => (
    /*padding para as cenas ficarem abaixo da barra */
    < Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='principal' component={Principal} initil title="Cara ou Coroa" />
        <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo" />
        <Scene key='outrosjogos' component={OutrosJogos} title="Outros Jogos" />
        <Scene key='resultado' component={Resultado} title="Resultado" />
    </Router >
);

export default Rotas;
