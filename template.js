import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class App extends Component<props> {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Olá Mundo</Text>

      </View>
    );
  }
}

  // ESTILOS PARA APLICAR
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },

    titulo:{
      backgroundColor: '#696969',
      textAlign:"center",
      fontSize:42,
      paddingTop:20,
    },

  });

