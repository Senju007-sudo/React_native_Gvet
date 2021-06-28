import React,{useState} from 'react'
import { TextInput , Button } from 'react-native-paper'
import { StyleSheet , Text, View } from 'react-native'


export default function PropAdd() {

    const [nom,setNon] = useState("")
    const [prenoms,setPrenoms] = useState("")
    const [cin,setCin] = useState("")
    const [adresse,setAdresse] = useState("")
    const [tel,setTel] = useState("")
    return (
        <View>
            <TextInput style={styles.nom}
                label= "Nom"
                value= {nom}
                mode = "outlined"

                onChangeText = {text => setNom(nom)}


            />

        </View>
    )
}


const styles    = StyleSheet.create({

    nom: {

        padding: 10,
        margin:5
    }

})