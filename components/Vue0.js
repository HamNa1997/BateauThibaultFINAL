import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

class Vue0 extends Component {
    
    
 
    render() {
        const { navigation } = this.props;
        return (
            <View>
               
                
                <Text style={styles.Title}>Le bateau de Thibault</Text>
                <View style={styles.Spacer}/>
                <View>
                  <Text style={styles.text}>{'Vente en direct de notre bateau'}</Text>
                  <Text style={styles.text}>{'Produit selon la saison, Livraisons sur Paris'}</Text>
                  <Text style={styles.text}>{'06.63.99.99.78'}</Text>
                  <Text style={styles.text2}>{'lebateaudethibault@gmail.com'}</Text>
                  <Text style={styles.text2}>{'www.facebook.com/lebateaudethibault'}</Text>

                </View>
                <View style={styles.Spacer1}/>
                <View style={styles.Homepanel1}>
            
                <TouchableOpacity onPress={() => navigation.navigate('ProductPannel')} style={styles.HomeButton}>
                <Image source={require('../assets/poisson.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'Produits et promotions'}</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.Homepanel1}>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('BateauxPannel')}><Image source={require('../assets/ancre.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'Bateaux'}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('RestoPannel')}><Image source={require('../assets/restaurant.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'Restaurants'}</Text></TouchableOpacity>
                </View>
                <View style={styles.Homepanel1}>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('RecettesPannel')}><Image source={require('../assets/recette.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'Recettes'}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('contact')}><Image source={require('../assets/tourteau.png')}  style={styles.buttonImage}/><Text style={styles.buttonText}>{'Contact'}</Text></TouchableOpacity>
                </View>
            </View>
           
        );
    }
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
      width:70,
      height:70,
      marginLeft:5,
      padding:0,
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


  export default function(props) {
    const navigation = useNavigation();
  
    return <Vue0 {...props} navigation={navigation} />;
  }