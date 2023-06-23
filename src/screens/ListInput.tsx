import React, {useState} from 'react';

import Input from '../components/Input';
import {FlatList, Text, View} from 'react-native';
import ButtonConponent from '../components/ButtonComponet';

type ItemProps = {
  placeHolder: string;
  onChangeText: (text: string) => void;
  value: string;
};

const ListInput: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const hanldeReset = () => {
    setName(''), setMail('');
    setPhone('');
  };
  const DATA: ItemProps[] = [
    {
      placeHolder: 'Nhập tên của bạn',
      onChangeText: setName,
      value: name,
    },
    {
      placeHolder: 'Nhập Email của bạn',
      onChangeText: setMail,
      value: mail,
    },
    {
      placeHolder: 'Nhập SĐT của bạn',
      onChangeText: setPhone,
      value: phone,
    },
  ];

  const RenderItem = ({item}: {item: ItemProps}) => {
    return (
      <Input
        placeholder={item.placeHolder}
        onChangeText={item.onChangeText}
        value={item.value}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={RenderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <ButtonConponent
        text="Reset"
        textTolorCode="white"
        colorCode="#6B952A"
        onPress={hanldeReset}
      />
      <View style={{marginTop: 16, backgroundColor: '#f4f4f4', padding: 16, borderRadius: 16}}>
      <Text>Tên: {name}</Text>
      <Text>Mail: {mail}</Text>
      <Text>Điện thoại: {phone}</Text>
      </View>
    </View>
  );
};

export default ListInput;
