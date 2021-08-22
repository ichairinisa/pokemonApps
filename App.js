import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import 'react-native-gesture-handler';
import store from './src/store';

import PokemonList from './src/page/list';
import Details from './src/page/detail';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
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

const App = () => {
  return (
    <Provider store={store}>
      <PokemonList />
      {/* <Stack.Navigator >
      <Stack.Screen name="Home" component={PokemonList} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator> */}
    </Provider>
  );
};



export default App;
