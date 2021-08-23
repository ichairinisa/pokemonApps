import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import store from './src/store';

import PokemonList from './src/screen/list';
import Details from './src/screen/detail';

import { createStackNavigator } from '@react-navigation/stack';
// import { Text, TouchableOpacity } from 'react-native';
const Stack = createStackNavigator();


// const {Navigator, Screen} = createStackNavigator();

// const AuthStack = () => (
//   <Navigator headerMode="none">
//     <Screen name="Home" component={PokemonList} />
//     <Screen name="Details" component={Details} />
//   </Navigator>
// );

// const App = () => (
//   <NavigationContainer>
//     <AuthStack />
//   </NavigationContainer>
// );

// const appNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: PokemonList,
//     }, 
//     Details: {
//       screen: Details,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );
// const AppContainer = createAppContainer(appNavigator);
// class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// function ScreenA({navigation}){
//   return (
//     <View>
//       <Text>HELOOOOO ini screen A</Text>
//       <TouchableOpacity
//       onPress={()=> navigation.navigate('Details')}
//       >
//         <Text>Teken ne</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

const App = () => {
  return (
    <Provider store={store}>
      <PokemonList />
      {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={PokemonList}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer> */}
    
    </Provider>
  );
};



export default App;
