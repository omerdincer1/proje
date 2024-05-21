import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/Navigation/RootNavigation';

function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
