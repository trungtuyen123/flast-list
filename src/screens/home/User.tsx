import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const User: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}>
       <TouchableOpacity onPress={()=> navigation.goBack()}>
       <Image
          source={require('../home/back.png')}
          style={{width: 24, height: 24}}
        />
       </TouchableOpacity>
        <Text style={styles.textname}>Profile</Text>
       <TouchableOpacity>
       <Image
          source={require('../home/edit.png')}
          style={{width: 24, height: 24}}
        />
       </TouchableOpacity>
      </View>
      <View>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1688040697056-14d0b1bb5653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
          }}
          style={{
            height: 210,
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
          }}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/327209766_862817568264345_9185622725308031903_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=h-mFnmcpcUgAX-PL-V1&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBrJSLSENeuaTpJtaz0EFOGbHjrMUPEJrvpxd7yVhswXw&oe=64AD979A',
            }}
          />
        </ImageBackground>
      </View>
      <View style={{marginTop: 50, width: '100%', alignItems: 'center'}}>
        <Text style={styles.textname}>Vườn sầu riêng Nha Trang</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: 180,
  },
  textname: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
});
export default User;
