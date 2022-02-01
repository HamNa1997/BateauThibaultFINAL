import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


function RecettesPannel(props){

    const { navigation } = props; 
    return(
        <View>
            <Text style={styles.Title}>{'Le bateau de Thibault'}</Text>
                <View style={styles.Spacer}/>
                <View>
                  <Text style={styles.text}>{'Nos bateaux partenaires'}</Text>
                  <Text style={styles.text}>{'Tous les eaux ménent à Thibault'}</Text>
                  <Text style={styles.text}>{'06.63.99.99.78'}</Text>
                  <Text style={styles.text2}>{'lebateaudethibault@gmail.com'}</Text>
                  <Text style={styles.text2}>{'www.facebook.com/lebateaudethibault'}</Text>

                </View>
                <View style={styles.Spacer1}/>
            <View style={styles.Homepanel1}>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('homardRecette')}><Image source={require('../assets/homardRecette_icon.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'Homard'}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('saintJacques')}><Image source={require('../assets/saintJacques_icon.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'St Jacques'}</Text></TouchableOpacity>
                </View>
            <View style={styles.Homepanel1}>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('barRecette')}><Image source={require('../assets/barRecette_icon.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'Bar'}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('Tourteau')}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'Tourteau'}</Text></TouchableOpacity>
                </View>
                <View style={styles.Homepanel1}>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('RecetteXYZ')}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'Recette'}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('RecetteXYZ')}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'Recette'}</Text></TouchableOpacity>
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
        fontSize:25,
      }
  
  });


  export default RecettesPannel;