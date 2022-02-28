import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'

import { NativeBaseProvider, Text, Box } from 'native-base';


export default function Ofertas1(props)
{
    
    return(
        <NativeBaseProvider>
                    <Box flex={1} bg="#87CEFA" alignItems="center" justifyContent="center">

            <Text>Bem vindo ao Portal Futuro Comissário!</Text>
               
        
            <TouchableOpacity style={style.button} onPress={() => props.clicarParaEnviar()}>
                <Text>Oportunidades</Text>
                <Text>(clique acima)</Text>
            </TouchableOpacity>


            </Box>
        </NativeBaseProvider>

        
    )
}

// Estilização do projeto 
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