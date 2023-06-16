import React, { ReactNode } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

type ForgotPasswordProps ={
 textButon: string,
 Backgroud: string,
 onPress: Function
}
const onPressButton = ({textButon, Backgroud}: ForgotPasswordProps) => {
    Alert.alert(`tên Button: ${textButon}\nMã màu: ${Backgroud}`)
}

const ForgotPassword: React.FC <ForgotPasswordProps>= ({textButon, Backgroud, onPress}) => {
  return (
   <TouchableOpacity style={{marginBottom: 16}} onPress= {() => onPressButton ({textButon, Backgroud, onPress})}>
     <View
      style={{
        backgroundColor: Backgroud,
        alignItems: 'center', 
        padding: 8,
        height: 50,
        marginHorizontal: 20,
        borderRadius: 30,
        justifyContent: 'center'
      }}>
     <Text style={{color: 'white', fontSize: 16}}>{textButon}</Text>
    </View>
   </TouchableOpacity>
  );
};

export default ForgotPassword;
