/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert,
  SectionList,
  FlatList,
} from 'react-native';
import CustomInput from './src/components/CustomInput';
import ButtonConponent from './src/components/ButtonComponet';
import ForgotPassword from './src/components/button2';
import Input from './src/components/Input';
import ListInput from './src/screens/ListInput';
import Login from './src/screens/Login';
import ListButtonn from './src/screens/ListButton';


function App(): JSX.Element {
  const [name, setName] = useState('');
  const handleColorChange = (newColor: string) => {
  console.log('button')
  }
  return (
    <SafeAreaView >
        <View> 
          <Login/>
          {/* <ListInput/>
          <ListButtonn/> */}
        </View>
    </SafeAreaView>
  );
}

export default App;
