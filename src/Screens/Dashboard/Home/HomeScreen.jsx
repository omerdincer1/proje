import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native';
import React, { useState } from 'react';
import LandCard from '../../../Components/LandCard';
import {ProfileCard} from '../../../Components/ProfileCard';

export default function HomeScreen({navigation}) {
  const goToProductScreen = ()=>{
    navigation.navigate("Product")
  }
  const goToIncomeExpenseScreen = () => {
    navigation.navigate("IncomeExpense");
  };
  const [modalVisible, setModalVisible] = useState(false);
  const callEngineer = () => {
    setModalVisible(false);
    // Telefonun arama kısmına mühendisin telefon numarasını girin.
    Linking.openURL('tel:+1234567890');
  };
  return (
    <SafeAreaView style={style.root}>
      <View style={{flexDirection: 'row'}}>
        <LandCard
          title="Tarla Ekle"
          topIcon="forest"
          botIcon="add-circle"
          background="lime"
        />
        <LandCard
          title="Tesis Ekle"
          topIcon="festival"
          botIcon="add-circle"
          background="limegreen"
        />
      </View>

      <TouchableOpacity
        style={{
          borderWidth: 0.2,
          borderColor: 'lime',
          marginHorizontal: 10,
          marginTop: 20,
        }}>
        <ProfileCard
          onPress={()=>{setModalVisible(true) 
          }}
          title="İşi uzmanına danış.."
          description="Tüm sorularınız için mühendisine danış."
          imgSrc={require('../../../Assets/Icons/engineerIcon.png')}
        />
      </TouchableOpacity>
      
     <TouchableOpacity style={style.productView} onPress={goToProductScreen}>
      <Text style={style.productText}>Ürünlerim</Text>
     </TouchableOpacity>

     <TouchableOpacity style={[style.productView, {backgroundColor:"#3498db"}]} onPress={goToIncomeExpenseScreen}>
      <Text style={style.productText}>Gelir & Gider</Text>
     </TouchableOpacity>

     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Mühendisini Ara</Text>
            <TouchableOpacity
              style={style.modalButton}
              onPress={callEngineer}>
              <Text style={style.textStyle}>Ara</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.modalButton, style.secondaryButton]}
              onPress={() => setModalVisible(false)}>
              <Text style={style.textStyle}>İptal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  root: { 
    flex: 1,
  },
  productView:{
    marginTop:20,
    marginHorizontal:10,
    borderRadius:20,
    height:100,
    width:"auto",
    backgroundColor:"#06BF77",
    alignItems:"center",
    justifyContent:"center"
  },
  productText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,

  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width:300,
    height:200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    width: 100,
    backgroundColor: '#2196F3',
  },
  secondaryButton: {
    backgroundColor: '#f44336',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
