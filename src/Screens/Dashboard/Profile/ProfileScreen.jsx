import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ProfileCard} from '../../../Components/ProfileCard';
import ListItem from '../../../Components/ListItem';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <ProfileCard
      disabled={true}
        title={'Ömer Dinçer'}
        location={'Çukurova/Adana'}
        description={'mrdncr02@gmail.com'}
        icon={true}
        imgSrc={require('../../../Assets/Icons/farmerIcon.png')}
      />
      
      <ListItem iconName={'settings'} title={'Hesap Ayarları'} />
      <ListItem iconName={'notifications'} title={'Bildirimler ve Sesler'} />
      <ListItem iconName={'security'} title={'Gizlilik ve Güvenlik'} />
      <ListItem iconName={'language'} title={'Dil'} />

      <TouchableOpacity style={styles.logoutView}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoutView: {
    height: 60,
    width: '50%',
    marginTop: 75,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  logoutText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
