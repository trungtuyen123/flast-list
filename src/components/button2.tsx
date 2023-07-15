import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

const {width, height } = Dimensions.get('window')
type button2Props ={
 textButon: string,
 Backgroud: string,
 onPress:(text: string) => void
}

const button2: React.FC <button2Props>= ({textButon, Backgroud, onPress}) => {
  const handlePress= () => {
    onPress('')
  }

  return (
   <TouchableOpacity  style={{width: width*0.9 ,height: 50, }} onPress={handlePress}>
     <View
      style={{
        backgroundColor: Backgroud,
        alignItems: 'center', 
        padding: 8,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center'
      }}>
     <Text style={{color: 'white', fontSize: 16}}>{textButon}</Text>
    </View>
   </TouchableOpacity>
  );
};

export default button2;
