import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {notificationManager} from './src/NotificationManager'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Index from './src/paginas/index'
import Ofertas1 from './src/paginas/Ofertas1'
import { alignItems } from 'styled-system';

const Stack = createStackNavigator();
const notificador = notificationManager;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    notificador.configurar()
    notificador.criarCanal()
    notificador.agendarNotificacao()
      
  }

  clicarParaEnviar = () => {
    notificador.exibirNotificacao(
      1,
      'Vaga',
      'Envie seu currículo',
      {}, // data
      {}, // options
    );
  };


  cancelar = () => {
    notificador.cancelar();
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Index" options={{title: "Portal Futuro Comissário"}}>
          { 
               ({navigation}) => 
               {
                notificador.definirNavegador(navigation);
                return(<Index navegador={navigation} clicarParaEnviar={this.clicarParaEnviar} cancelar={this.cancelar}/>)
              }
            }
            </Stack.Screen>


          <Stack.Screen name="Ofertas1" options={{title: "Oportunidades"}}>
            { 
              ({navigation}) => { return(<Ofertas1 navegador ={navigation} />)}
            }          
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/* Estilização do projeto */
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10,
  },
});
