import React from 'react';
import {StyleSheet, TextInput, View, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    color: 'black',
    fontSize: 16,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 16,
    borderRadius: 30,
    width: width * 0.9
  },
 
});

type InputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
};

const Input: React.FC<InputProps> = ({placeholder, onChangeText, value}) => {
  return (
    <View style={{}}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      
    </View>
  );
};

export default Input;
