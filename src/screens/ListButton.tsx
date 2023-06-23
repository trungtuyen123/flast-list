import React, {useState} from 'react';
import {View, Button, Alert} from 'react-native';
import ForgotPassword from '../components/button2';

const ListButtonn = () => {

  const [color, setColor] = useState<string>('#f4f4f4');


  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  }
  console.log('Hello')
  return (
    <View style={{marginTop: 30,width: '100%', backgroundColor: color, justifyContent: 'center', padding: 16}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <ForgotPassword textButon='Màu đỏ' Backgroud='red' onPress={handleColorChange}/>
      <ForgotPassword textButon='Màu xanh' Backgroud='green' onPress={handleColorChange}/>
      <ForgotPassword textButon='Xanh biển' Backgroud='blue' onPress={handleColorChange}/>
      </View>
    </View>
  );
}

export default ListButtonn