import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const IncomeListCard = ({title,date,price}) => {
  return (
    <View style={styles.incomeListCard}>
      <View style={{paddingHorizontal:10,paddingTop:5}}>
        <Text style={{fontSize:15,color:"black", fontWeight:"500"}}>{title}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:10}}>
        <Text>{date}</Text>
        <Text style={{color:"green"}}>{price}</Text>
      </View>
    </View>
  );
};

export default IncomeListCard;

const styles = StyleSheet.create({
  incomeListCard: {
   
    width: 400,
    height: 80,
    borderColor: 'grey',
    borderBottomWidth: 1,
    gap:10,
    flexDirection: 'column',
  },
});
