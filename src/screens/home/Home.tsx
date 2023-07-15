import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar, Animated} from 'react-native';
import ComponentUser from '../../components/ComponentUser';
import ComponentBanner from '../../components/ComponentBanner';
import ComponentItemMenu from '../../components/ComponentItemMenu';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ComponentItemMenu2 from '../../components/ComponentItemMenu2';
import {backgroudItem} from '../../components/color';
import CardService from '../../components/CardService';
import MenuBottom from '../../components/MenuBottom';

type HomeScreenProps = {
  navigation: {navigate: (screen: string, params?: object) => void};
};
const onPressBanner = () => {
  console.log('Banner');
};

type itemMenuProps = {
  text: string;
  image: number;
  onPress: () => void;
};
type itemCardServiceProps = {
  text: string;
  image: number;
  onPress: () => void;
};

const DATACARDSERVICE: itemCardServiceProps[] = [
  {
    text: 'Tạo mã QR code quản lý thông tin cây',
    image: require('../home/qr.png'),
    onPress: onPressBanner,
  },
  {
    text: 'Hợp tác quản lý, chăm sóc vườn Sầu riêng',
    image: require('../home/hoptac.png'),
    onPress: onPressBanner,
  },
  {
    text: 'Tư vấn - Thiết kế thi công vùng trồng mới',
    image: require('../home/tuvan.png'),
    onPress: onPressBanner,
  },
];

const DATAMENU: itemMenuProps[] = [
  {
    text: 'Bản tin vườn',
    image: require('../home/bantinvuon.png'),
    onPress: onPressBanner,
  },
  {
    text: 'Bản tin thu mua',
    image: require('../home/bantinthumua.png'),
    onPress: onPressBanner,
  },
  {
    text: 'Giá cả thị trường',
    image: require('../home/giacathitruong.png'),
    onPress: onPressBanner,
  },
  {
    text: 'Đổi quà',
    image: require('../home/doiqua.png'),
    onPress: onPressBanner,
  },
  {
    text: 'Hỗ trợ tư vấn',
    image: require('../home/hotrotuvan.png'),
    onPress: onPressBanner,
  },
  {
    text: 'Góp ý',
    image: require('../home/gopy.png'),
    onPress: onPressBanner,
  },
];
const RenderItemCardService = ({item}: {item: itemMenuProps}) => {
  return (
    <View>
      <CardService text={item.text} image={item.image} onPress={item.onPress} />
    </View>
  );
};

const RenderItem = ({item}: {item: itemCardServiceProps}) => {
  return (
    <View>
      <ComponentItemMenu2
        text={item.text}
        image={item.image}
        onPress={item.onPress}
      />
    </View>
  );
};

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
       <View style={{flex: 1}}>
   <ComponentUser
        avatar="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/327209766_862817568264345_9185622725308031903_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=h-mFnmcpcUgAX-PL-V1&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBrJSLSENeuaTpJtaz0EFOGbHjrMUPEJrvpxd7yVhswXw&oe=64AD979A"
        name="Văn Phạm Trung Tuyến "
        point={3204}
        onPress={()=> navigation.navigate('User')}
        />
      <StatusBar
        backgroundColor="white" // màu nền
        barStyle="dark-content" // kiểu chữ (sáng/tối)
        translucent={false}
        />
   
      <View>
      <View style={{backgroundColor: 'white',}}>
          <View>
            <ComponentBanner
              onPress={()=> navigation.navigate('User')}
              text="Giờ đây, tôi sẽ giúp bạn tạo lịch chăm sóc vườn của bạn."
              image={require('../home/Banner.png')}
            />
          </View>
          <View
            style={{borderBottomWidth: 4, borderBottomColor: backgroudItem}}>
            <View style={styles.viewItem}>
              <ComponentItemMenu
                onPress={onPressBanner}
                text="Tạo lịch"
                image={require('../home/Calendar.png')}
                />
              <ComponentItemMenu
                onPress={onPressBanner}
                text="Ảnh/ Video"
                image={require('../home/Media.png')}
              />
            </View>
            <View style={{marginLeft: 16, marginTop: 16}}>
              <FlatList
                data={DATAMENU}
                renderItem={RenderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
              />
            </View>
          </View>
          <View
            style={{marginHorizontal: 16, marginTop: 16, paddingBottom: 100}}>
            <FlatList
              data={DATACARDSERVICE}
              renderItem={RenderItemCardService}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
            />
          </View>
        </View>
      </View>
      <MenuBottom/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  viewItem: {
    flexDirection: 'row',
    marginTop: 16,
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
});

export default React.memo(Home);
