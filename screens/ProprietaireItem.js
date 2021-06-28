import React, { Component } from 'react'
import { View , StyleSheet , Text , TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';



export class ProprietaireItem extends Component {


    render() {


        const proprietaire = this.props.proprietaire

        return (

            <View style={styles.main}>

                <View style={styles.main_header}>
                    <Text style={styles.id} >{proprietaire.id}</Text>
                    <Text style={styles.cin} >CIN  : {proprietaire.cin} </Text>
                </View>

                <View style={styles.main_desc}>
                 <Text style={styles.nom} >Nom : {proprietaire.nom}</Text>
                 <Text style={styles.prenoms} >Prenoms : {proprietaire.prenoms}</Text>
                 <Text style={styles.adresse} >Adresse : {proprietaire.adresse}</Text>
                 <Text style={styles.tel} >Telephone : {proprietaire.tel}</Text>
                </View>

                <View style={styles.main_footer}>
                    <TouchableOpacity
                         style={styles.delete}
                         onPress={() => {
                            Alert.alert("Suppression")
                         }}>

                        <Ionicons
                            name="md-trash"
                            size= {30}
                            color = 'red'
                        />
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
        main:{
            paddingTop: 10,
            height: 110,
            flexDirection: 'row',
        },
        main_header:{
            flex: 5,
            flexDirection: 'row'
        },
        main_desc:{
            flex: 6,
        },
        main_footer:{
            paddingRight:2,
            paddingLeft: 2,
        },
        id:{
            fontWeight: 'bold',
            fontSize:20,
            paddingRight: 5,
            paddingLeft: 2,
        },
        cin:{
            fontWeight: 'bold',
            fontSize: 14,
            flex: 7,
            paddingRight: 5,
            paddingLeft: 2,

        },
        nom:{

        },
        prenoms:{

        },
        adresse:{

        },
        tel:{

        }

})

export default ProprietaireItem;