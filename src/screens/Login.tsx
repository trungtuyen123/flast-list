import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import Input from '../components/Input';
import ForgotPassword from '../components/button2';

const Login: React.FC = () => {
  const [phone, setPhone] = useState<string>();
  const [error, setError] = useState<string>('');

  const handleButtonOnPress = () => {
    const iNumber = !isNaN(parseFloat(phone)) && phone.trim() !== '';
    if (!iNumber) {
      return setError('Bạn cần nhập SĐT');
    }
    Alert.alert('Thông báo', `Số điện thoại của bạn là: ${phone}`);
  };
  return (
    <View>
      <View
        style={{
          borderBottomColor: '#f4f4f4',
          backgroundColor: 'white',
          padding: 16,
        }}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
          Đăng Nhập
        </Text>
      </View>
      <View style={{padding: 16, alignContent: 'space-between', height: '100%'}}>
       <View style ={{flex: 1}}>
       <Text style={{color: 'black', fontSize: 18, marginBottom: 8}}>
          Số điện thoại
        </Text>
        <Text style={{marginBottom: 16}}>
          Nhập số điện thoại của bạn để tiếp tục
        </Text>
        <View style={{marginBottom: 16}}>
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

        </View>
        <View style={{flex:1}}>
          <ForgotPassword
            textButon="Tiếp tục"
            Backgroud="#6B952A"
            onPress={handleButtonOnPress}
          />
        </View>
      </View>
    </View>
  );
};
export default Login;
