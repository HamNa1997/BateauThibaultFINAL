import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


function RestoPannel(props){

    const { navigation } = props; 
    return(
        <View>
            <Text style={styles.Title}>{'Restaurants partenaires'}</Text>
                <View style={styles.Spacer}/>
                <View>
                  <Text style={styles.text}>{'Tous les restaurants partenaires avec le bateau de Thibault'}</Text>      
                  <Text style={styles.text}>{'06.63.99.99.78'}</Text>
                  <Text style={styles.text2}>{'lebateaudethibault@gmail.com'}</Text>
                  <Text style={styles.text2}>{'www.facebook.com/lebateaudethibault'}</Text>

                </View>
                <View style={styles.Spacer1}/>
            <View style={styles.Homepanel1}>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('desGascons')}><Text style={styles.buttonText}>{'Bistrot des Gascons'}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('fousDeLIle')}><Text style={styles.buttonText}>{"Les fous de l'ile"}</Text></TouchableOpacity>
                </View>
            <View style={styles.Homepanel1}>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('bistrotLandais')}><Text style={styles.buttonText}>{'Bistrot Landais'}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('villa9Trois')}><Text style={styles.buttonText}>{'Villa 9-Trois'}</Text></TouchableOpacity>
                </View>
                <View style={styles.Homepanel1}>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('duSommelier')}><Text style={styles.buttonText}>{'Bistrot du Sommelier'}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('contact')}><Text style={styles.buttonText}>{'Devenez partenaire!'}</Text></TouchableOpacity>
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
      width:50,
      height:50,
      marginLeft:5,
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
        fontSize:18,
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
        fontSize:22,
      }
  
  });


  export default RestoPannel;