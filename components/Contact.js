import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import images from './Image.js'





function Contact(props){

    
    return(
        <View>
            <Text style={styles.Title}>{'Le bateau de Thibault'}</Text>
            <View style={styles.Spacer}/>
            
            <Image source={require("../assets/TIG.png")} style={styles.buttonImage}/>
            <View style={styles.Spacer}/>
            <View>
    
                  <Text style={styles.text}>{'06.63.99.99.78'}</Text>
                  <Text style={styles.text2}>{'lebateaudethibault@gmail.com'}</Text>
                  <Text style={styles.text2}>{'www.facebook.com/lebateaudethibault'}</Text>
            <View style={styles.Spacer}/>
            <Text style={styles.text}>{"Qu'il est chaud le soleil"}</Text>
            <Text style={styles.text}>{'Quand nous sommes en vacances'}</Text>
            <Text style={styles.text}>{"Y a d'la joie, des hirondelles"}</Text>
            <Text style={styles.text}>{"C'est le sud de la France"}</Text>
            <Text style={styles.text}>{'Papa bricole au garage'}</Text>
            <Text style={styles.text}>{'Maman lit dans la chaise longue'}</Text>
            <Text style={styles.text}>{'Dans ce joli paysage'}</Text>
            <Text style={styles.text}>{'Moi, je me balade en tongs'}</Text>
            <Text style={styles.text}>{'Que de bonheur!'}</Text>
            <Text style={styles.text}>{'Que de bonheur!'}</Text>
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
        fontSize:15,
      },
      text2:{
        fontFamily: 'Noteworthy',
        color: 'gray',
        alignSelf: 'center',
        fontSize:15,
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

  export default Contact;