import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import  { initshop } from '../store/action.js'

function Navbar(props){
    
    const { navigation } = props;

    const dispatch = useDispatch();
    const initthestore =(value)=> dispatch(initshop());
    const handlehome = (value) =>{
        initthestore();
        navigation.navigate('Vue0');
       
    }
    
        
        return (
            <View style={styles.Navbar}>
                <TouchableOpacity onPress={() => handlehome()} style={styles.home}><Image style={styles.homeLogo} source={require('../assets/homeLogo.png')}/></TouchableOpacity>
                <Image style={styles.baniere} source={require('../assets/navbarbg.png')}/>
                <TouchableOpacity onPress={() => navigation.navigate('Panier')} style={styles.cart}><Image style={styles.cartLogo} source={require('../assets/cartLogo.png')}/></TouchableOpacity>
                
            </View>
           
        );
            
}

const styles = StyleSheet.create({
    Navbar:{
        display:"flex",
        flexDirection:"row",
        width:'100%',
        height:70,
        backgroundColor:'black',

    },
    baniere:{
        width:'60%',
        height:70,
    },
    cart:{
        flex:1,
        width:'20%'
    },
    home:{
        flex:1,
        width:'20%'
    },
    homeLogo:{
        width:50,
        height:50,
        margin:10,
       
    },
    cartLogo:{
        width:50,
        height:50,
        margin:10,
        paddingRight:20
       
    }
  
  });


  export default function(props) {
    const navigation = useNavigation();
  
    return <Navbar {...props} navigation={navigation} />;
  }