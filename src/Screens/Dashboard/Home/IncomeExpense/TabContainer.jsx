import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import IncomeContainer from './IncomeContainer';
import ExpenseContainer from './ExpenseContainer';

const GelirTab = () => {
  return <IncomeContainer />;
};

const GiderTab = () => {
  return <ExpenseContainer />;
};

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState('gelir');

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.tabButtonsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'gelir' && styles.activeTab]}
          onPress={() => handleTabPress('gelir')}>
          <Text style={styles.tabButtonText}>Gelir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'gider' && styles.activeTab]}
          onPress={() => handleTabPress('gider')}>
          <Text style={styles.tabButtonText}>Gider</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.tabContentContainer}>
        {activeTab === 'gelir' ? <GelirTab /> : <GiderTab />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabButtonsContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tabButton: {
    paddingHorizontal: 5,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#3498db',
  },
  tabButtonText: {
    color: '#3498db',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
});

export default TabContainer;
