import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    }
    ,
    button: {
        backgroundColor: 'black',
        justifyContent: 'center',
        padding: 16,
        width: '100%'
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700'
    }
})

type NumberButtonProps = {
  amount: number;
  increaseAmount: () => void;
};
const NumberButton: React.FC<NumberButtonProps> =({
  amount,
  increaseAmount,
}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Số hiện tại: {amount}</Text>
      <TouchableOpacity style={styles.button} onPress={increaseAmount}>
        <Text style={styles.textButton}>Click to increase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(NumberButton);
