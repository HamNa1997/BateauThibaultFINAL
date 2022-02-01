import { StatusBar } from 'expo-status-bar';
import {  ImageBackground, StyleSheet, Text, View } from 'react-native';
import {
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Vue0 from './components/Vue0.js'
import Shop from './components/Shop.js';
import { Provider } from "react-redux";
import store from './store/store'
import ProductPannel from './components/ProductPannel.js';
import BateauxPannel from './components/BateauxPannel.js';
import Bateaux from './components/Bateaux.js';
import Contact from './components/Contact.js';
import RestoPannel from './components/RestoPannel.js'; 
import RecettesPannel from './components/RecettesPannel.js'
import Recettes from './components/Recettes.js';
const image = { uri: "./assets/background.png" };
const Stack = createNativeStackNavigator();
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
export default function App() {
  return (
    <ImageBackground source={require('./assets/background.png')}  style={styles.image} resizeMethod='resize' resizeMode='cover'>
      <Provider store={store}>
    <NavigationContainer theme={navTheme}>
    <Stack.Navigator screenOptions={{ animationEnabled: false }} initialRouteName="Vue0">
   
      <Stack.Screen name="Vue0" component={Vue0} options={{ headerShown: false }}/>
      <Stack.Screen name="poissons" options={{ headerShown: false, animationEnabled: false, }}>
          {props => <Shop {...props} display={"poissons"}/>}
      </Stack.Screen>
      <Stack.Screen name="coquillages" options={{ headerShown: false, animationEnabled: false, }}>
          {props => <Shop {...props} display={"coquillages"}/>}
      </Stack.Screen>
      <Stack.Screen name="araignee" options={{ headerShown: false, animationEnabled: false, }}>
          {props => <Shop {...props} display={"araignee"}/>}
      </Stack.Screen>
      <Stack.Screen name="promo" options={{ headerShown: false, animationEnabled: false, }}>
          {props => <Shop {...props} display={"promo"}/>}
      </Stack.Screen>
      <Stack.Screen name="Panier" options={{ headerShown: false, animationEnabled: false, }}>
          {props => <Shop {...props} display={"panier"}/>}
      </Stack.Screen> 
      
      <Stack.Screen name="ProductPannel" component={ProductPannel} options={{ headerShown: false, animationEnabled: false, }}/>
      <Stack.Screen name="BateauxPannel" component={BateauxPannel} options={{ headerShown: false, animationEnabled: false, }}/>
      <Stack.Screen name="delabrise" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={'De la Brise'} imguri={'delabrise'}/>}
      </Stack.Screen>
      <Stack.Screen name="saphir" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={'Saphir'} imguri={'saphir'}/>}
      </Stack.Screen>
      <Stack.Screen name="aquillon" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={'Aquilon'} imguri={'aquilon'}/>}
      </Stack.Screen>
      <Stack.Screen name="gastMicher" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={'Gast Micher'} imguri={'gastMicher'}/>}
      </Stack.Screen>
      <Stack.Screen name="contact" component={Contact} options={{ headerShown: false, animationEnabled: false, }}/>
      <Stack.Screen name="RestoPannel" component={RestoPannel} options={{ headerShown: false, animationEnabled: false, }}/>
      <Stack.Screen name="RecettesPannel" component={RecettesPannel} options={{ headerShown: false, animationEnabled: false, }}/>
      <Stack.Screen name="desGascons" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={'Bistrot des gascons'} imguri={'desGascons'}/>}
      </Stack.Screen>
      <Stack.Screen name="fousDeLIle" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={"les fous de l'ile"} imguri={'fousDeLIle'}/>}
      </Stack.Screen>
      <Stack.Screen name="duSommelier" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={'Bistrot du Sommelier'} imguri={'duSommelier'}/>}
      </Stack.Screen>
      <Stack.Screen name="villa9Trois" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={'Villa 9-Trois'} imguri={'villa9Trois'}/>}
      </Stack.Screen>
      <Stack.Screen name="bistrotLandais" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={'Bistrot Landais'} imguri={'bistrotLandais'}/>}
      </Stack.Screen>
      <Stack.Screen name="homardRecette" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Recettes {...props} titre={'Homard en chaud-froia'} imguri={'homardRecette'}
              
              p1="Faites cuire les homards dans de l'eau bouillante avec du thym, du laurier, du sel et du poivre de Cayenne. Laissez cuire 20 minutes. Egouttez-les et laissez-les refroidir."
              p2="Découpez les coffres des homards dans le sens de la longueur"
              p3="Mélangez la mayonnaise avec le cognac, le corail et la ciboulette ciselée"
              />}
      </Stack.Screen>
      <Stack.Screen name="saintJacques" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Recettes {...props} titre={'Noix de Saint-Jacques flambées au cognac'} imguri={'saintJacques'}
              
              p1="Faire fondre du beurre avec des échalotes puis ajouter les nobe de Saint-Jacques. Les faire revenir en 
              laissant le milieu translucide puis le retirer du feu"
              p2="Ajouter l'ail et le persil dans le poele et laissez cuire quelques secondes. Bien faire chauffer la poele, puis flamber au Cognac. Une fois la flemme éteinte, Ajouter les nobe de... "
              p3="Déguster chaud nature ou accompagné d'une fondue de poireaux"
              />}
      </Stack.Screen>
      <Stack.Screen name="barRecette" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Recettes {...props} titre={'Bar roti au laurier frais'} imguri={'barRecette'}
              
              p1="Faire fondre du beurre avec des échalotes puis ajouter les nobe de Saint-Jacques. Les faire revenir en 
              laissant le milieu translucide puis le retirer du feu"
              p2="Ajouter l'ail et le persil dans le poele et laissez cuire quelques secondes. Bien faire chauffer la poele, puis flamber au Cognac. Une fois la flemme éteinte, Ajouter les nobe de... "
              p3="Déguster chaud nature ou accompagné d'une fondue de poireaux"
              />}
              
      </Stack.Screen>
      <Stack.Screen name="RecetteXYZ" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={'Recette XYZ'} imguri={'poulpe'}/>}
              </Stack.Screen>
      <Stack.Screen name="Tourteau" options={{ headerShown: false, animationEnabled: false, }}>
              {props => <Bateaux {...props} titre={'Tourteau linguine'} imguri={'poulpe'}/>}
              </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    
    width: '100%', height: '100%', 
    
    
  },
});
