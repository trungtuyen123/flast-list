/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert,
  SectionList,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomInput from './src/components/CustomInput';
import ButtonConponent from './src/components/ButtonComponet';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 4,
    flex: 1,
    borderRadius: 10
  },
  image: {
    flex: 1,
    width:'100%',
    height: 150,
  
    borderRadius: 10
  },
});

// const onPressDK = () => {
//   Alert.alert('Đăng kí thành công')
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const InputList = [
//     {
//       title: 'Họ và tên',
//       placeholder: 'Nhập họ và tên...'
//     },
//     {
//       title: 'Email',
//       placeholder: 'Nhập email...',
//       isEmail: true
//     },
//     {
//       title: 'Mật khẩu',
//       placeholder: 'Nhập mật khẩu...'
//     },
//     {
//       title: 'Xác nhận mật khẩu',
//       placeholder: 'Nhập lại mật khẩu vừa rồi...'
//     },
//   ]
//   return (
//     <SafeAreaView style={{backgroundColor: 'white', flex: 1, paddingBottom: 40}}>
//       <ScrollView >
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         // backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <View
//         style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
//         <Image
//           source={require('./src/assets/images/Logo.png')}
//           style={{width: 100, height: 100}}
//         />
//         <Text style={styles.sectionTitle}>Shopee</Text>
//       </View>

//       <View style={{marginTop: 30}}>
//         {
//           InputList.map((InputList, index) => (
//             <CustomInput key = {index }label={InputList.title} textPlaceholder={InputList.placeholder} isEmail={InputList.isEmail} />
//           ))
//         }
//         <ButtonConponent text='Đăng nhập'colorCode='#0077b6' textTolorCode='white' onPress={onPressDN}/>
//         <Text style={{marginTop: 30, textAlign: 'center', marginBottom: 8}}>Bạn chưa có tài khoản</Text>
//         <ButtonConponent text='Đăng ký'colorCode='#caf0f8' textTolorCode='#0077b6'  onPress={onPressDK} />
//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

const DATA = [
  {
    title: 'Bánh kem',
    price: '10$',
    image: require('./src/assets/images/cake.jpg'),
  },
  {
    title: 'Bánh sinh nhật',
    price: '900$',
    image: require('./src/assets/images/cake.jpg'),
  },
  {
    title: 'Bánh Mì',
    price: '20$',
    image: require('./src/assets/images/cake.jpg'),
  },
  {
    title: 'Bánh Gato',
    price: '400$',
    image: require('./src/assets/images/cake.jpg'),
  },
];

type ItemProps = {
  title: string;
  price: string;
  image: any;
};

// Tạo funtion thông báo tên sp và giá tiền
const onPressCard = ({title, price}: ItemProps) => {
  Alert.alert(`Tên SP: ${title}\nGiá tiền: ${price}`)
}

// Render sản phẩm và khi click vào hiển thị thông báo sp đó
const RenderItem = ({title, price, image}: ItemProps) => (
  <TouchableOpacity style={styles.item} onPress={()=> onPressCard({ title, price, image })}>
    <View >
    <Image
      source={image}
      style={styles.image}
    />
    <View style={{marginTop: 8,}}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={{fontSize: 16, fontWeight: '600', color: 'red'}}>{price}</Text>
    </View>
  </View>
  </TouchableOpacity>
);

function App(): JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
     <View style ={{padding: 16, margin: -4}}>
     <FlatList 
        data={DATA}
        renderItem={({item}) => RenderItem(item)}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
     </View>
    </SafeAreaView>
  );
}

export default App;
