import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Alert, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {List, ListItem} from 'react-native-elements';

class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details',
                        {
                            itemId: 86,
                            otherParam: 'anything else...',
                        }
                    )} />
                <Button title="Options"
                    onPress={() => this.props.navigation.navigate('Options')}/>
            </View>
        );
    }
}
class OptionsScreen extends React.Component{
    render(){
        let data = [
            {
                key: 112,
                name: 'Daniel Peña',
                career: 'Ingeniería de Software'
            },
            {
                key: 113,
                name: 'Reyna Suriel',
                career: 'Diseño Industrial'
            },
            {
                key: 114,
                name: 'Israel Peña',
                career: 'Ingeniería en Cyberseguridad'
            }
        ];
        return(
            <View>
                <FlatList data={data} renderItem={({item}) => <MyListItem name={item.name} career={item.career} />} />
            </View>
        );
    }
}
class MyListItem extends React.Component{
    render(){
        return(
            <View style={styles.listItemBox}>
                <Text style={styles.listItemTitle}>{this.props.name}</Text>
                <Text style={styles.listItemCareer}>{this.props.career}</Text>
            </View>

        );
    }
}
class DetailsScreen extends React.Component{
    render(){
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'Default text');

        return(
            <View style={styles.container}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                title: "Home",
                headerBackTitle: null,
            }),
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: () => ({
                title: "Details",
                headerTitleStyle: styles.headerTitle,
            }),
        },
        Options:{
            screen: OptionsScreen,
            navigationOptions: () => ({
                title: "Options",
                headerTitleStyle: styles.headerTitle,
            }),
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component{
    render(){
        return <RootStack />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        marginLeft:50,
    },
    listItemBox:{
        margin:7,
        backgroundColor:'darkred',
        color:'white',
        padding:5,
    },
    listItemTitle:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    listItemCareer:{
        color:'white',
        fontSize:17,
    }
});

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
];
