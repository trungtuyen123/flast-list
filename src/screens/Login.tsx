import React, {useState} from 'react';
import {Alert, Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import Input from '../components/Input';
import Button2 from '../components/button2';
import MenuBottom from '../components/MenuBottom';
const {width} = Dimensions.get('window');

type HomeScreenProps = {
  navigation: {replace: (screen: string, params?: object) => void};
};

const Login: React.FC<HomeScreenProps> = ({navigation}) => {
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const navigateToSecondScreen = () => {
    navigation.replace('Home');
  };


  return (
    <View>
      <View
        style={{
          padding: 16,
          height: '100%',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={styles.image}
            source={require('../assets/images/Logo.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginBottom: 8,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            Đăng nhập
          </Text>
          <Text style={{marginBottom: 16, textAlign: 'center'}}>
            Nhập số điện thoại của bạn để tiếp tục
          </Text>
          <View style={{marginBottom: 0,}}>
            <Input
              placeholder="Nhập SĐT của bạn..."
              onChangeText={text => {
                setPhone(text);
                const iNumber = !isNaN(parseFloat(text)) && text.trim() !== '';
                if (iNumber) {
                  setError('');
                }
              }}
              value={phone}
            />
            <Text style={{color: 'red'}}>{error}</Text>
          </View>
          <View style={{marginBottom: 16,}}>
            <Input
              placeholder="Nhập mật khẩu..."
              onChangeText={text => {
                setPhone(text);
                const iNumber = !isNaN(parseFloat(text)) && text.trim() !== '';
                if (iNumber) {
                  setError('');
                }
              }}
              value={phone}
            />
            <Text style={{color: 'red'}}>{error}</Text>
          </View>
        </View>
        <View>
          <Button2
            textButon="Tiếp tục"
            Backgroud="#6B952A"
            onPress={navigateToSecondScreen}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width * 0.6,
    height: width * 0.6,
  },
});
export default Login;
