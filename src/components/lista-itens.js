/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   ScrollView,
 } from 'react-native';
 import axios from 'axios';
 import Item from './item';
 
 class ListaItens extends Component {
     constructor(props) {
        super(props);

        this.state = { listaItens: [] };
     }

     async componentDidMount() {
        await this.obterRecursos();
     }

     async obterRecursos() {
        try {

            const resposta = await axios.get('https://jorgesantana.net.br/recursos/dmairr/api/itens.html');
            const lista = JSON.parse(resposta.data.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, ''));

            this.setState({listaItens: lista});
        }
        catch(e) {
            console.log('Erro ao obter recursos', JSON.stringify(e, null, ' '));
        }
     }

     render(){
        return (
            <ScrollView style={styles.fundoTela}>
                {this.state.listaItens.map(item => (<Item key={item.titulo} objeto={item}></Item>))}
            </ScrollView>
        );
     }
 }
 
 const styles = StyleSheet.create({
     fundoTela: {
         backgroundColor: '#ddd',
     },
 });
 
 export default ListaItens;
 