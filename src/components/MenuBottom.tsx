import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import ItemMeuBottom from './ItemMeunoBottom';
import { primaryColor, textColor } from './color';
const {width, height} = Dimensions.get('window');

type itemMenuBottomProps = {
  title: string;
  onPress: () => void;
};
const handleTabPress = () => {
  // Xử lý sự kiện khi tab được chọn
  console.log('Đã nhấn');
};
const DATA: itemMenuBottomProps[] = [
  {
    title: 'Home',
    onPress: handleTabPress,
  },
  {
    title: 'Cẩm nang',
  onPress: handleTabPress,
  },
  {
    title: 'Cửa hàng',
    onPress: handleTabPress,
  },

  {
    title: 'Vườn',
    onPress: handleTabPress,
  },
];

const MenuBottom: React.FC = () => {
  const RenderItem = ({item}: {item: itemMenuBottomProps}) => {
    return(
      <TouchableOpacity style={styles.container}>
      <ItemMeuBottom
        text={item.title}
        onPress={item.onPress}
      />
    </TouchableOpacity>
    )
  };

  return (
    <View style={{ position: 'absolute', bottom: 0}}>
      <FlatList
        data={DATA}
        renderItem={RenderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}

      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: textColor,
    paddingBottom: 10,
    paddingTop: 8,
  },
});
export default MenuBottom;
