import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ProfileCard = ({title, location, description, icon, imgSrc, disabled, onPress}) => {
  return (
<TouchableOpacity disabled={disabled} onPress={onPress}>
<View style={style.root}>
      <Image
        style={{height: 100, width: 100}}
        resizeMode="contain"
        source={imgSrc}
      />

      <View style={style.textRow}>
        <Text style={style.nameText}>{title}</Text>
        <View style={style.descView}>
          {icon ? <Icon name="markunread" size={20} color={'#06BF77'} /> : null}
          <Text style={style.descText}>{description}</Text>
        </View>
        <View style={style.descView}>
          {icon ? <Icon name="location-on" size={20} color={'#06BF77'} /> : null}
          <Text style={style.descText}>{location}</Text>
        </View>
      </View>
    </View>
</TouchableOpacity>
  );
};

const style = StyleSheet.create({
  root: {
    height: 150,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textRow: {
    gap: 15,
  },
  descView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },

  descText: {
    fontWeight: '600',
    fontSize: 13,
  },
});
