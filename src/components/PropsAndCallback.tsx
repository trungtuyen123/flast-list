import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import ForgotPassword from './ForgotPassword';

const DATA = [
  {
    textButon: 'green',
    backgroud: 'green',
  },
  {
    textButon: 'blue',
    backgroud: 'blue',
  },
  {
    textButon: 'red',
    backgroud: 'red',
  },
  {
    textButon: 'black',
    backgroud: 'black',
  },
  {
    textButon: 'black',
    backgroud: 'black',
  },
  {
    textButon: 'black',
    backgroud: 'black',
  },
];

type ItemProps = {
  textButon: string;
  backgroud: string;
  onPress: Function
};



const RenderItem = ({textButon, backgroud, onPress}: ItemProps) => ( 
  <ForgotPassword Backgroud={backgroud} textButon={textButon} onPress={onPress} />
);
const ListButton: React.FC = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => RenderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListButton;
