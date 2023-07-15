import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

type ComponentUserProps = {
  avatar: string;
  name: string;
  point: number;
  onPress: () => void;
  
  
};

const ComponentUser: React.FC<ComponentUserProps> = ({avatar, name, point, onPress}) => {
  return (
    <View
      style={{
        alignContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',

        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{flexDirection: 'row', flex: 1}}
        onPress={onPress}>
        <Image source={{uri: avatar}} style={styles.AvatarHome} />
        <View style={styles.HiName}>
          <Text style={{fontSize: 14}}>Chào buổi sáng</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#121212'}}>Điểm: </Text>
        <Text style={styles.point}>{point}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AvatarHome: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 8,
  },
  HiName: {
    // flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  point: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B952A',
  },
});
export default ComponentUser;
