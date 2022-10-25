import React from 'react';
import { View , Text , ScrollView , StyleSheet , TextInput } from 'react-native'

function Input(props) {
    const secureText = () => {
        
        props.title == "Password" ?  i = true  : i = false 
        const secure = {
            secureTextEntry : {i}
        };
    }; 
  
    return (
       <View style={styles.containner}>
            <Text style={[styles.text,secureText]}> {props.name}</Text>
            <TextInput  
            style={styles.textinput}
            />
       </View>      
    );
}
const styles = StyleSheet.create({
    containner :{ 
        padding :20
    },
    text :{
        fontSize :14 , 
    },
    textinput :{
        borderColor : 'orange' ,
        borderWidth : 1 ,
        marginTop : 10 , 
        fontSize : 20, 
        
    }
})
export default Input;