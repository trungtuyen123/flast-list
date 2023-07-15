import React from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import {backgroudItem, primaryColor, secondaryColor, textColor} from './color';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
type ComponentItemMenu2Props = {
  image: number;
  text: string;
  onPress: () => void;
};
const ComponentItemMenu2: React.FC<ComponentItemMenu2Props> = ({
  image,
  onPress,
  text,
}) => {
  return (
    <View style={{ width: width*0.32, paddingRight: 16, justifyContent: 'center', alignContent: 'center'}}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.Image} source={image} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    borderRadius: 16,
    marginBottom:0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 40,
    height: 40,
    marginBottom:8
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    marginBottom: 8,
  },
});
export default ComponentItemMenu2;
