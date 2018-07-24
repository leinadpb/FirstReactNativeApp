import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'PROYECTAME',
            subtitle: 'Proyecta tu índice académico.'
        }
    }
    render(){
        let pic = {
          uri: require('./images/logo-intec.svg'),
        };

        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {this.state.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {this.state.subtitle}
                    </Text>
                    <View style={{marginTop:7, padding:3}}>
                        <Button onPress={() => {Alert.alert("PROYECTAME", "Let's begin our journey..");}} title="Comenzar" color="darkred" accesibilityLabel="¡Empieza a proyectar tu índice ahora!"  />
                    </View>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container:{
      marginTop:20,
      flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginTop:10,
        fontSize:32,
        fontWeight: 'bold',
        color:'darkred'
    },
    subtitle:{
        marginTop:5,
        fontSize:18,
        fontStyle:'italic',
        color:'#A9A3C2'
    }
});