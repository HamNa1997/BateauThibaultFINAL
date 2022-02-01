import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import images from './Image.js'





function Recettes(props){

    const { titre,imguri,p1,p2,p3 } = props; 
    return(
        <View>
            <Text style={styles.Title}>{titre}</Text>
            <View style={styles.Spacer}/>
            
            <Image source={images[imguri]} style={styles.buttonImage}/>
            <View style={styles.Spacer}/>
            <View>

            
            <Text style={styles.text}>{p1}</Text>
            <Text style={styles.text}>{p2}</Text>
            <Text style={styles.text}>{p3}</Text>
           
            </View>


        </View>
    )

}


const styles = StyleSheet.create({
    Title:{
        fontFamily: 'Noteworthy',
        color: 'white',
        alignSelf: 'center',
        fontSize:40,
        marginTop:20,
        textAlign:'center'
    },
    buttonImage:{
      alignSelf:'center',
        height:341,
        width:256,
      padding:0,
      marginTop:5
    },
    HomeButton:{
        flex:1,
        flexDirection:'row',
        marginRight:1,
        
        marginTop:2,
        backgroundColor:'rgba(0,0,0,.3)',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width:'100%',
        height:70,
      },

      HomeButton1:{
        
        marginRight:5,
        marginLeft:5,
        marginTop:5,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'rgba(0,0,0,.3)',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width:'100%',
        
      },
      Homepanel1:{

          display:'flex',
          flexDirection:'row',
          marginRight:5,
          marginLeft:5,


      },
      Homepanel2:{
        display:'flex',
        flexDirection:'row'
      },
      Spacer:{
        width:'100%',
        height:20,
      },
      text:{
        fontFamily: 'Noteworthy',
        color: 'black',
        alignSelf: 'center',
        textAlign:'center',
        fontSize:15,
        marginTop:10,
      },
      text2:{
        fontFamily: 'Noteworthy',
        color: 'gray',
        alignSelf: 'center',
        fontSize:18,
        fontStyle:"italic"
      },
      Spacer1:{
        width:'100%',
        height:100,
      },
      buttonText:{
        fontFamily: 'Noteworthy',
        color: 'white',
        marginLeft:10,
        fontSize:25,
      }
  
  });

  export default Recettes;