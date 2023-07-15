import React from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
type CardServiceProps = {
  image: number;
  text: string;
  onPress: () => void;
};
const CardService: React.FC<CardServiceProps> = ({image, onPress, text}) => {
  return (
    <View
      style={{
        width: width * 0.44,
        borderRadius: 16,
        paddingRight: 16,
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 8,
        marginRight: 16,
      }}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.Image} source={image} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.44,
  },
  Image: {
    width: width * 0.45,
    height: 175,
    marginBottom: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',

    textAlign: 'center',
  },
});
export default CardService;
