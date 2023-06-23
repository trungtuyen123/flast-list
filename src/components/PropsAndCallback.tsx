import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import ForgotPassword from './button2';

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

];

type ItemProps = {
  textButon: string;
  backgroud: string;
  onPress: (Function)
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
  