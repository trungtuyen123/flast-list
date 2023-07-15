import React from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import ButtonConponent from './ButtonComponet';
import { primaryColor, secondaryColor, textColor } from './color';
const {width, height} = Dimensions.get('window');
type ComponentBannerProps = {
  image: any;
  text: string;
  onPress: () => void;
};
const ComponentBanner: React.FC<ComponentBannerProps> = ({image, onPress, text}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={ image} />
      <View style={{marginLeft: 16, width: width*0.6}}>
        <Text style={styles.text}>
          {text}
        </Text>
        <ButtonConponent
          text="Đi ngay"
          textTolorCode={primaryColor}
          backgroudColor= {textColor}
          onPress={onPress}
          border={primaryColor}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding:16,
    backgroundColor: secondaryColor,
    borderRadius: 16,
    marginHorizontal: 16
  },

  Image: {
    width: 76,
    height: 80,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginBottom: 8,
  },
});
export default ComponentBanner;
