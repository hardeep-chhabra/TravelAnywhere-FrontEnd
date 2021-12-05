import React from 'react';
import type {Node} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';



export default function App() {
  
  const stack = createStackNavigator()
  console.log('APP')

  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={{flex:1}}>
        <stack.Navigator>
        <stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} />
        <stack.Screen name='MapScreen' component={MapScreen} options={{headerShown:false}} />
        </stack.Navigator>
        </KeyboardAvoidingView>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffff',
    alignItems:'center',
    justifyContent:'center'
  }
})
