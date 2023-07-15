/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/home/Home';
import User from './src/screens/home/User';
import Login from './src/screens/Login';

const Stack = createStackNavigator();
function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name="User"
            component={User}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
