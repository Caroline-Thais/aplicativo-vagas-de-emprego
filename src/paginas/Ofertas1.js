import React, { Component } from 'react'
import { View, StyleSheet, ScrollView} from 'react-native'

import { NativeBaseProvider, Text, Box } from 'native-base'
import { textAlign } from 'styled-system';


  
export default function Ofertas(props)
{
    return(
<ScrollView>
        <NativeBaseProvider>
        <Box flex={1} bg="white"  justifyContent="center">

        <Box 
        margin={2}
        padding={2}
        bg="#87CEFA"
        p={4}
        _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      }}
    >
      
    <Text style={{textAlign:"center", color:"blue"}}>Comissário Latam</Text>
    Necessária aprovação Anac, inglês fluente, experiência em atendimento ao público. Envie seu currículo para rh@latam.com.br
             
          </Box>

          <Box
          margin={2}
          padding={2}
          bg="#87CEFA"
          p={4}
          _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
      }}
    >
      
    <Text style={{textAlign:"center", color:"blue"}}>Agente de aeroporto Gol</Text>
    Vaga para trabalhar no aeroporto de Congonhas. Enviar currículo para voegolrh@voegol.com.br
          </Box>
          <Box
          margin={2}
          padding={2}
          bg="#87CEFA"
          p={4}
          _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
          textAlign: "center"
      }}
    >
      
    <Text style={{textAlign:"center", color:"blue"}}>Comissário Emirates</Text>
    Processo seletivo para trabalhar na Emirates. Necessário fluência em inglês, mínimo de 1,55m de altura, estar dentro
                do IMC, não possuir tatuagens visíveis com o uniforme. Os interessados devem comparecer no dia 05/06/2021 no Sindicato dos Aeroviários
                em SP, levando currículo e foto tamanho passaporte. Devem seguir as orientações de 
                vestimenta do site careers.emirates.com/cabincrew
          </Box>

          <Box 
        margin={2}
        padding={2}
        bg="#87CEFA"
        p={4}
        _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      }}
    >
      
    <Text style={{textAlign:"center", color:"blue"}}>Comissário Passaredo</Text>
    Anac aprovada e inglês intermediário. Envie seu currículo para passaredo_rh@passaredo.com.br
             
          </Box>
        </Box>
    </NativeBaseProvider>
    </ScrollView>
    )
}
    const style = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: "#87CEFA",
        
        justifyContent: 'center',
    },  
});
