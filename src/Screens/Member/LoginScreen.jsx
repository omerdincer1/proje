import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import React, {useState} from 'react';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goToDashboardScreen = ()=>{
    navigation.navigate('Dashboard')
  }
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderText}>Giriş Yap</Text>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      </View>
      <View style={styles.rowView}>
        <TouchableOpacity>
          <Text style={{color: '#06BF77', fontSize: 16}}>Şifremi Unuttum</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goToDashboardScreen}>
        <View style={styles.loginButton}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    
  },
  loginHeader: {
    width: '100%',
    height: 200,
    backgroundColor: '#06BF77',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginHeaderText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#FFF',
  },
  inputContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
    gap: 20,
  },
  textInput: {
    height: 50,
    borderColor: '#D9D9D9',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  rowView: {
    marginTop: 5,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  loginButton: {
    alignSelf:"center",
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9B54C',
    borderRadius: 20,
    width: 300,
    height: 60,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '800',
  },
});
export default LoginScreen;
