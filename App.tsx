/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import Input from './src/components/Input';
import CardCar from './src/components/CardComponent';

type ImageData = {
  image: string;
  title: string;
  price: number;
};

function App(): JSX.Element {
  const DATA: ImageData[] = [
    {
      image:
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: 'High Roller',
      price: 100,
    },
    {
      image:
        'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'DeLorean',
      price: 100,
    },
    {
      image:
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Adam Stefanca',
      price: 100,
    },
    {
      image:
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'High Roller',
      price: 100,
    },
    {
      image:
        'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'High Roller',
      price: 100,
    },
    {
      image:
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'High Roller',
      price: 100,
    },
    {
      image:
        'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'High Roller',
      price: 100,
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1676760467205-185a98fc379c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'High Roller',
      price: 100,
    },
    {
      image:
        'https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'High Roller',
      price: 100,
    },
    {
      image:
        'https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'High Roller',
      price: 100,
    },
    {
      image:
        'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'High Roller',
      price: 100,
    },
  ];

  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const handleSearch = (text: string) => {
    setSearchKeyword(text);
  };

  // Sắp xếp ngẫu nhiên các thẻ card khi mở app
  const [shuffledCardsData, setShuffledCardsData] = useState<ImageData[]>([]);
  const shuffleCardsData = () => {
    setShuffledCardsData([...DATA].sort(() => Math.random() - 0.5)); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      shuffleCardsData();
    }, 50000);
    return () => {
      clearInterval(interval);
    };
    Alert.alert('Thông báo', 'Chào bạn đến với app');
  }, []);

  const renderItem = ({item}: {item: ImageData}) => {
    // kiểm tra nhập vào nếu có render theo ký tự
    if (
      searchKeyword &&
      !item.title.toLowerCase().includes(searchKeyword.toLowerCase())
    ) {
      return <View />;
    }
    return (
      <View style={{flex: 1, marginHorizontal: -4, marginBottom: 8}}>
        <CardCar image={item.image} title={item.title} price={item.price} />
      </View>
    );
  };
  return (
    <SafeAreaView style={{padding: 16, backgroundColor: '#f4f4f4'}}>
      <TouchableOpacity
        style={{
          width: '100%',
          padding: 16,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Dừng</Text>
      </TouchableOpacity>
      <View>
        <View style={{marginBottom: 16}}>
          <Input
            placeholder="Tìm kiếm..."
            value={searchKeyword}
            onChangeText={handleSearch}
          />
        </View>

        <FlatList
          data={shuffledCardsData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
