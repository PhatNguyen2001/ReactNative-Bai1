import React from 'react';

import { View , Text , ScrollView , StyleSheet , TouchableHighlight } from 'react-native';
import Input from './Input' ;
import Buttons from './Buttons';
import { Link } from '@react-navigation/native';

function SignIn(props) {
    return (
        <View style={styles.container}> 
            <Input name="Your Email"/>
            <Input  name="Password"/>
            <Buttons name="Sign in"/>
            <View style = {styles.containText}> 
                <TouchableHighlight
                onPress={() => this.submitSuggestion(this.props)}
                underlayColor='#fff'>
                <Text style={styles.containText}><Text>Forgot your Password ?</Text> </Text>
                </TouchableHighlight>
            </View> 
            
           
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex :1 , 
        top : '15%'
        // justifyContent: 'center' , 
        // alignItems : 'center' , 
    },
    containText :{
        marginTop : 25 , 
        alignItems : 'center' ,
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    
})

export default SignIn;