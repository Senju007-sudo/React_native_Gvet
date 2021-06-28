import React, { Component , useState , useEffect } from 'react'
import { Button, View , FlatList , Text , StyleSheet , Card ,Alert , TextInput, Modal } from 'react-native'
import {getProprietaires , getPropById} from   '../services/djangoAPI'
import ProprietaireItem from '../screens/ProprietaireItem'
import {FAB} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import PropAdd from '../screens/PropAdd';


const Stack = createStackNavigator();



export default class Proprietaire extends Component {

        constructor(props){
                super(props)
                this.state = {proprietaires : []
                }
        }

        LoadProprietaire(){
                getProprietaires().then(data => this.setState({ proprietaires : data}))
        }




        render() {


                return (
                        <View style={styles.main} onLayout={() => this.LoadProprietaire()} >
                                <TextInput style={styles.input} placeholder='inserer'/>
                                <Button style={styles.recherche} title='Recherche...'  />
                                <FlatList
                                         onRefresh = {() => this.LoadProprietaire()}
                                         refreshing = {false}
                                         data={this.state.proprietaires}
                                         keyExtractor= {(item) => item.id.toString()}
                                         renderItem={({item}) => <ProprietaireItem proprietaire={item}/>}
                                />

                                <FAB
                                   style={styles.fab}
                                   icon = "plus"
                                />

                        </View>
                )

        }
}

const styles = StyleSheet.create({
        main:{
                marginTop: 40,
                flex: 1
        },
        input:{
            marginLeft: 5,
            marginRight: 5,
            height: 50,
            borderColor:'#000000',
            borderWidth:1 ,
            paddingLeft: 5

        },
        recherche:{
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            height: 50,
            borderWidth:1,
            paddingLeft: 5
        },
        fab:{
                position:'absolute',
                margin: 16,
                bottom: 0,
                right: 0
        }
    })