/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   View,
   Text,
   Image,
   StyleSheet,
 } from 'react-native';
 
 class Item extends Component {
     constructor(props) {
        super(props);
        this.state = {};
     }

     componentDidMount() {
         this.setState({uriImagem: this.props.objeto.foto})
     }

     loadFallbackImage() {
        const imagemFallback = 'https://static.thenounproject.com/png/504708-200.png';

        this.setState({uriImagem: imagemFallback});
     }

     render(){
        return (
            <View style={styles.item}>
                <View style={styles.foto}>
                    <Image style={{width: '100%', height: '100%'}}
                        source={{ uri: this.state.uriImagem }} 
                        onError={() => this.loadFallbackImage()}>
                    </Image>
                </View>
                <View style={styles.descricaoItem}>
                    <Text style={styles.tituloAnuncio}>{this.props.objeto.titulo}</Text>
                    <Text style={styles.valor}>R$ {this.props.objeto.valor}</Text>
                    <Text style={styles.textoItem}>Local: {this.props.objeto.local_anuncio}</Text>
                    <Text style={styles.textoItem}>Data: {this.props.objeto.data_publicacao}</Text>
                </View>
            </View>
        );
     }
 }
 
 const styles = StyleSheet.create({
     item: {
        borderWidth: 0.7,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
     },
     foto: {
        width: 180,
        height: 140,
     },
     descricaoItem: {
         marginLeft: 20,
         flex: 1,
     },
     tituloAnuncio: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 18,
     },
     valor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 5,
     },
     textoItem: {
         fontSize: 15,
     }
 });
 
 export default Item;
 