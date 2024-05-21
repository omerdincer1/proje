import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IncomeListCard from '../../../../Components/IncomeListCard';
const IncomeContainer = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholderTextColor={'#3498db'}
        style={styles.input}
        placeholder="Gelir Ara"
        onChangeText={text => {
          setSearchText(text);
          filterGelir(text);
        }}
        value={searchText}
      />

      <View style={styles.incomeContainer}>
        <Text style={styles.incomeText}>67.290 TL Gelir</Text>
      </View>
      <View style={{flexDirection: 'row', gap: 5}}>
        <TouchableOpacity style={styles.incomeCard}>
          <Icon name={'list'} color={'#3498db'} size={30} />
          <Text style={styles.incomeCardText}>Gelir Kategorilerim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.incomeCard}>
          <Icon name={'add'} color={'#3498db'} size={30} />
          <Text style={styles.incomeCardText}>Gelir Kategorisi Oluştur</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          styles.incomeCard,
          {width: 400, alignItems: 'center', gap: 110, borderWidth: 2},
        ]}>
        <Icon name={'add'} color={'#3498db'} size={30} />
        <Text style={[styles.incomeCardText, {fontSize: 20}]}>
          Yeni Gelir Ekle
        </Text>
      </TouchableOpacity>
     <View style={{marginTop:20,gap:5}}>
       <IncomeListCard title={"Araba Satış"} date={"10.04.2024"} price={"44.000 TL"}/>
       <IncomeListCard title={"Mahsül Satış"} date={"02.04.2024"} price={"13.450 TL"}/>
       <IncomeListCard title={"Araba Satış"} date={"28.03.2024"} price={"9.840 TL"}/>
      

     </View>
    </ScrollView>
  );
};

export default IncomeContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  incomeContainer: {
    marginTop: 20,
    width: 400,
    height: 120,
    backgroundColor: 'royalblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 20,
  },
  incomeText: {
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  input: {
    alignSelf:"center",
    marginTop: 20,
    alignItems: 'center',
    height: 40,
    borderColor: '#3498db',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 300,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  incomeCard: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 10,
    width: 195,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
  incomeCardText: {
    fontSize: 13,
    color: '#3498db',
    fontWeight: '400',
  },
});
