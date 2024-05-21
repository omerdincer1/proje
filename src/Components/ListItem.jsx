import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListItem = ({iconName, title, color}) => {
  return (
    <TouchableOpacity>
      <View style={style.root}>
        <Icon name={iconName} size={20} color={color ? color : "#06BF77"} />
        <View style={{flex: 1}}>
          <Text style={style.nameText}>{title}</Text>
        </View>
        <Icon name={'chevron-right'} size={25} color={'#06BF77'} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const style = StyleSheet.create({
  root: {
    margin: 5,
    height: 50,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  nameText: {
    fontWeight: '400',
    fontSize: 17,
    color: 'darkslategrey',
  },
});
