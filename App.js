/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ListaItens from './src/components/lista-itens';

const App: () => React$Node = () => {
  return (
    <ListaItens></ListaItens>
  );
};

const styles = StyleSheet.create({
});

export default App;
