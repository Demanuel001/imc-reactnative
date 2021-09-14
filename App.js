import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/componentes/Title';
import Form from './src/componentes/Form';
// import Main from './src/componentes/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
    paddingTop:80,
  },
});
