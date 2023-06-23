import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  input: {
    color: 'black',
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  frame: {
    marginBottom: 4
  }
});

type InputProps = {
  placeholder: string;
  onChangeText:(text:  string)=> void ;
  value: string
};
const Input: React.FC<InputProps> = ({placeholder, onChangeText,value}) => {
  return (
    <View style={styles.frame}>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType="numeric"
      />
    </View>
  );
};

export default Input;
