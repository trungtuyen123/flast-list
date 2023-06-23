import React, { ReactNode } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

type ForgotPasswordProps ={
 textButon: string,
 Backgroud: string,
 onPress:(text: string) => void
}

const ForgotPassword: React.FC <ForgotPasswordProps>= ({textButon, Backgroud, onPress}) => {
  const handlePress= () => {
    onPress(Backgroud)
  }

  return (
   <TouchableOpacity  style={{  height: 50, }} onPress={handlePress}>
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

export default ForgotPassword;
