import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const WelcomeScreen = ({navigation}) => {
  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };
  const goToRegisterScreen = ()=>{
    navigation.navigate('Register')
  }
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.loginHeader}>
        <Text style={styles.headerText}>FARMER</Text>
      </View>
      <Image
        style={styles.stretch}
        source={require('../../Assets/Icons/farmerIcon.png')}
      />


      <TouchableOpacity onPress={goToLoginScreen}>
        <View style={styles.loginButton}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.registerView}>
        <Text style={styles.registerText}>
            Hesabın yok mu?
        </Text>
        <TouchableOpacity onPress={goToRegisterScreen}>
            <Text style={styles.registerTextButton}>Kayıt ol</Text>
        </TouchableOpacity>
   
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#06BF77',
  },
  loginHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    textAlign:"center"
  },
  headerText: {
    letterSpacing: 5,
    fontSize: 65,
    fontWeight: '800',
    color: '#FFFAEF',
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    margin: 20,
  },

  loginButton: {
    marginTop: 200,
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
  registerView:{
    marginTop:10,
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center"
  },
  registerText:{
    color:"#FFF",
    fontSize:20,
  },
  registerTextButton:{
    color:"#FFF",
    fontSize:22,
    fontWeight:"800"
  }
});
export default WelcomeScreen;
