import React from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import {backgroudItem, primaryColor, secondaryColor, textColor} from './color';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
type ItemMeuBottomProps = {
  text: string;
  onPress: () => void;
};
const ItemMeuBottom: React.FC<ItemMeuBottomProps> = ({
  onPress,
  text,
}) => {
  return (
    <View >
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom:0,
    alignItems: 'center',
    justifyContent: 'center',
    width: width*0.25
  },
  Image: {
    width: 24,
    height: 24,
    marginBottom:4
  },
  text: {
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
  },
});
export default ItemMeuBottom;
