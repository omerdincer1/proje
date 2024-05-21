import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabContainer from './TabContainer';

const IncomeExpenseScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabContainer />
    </SafeAreaView>
  );
};

export default IncomeExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
