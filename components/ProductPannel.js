import React, { Component ,PropTypes, useState}  from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView, Modal, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar.js';


function ProductPannel(props){

    const { navigation } = props;

    return(
        <View>
            <Navbar></Navbar>
            <Text style={styles.ProductTitle} >{"Choisissez vos produit"}</Text>
            <TouchableOpacity style={styles.ProductButton} onPress={() => navigation.navigate('poissons')} ><View style={styles.ProductInfo}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.ProductName}>{'Poissons'} </Text></View></TouchableOpacity>
            <TouchableOpacity style={styles.ProductButton} onPress={() => navigation.navigate('coquillages')} ><View style={styles.ProductInfo}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.ProductName}>{'Coquillages'} </Text></View></TouchableOpacity>
            <TouchableOpacity style={styles.ProductButton} onPress={() => navigation.navigate('araignee')} ><View style={styles.ProductInfo}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.ProductName}>{'Crustacés'} </Text></View></TouchableOpacity>
            <TouchableOpacity style={styles.ProductButton} onPress={() => navigation.navigate('promo')} ><View style={styles.ProductInfo}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.ProductName}>{'Promotions'} </Text></View></TouchableOpacity>
        </View>

        
    )



}




const styles = StyleSheet.create({

    ProductButton:{
       
        paddingRight:0,
        marginTop:5,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'rgba(0,0,0,.3)',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        height:170
      },
    
      ProductInfo:{
        flexDirection:'row',
       

    },
    ProductName:{
        flex:2,
        fontFamily: 'Noteworthy',
        color: 'white',
        marginLeft: 10,
        marginTop:40,
        fontSize:40
      },
    
      buttonImage:{
        
        width:150,
        height:150,
        padding:0,
        
      },

      ProductTitle:{
        fontFamily: 'Noteworthy',
        textAlign: 'center',
        marginTop: 10,
        fontSize:20,
      }



});


export default ProductPannel;