import React from 'react';
import {Image, ImageRequireSource, Text, View} from 'react-native';

type CardCarProps = {
  image: string;
  title: string;
  price: number;
};

const CardCar: React.FC<CardCarProps> = ({image, title, price}) => {
  return (
    <View style={{  backgroundColor: 'white',padding: 10,marginHorizontal: 8}}>
      <Image style={{width: '100%', height: 120}} source={{uri: image}} />
      <Text style={{fontSize: 16, color: 'black'}}>{title}</Text>
      <Text style={{fontSize: 16, color: 'red'}}>${price}</Text>
    </View>
  );
};
export default CardCar;
