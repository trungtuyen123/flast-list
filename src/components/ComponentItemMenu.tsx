import React from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import {backgroudItem, primaryColor, secondaryColor, textColor} from './color';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
type ComponentItemMenuProps = {
  image: any;
  text: string;
  onPress: () => void;
};
const ComponentItemMenu: React.FC<ComponentItemMenuProps> = ({
  image,
  onPress,
  text,
}) => {
  return (
    <View style={{ width: '50%', paddingRight: 16, justifyContent: 'center', alignContent: 'center'}}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.Image} source={image} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: backgroudItem,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginBottom: 8,
  },
});
export default ComponentItemMenu;
