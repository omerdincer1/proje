import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProductCard = ({name,image, onPress}) => {
  return (
    <View style={style.root}>
      <Text style={style.productText}>{name}</Text>
      <Image
        resizeMode="contain"
        style={{height: 75, width: 75}}
        src={`${image}`}
        
      />
      <TouchableOpacity style={style.goProduct} onPress={onPress}>
            <Text style={{color:"#F94D85",fontWeight:"600"}}>Ürüne Git</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  root: {
    height: 200,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    gap:10,
    alignItems:"center"
  },
  productText:{
    color:"#06BF77",
    fontWeight:"500"
  },
  goProduct:{
    height:30,
    width:"100%",
    backgroundColor:"#F7DF5E",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center"
  }
});
export default ProductCard;
