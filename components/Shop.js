import React, { Component ,PropTypes, useState}  from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView, Modal, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar.js';
import { addcart, changeok, deletecart, changeqty, incqty, decqty, changesom, changepoint, initshop} from '../store/action.js';
import { GenrateDate } from '../Utils/GenrateDate.js';

function Shop(props){
    
            
        
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [points,setpoints] = useState([
      {id:'1',Nom:'Bistrot des Gascons',t:2},
      {id:'2',Nom:'Café des Phares',t:3},
      {id:'3',Nom:'Le Vert Tulipe',t:4},
      {id:'4',Nom:'Ruche qui dit Oui',t:5},
  ]);
  
  const [productID,setproductID] = useState('');     
    
    
   
        
  
    const dispatch = useDispatch();
    const ModalHandler = (ID) =>{
      setproductID(ID)
      setModalVisible(!modalVisible)
    }        
    const addproduit =(value)=> dispatch(addcart(value));
    const changetook = (value)=> dispatch(changeok(value));
    const deleteproduit = (value) => dispatch(deletecart(value));
    const changetheqty = (value) => dispatch(changeqty(value));
    const inctheqty = (value) => dispatch(incqty(value));
    const dectheqty = (value) => dispatch(decqty(value));
    const changethesomme = (value) => dispatch(changesom(value));
    const changethepoint = (value) => dispatch(changepoint(value));

    const handlerPoint = (value) => {
      changethepoint(value);
      setModalVisible2(!modalVisible2);
    }
    const handleproduit = (value) => {
        if(!value.ok){
            
          addproduit(value);
          changetook(value);
        }else{
            deleteproduit(value);
            changetook(value);
        }
    }
    const handleaddingqty=(value)=>{
      changetheqty({qty:value,id:productID})
      setModalVisible(!modalVisible)

    }
    const handleValidation=()=>{
      initthestore();
      setModalVisible3(!modalVisible3);
      alert('Commande envoyée !!');
      
    }
    const handleincqty=()=>{
      inctheqty({id:productID})
      setModalVisible(!modalVisible)
    }

    const handledecqty=()=>{
      dectheqty({id:productID})
      setModalVisible(!modalVisible)
    }

    const handleSOMME=()=>{
      let item = useSelector(state => state.panier)
      let somme = 0
      for(let i =0; i<item.length; i++){
        somme = somme + (item.prix * item.qty)
      }
      changethesomme(somme)
    }
    const initthestore =(value)=> dispatch(initshop());
    const handlehome = (value) =>{
      initthestore();
     
  }
    
 
    
         
      
         
        if(props.display=="poissons"){
            let poissons1 = []
            const elements = useSelector(state => state.panier)
            const poissons = useSelector(state => state.poissons)
            for(const [index, value] of poissons.entries()){
                if(value.Type=='poissons'){
                poissons1.push(<TouchableOpacity  onPress={() => handleproduit(value)} style={styles.ProductButton} key={index} ><View style={styles.ProductInfo}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.ProductName}>{value.Nom} </Text><Text style={styles.ProductPrix}>{value.prix}{'€'} </Text><View style={{opacity:value.ok ? 1:0}}><Text style={styles.ProductOK}>{'OK'}</Text></View></View></TouchableOpacity>)
                }
            }
            return(
                
                <View>
                    <ScrollView scrollEnabled={true}>
                    <Navbar></Navbar>
                    
                    <View ><Text style={styles.ProductTitle}>{"Choisissez vos produit"}</Text></View>
                    {poissons1}
                    
                   
                    </ScrollView>
                </View>
            );
        }
        if(props.display=="coquillages"){
          let poissons1 = []
          const elements = useSelector(state => state.panier)
          const poissons = useSelector(state => state.poissons)
          for(const [index, value] of poissons.entries()){
              if(value.Type=='coquillages'){
              poissons1.push(<TouchableOpacity  onPress={() => handleproduit(value)} style={styles.ProductButton} key={index} ><View style={styles.ProductInfo}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.ProductName}>{value.Nom} </Text><Text style={styles.ProductPrix}>{value.prix}{'€'} </Text><View style={{opacity:value.ok ? 1:0}}><Text style={styles.ProductOK}>{'OK'}</Text></View></View></TouchableOpacity>)
              }
          }
          return(
              
              <View>
                  <ScrollView scrollEnabled={true}>
                  <Navbar></Navbar>
                  
                  <View ><Text style={styles.ProductTitle}>{"Choisissez vos produit"}</Text></View>
                  {poissons1}
                  
                  
                  </ScrollView>
              </View>
          );
      }
      if(props.display=="araignee"){
        let poissons1 = []
        const elements = useSelector(state => state.panier)
        const poissons = useSelector(state => state.poissons)
        for(const [index, value] of poissons.entries()){
            if(value.Type=='araignee'){
            poissons1.push(<TouchableOpacity  onPress={() => handleproduit(value)} style={styles.ProductButton} key={index} ><View style={styles.ProductInfo}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.ProductName}>{value.Nom} </Text><Text style={styles.ProductPrix}>{value.prix}{'€'} </Text><View style={{opacity:value.ok ? 1:0}}><Text style={styles.ProductOK}>{'OK'}</Text></View></View></TouchableOpacity>)
            }
        }
        return(
            
            <View>
                <ScrollView scrollEnabled={true}>
                <Navbar></Navbar>
                
                <View ><Text style={styles.ProductTitle}>{"Choisissez vos produit"}</Text></View>
                {poissons1}
                
                
                </ScrollView>
            </View>
        );
    }
    if(props.display=="promo"){
      let poissons1 = []
      const elements = useSelector(state => state.panier)
      const poissons = useSelector(state => state.poissons)
      for(const [index, value] of poissons.entries()){
          if(value.Type=='promo'){
          poissons1.push(<TouchableOpacity  onPress={() => handleproduit(value)} style={styles.ProductButton} key={index} ><View style={styles.ProductInfo}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.ProductName}>{value.Nom} </Text><Text style={styles.ProductPrix}>{value.prix}{'€'} </Text><View style={{opacity:value.ok ? 1:0}}><Text style={styles.ProductOK}>{'OK'}</Text></View></View></TouchableOpacity>)
          }
      }
      return(
          
          <View>
              <ScrollView scrollEnabled={true}>
              <Navbar></Navbar>
              
              <View ><Text style={styles.ProductTitle}>{"Choisissez vos produit"}</Text></View>
              {poissons1}
              
              
              </ScrollView>
          </View>
      );
  }

        if(props.display=="panier"){
            let elements = useSelector(state => state.panier)
            let selectedpoint = useSelector(state => state.point)
            let produitspanier = [];
            let pointsdisplay =[]
            let Somme =0;
            let item = elements;
            let Condition = '';
            let date = '';
            let pointnom= '';
            if (JSON.stringify(selectedpoint)!='{}'){
              date=GenrateDate(selectedpoint.t);
              pointnom=selectedpoint.Nom;
            }
            
            
            for(let i =0; i<item.length; i++){
              Somme = Somme + (item[i].prix * item[i].qty)
              
            }

            for(const [index, value] of elements.entries()){
                produitspanier.push(<TouchableOpacity  onPress={() => ModalHandler(value.id)} style={styles.ProductButton} key={index} ><View style={styles.ProductInfo}><Image source={require('../assets/poulpe.png')}  style={styles.buttonImage}/><Text style={styles.ProductName}>{value.Nom} </Text><Text style={styles.ProductPrix}>{value.qty}{'x'}{value.prix}{'€'} </Text></View></TouchableOpacity>)
            }
            for(const[index,value] of points.entries()){
               pointsdisplay.push(<Pressable key={value.id} onPress={()=>handlerPoint({Nom:value.Nom,t:value.t})} style={styles.ModdalButton}><Text style={styles.ModdalText}>{value.Nom}</Text></Pressable>)
            }
            return(
            <View>
                
                <ScrollView scrollEnabled={true}>
                    <Navbar>

                    </Navbar>
                    <View ><Text style={styles.ProductTitle}>{"Modifiez la quantité en tappant sur chaque produit"}</Text></View>
                    {produitspanier}
                    <View style={styles.ValidationBox}>
                    <Text style={styles.Somme}>{'Total:'}{Somme}{'€'}</Text>
                    <Pressable style={styles.pressableinbox} onPress={()=>setModalVisible2(!modalVisible2)}><Text style={styles.textinpressable}>{'Lieu de livraison (Choisir)'}</Text></Pressable>
                    <Text style={styles.Boxtxt}>{pointnom}</Text>
                    <Text style={styles.Boxtxt}>{'Date de livraison'}</Text>
                    <Text style={styles.Boxtxt}>{date}</Text>
                    <Text style={styles.Somme} onPress={()=>setModalVisible3(!modalVisible3)}>{'Valider'}</Text>
                    </View>
                    <Modal transparent={true} animationType="slide" visible={modalVisible}>
                    <View style={styles.modalView}>
                        <Text style={styles.ModdalText}>{'Choisissez la quantité'}</Text>
                        <Pressable style={styles.ModdalButton} onPress={() => handleaddingqty(0)}><Text style={styles.ModdalText}>{'0'}</Text></Pressable>
                        <Pressable style={styles.ModdalButton} onPress={() => handleaddingqty(1)}><Text style={styles.ModdalText}>{'1'}</Text></Pressable>
                        <Pressable style={styles.ModdalButton} onPress={() => handleaddingqty(2)}><Text style={styles.ModdalText}>{'2'}</Text></Pressable>
                        <Pressable style={styles.ModdalButton} onPress={() => handleaddingqty(3)}><Text style={styles.ModdalText}>{'3'}</Text></Pressable>
                        <Pressable style={styles.ModdalButton} onPress={() => handleaddingqty(4)}><Text style={styles.ModdalText}>{'4'}</Text></Pressable>
                        <Pressable style={styles.ModdalButton} onPress={() => handleaddingqty(5)}><Text style={styles.ModdalText}>{'5'}</Text></Pressable>
                        <Pressable style={styles.ModdalButton} onPress={() => handleincqty()}><Text style={styles.ModdalText}>{'Ajouter 1'}</Text></Pressable>
                        <Pressable style={styles.ModdalButton} onPress={() => handledecqty()}><Text style={styles.ModdalText}>{'Enlever 1'}</Text></Pressable>
                        <Pressable style={styles.ModdalButton} onPress={() => setModalVisible(!modalVisible)}><Text style={styles.ModdalText}>{'Annuler'}</Text></Pressable>
                        </View>
                       
                    </Modal>
                    <Modal transparent={true} animationType="slide" visible={modalVisible2}>
                      <View style={styles.modalView}>
                      <Pressable style={styles.ModdalButton}><Text style={styles.ModdalText}>{'Choississez le point de relais'}</Text></Pressable>
                              {pointsdisplay}
                      <Pressable style={styles.ModdalButton} onPress={()=>setModalVisible2(!modalVisible2)}><Text style={styles.ModdalText}>{'Annuler'}</Text></Pressable>
                      </View>
                    </Modal>
                    <Modal transparent={true} animationType="slide" visible={modalVisible3}>
                    <View style={styles.modalView}>
                      <Text style={styles.validationText}>Envoyer votre Commande ?</Text>
                      <Text style={styles.validationText2}>Envoyer votre commande de {Somme} €</Text>
                      <View style={styles.validationPressable}>
                          <Pressable style={styles.validationbutton} onPress={()=>handleValidation()}><Text style={styles.validationbuttontxt}>Oui</Text></Pressable>
                          <Pressable style={styles.validationbutton} onPress={()=>setModalVisible3(!modalVisible3)}><Text style={styles.validationbuttontxt}>Non</Text></Pressable>
                      </View>
                    </View>
                    </Modal>
                </ScrollView>
            </View>
            )
        }
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
        borderColor: '#fff'
      },
      ValidationBox:{
        backgroundColor:'rgba(0,0,0,.3)',
        marginTop:5,
        borderWidth: 1,
        borderColor: 'white',
        width:'auto',
        height:200,
        flexDirection:'column',
      },
    
      ProductTitle:{
        fontFamily: 'Noteworthy',
        textAlign: 'center',
        marginTop: 100,
        fontSize:20,
      },
      ProductInfo:{
          flexDirection:'row',
         

      },
      ProductName:{
        flex:2,
        fontFamily: 'Noteworthy',
        color: 'white',
        marginLeft: 10,
      },
      ProductPrix:{
        flex:1,
        fontFamily: 'Noteworthy',
        color: 'white',
        marginLeft: 80,
        
        
      },
      buttonImage:{
        
        width:50,
        height:50,
        padding:0,
        
      },
      ProductOK:{
        flex:1,
        fontFamily: 'Noteworthy',
        color: 'white',
        marginLeft: 0,
        marginRight: 0,
        
        
      },

      modalView: {
          
       marginTop:'40%',
        backgroundColor: "white",
      borderRadius: 20,
      
      
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.7,
      shadowRadius: 4,
      

    },

    ModdalButton:{
       
        paddingRight:0,
    
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'rgba(1,1,1,0)',
       
        borderWidth: 0.5,
        borderColor: 'rgba(1,1,1,0.3)',
        height:50,
      },
      ModdalText:{
        fontFamily: 'Noteworthy',
        color: 'black',
        
        alignSelf:'center'
        

      },
      
      Somme:{
        flex:2,
        fontFamily: 'Noteworthy',
        color: 'white',
        marginLeft: 10,
        fontSize:20,
        alignSelf:'flex-end'
      },
      Boxtxt:{
        flex:1,
        fontFamily: 'Noteworthy',
        color: 'white',
        marginLeft: 10,

      },
      pressableinbox:{
        flex:1,
        marginLeft: 10,
      },
      textinpressable:{
        fontFamily: 'Noteworthy',
        color: 'white'
      },
      validationText:{
        fontFamily: 'Noteworthy',
        color: 'black',
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
      },

      validationPressable:{
        flexDirection:'row',
      },

      validationbutton:{
        flex:1,
      },
      validationbuttontxt:{
        fontFamily: 'Noteworthy',
        color: 'black',
        fontSize:20,
        textAlign:"center"
      },
      validationText2:{
        marginTop:10,
        fontFamily: 'Noteworthy',
        color: 'black',
        fontSize:18,
        textAlign:"center",
        marginBottom:40
        

      }

      
    










      
  
  });

  export default Shop;