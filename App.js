import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryList from './components/CategoryList';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryList/>
      <CategoryList/>
      <CategoryList/>
      <CategoryList/>
      <CategoryList/>
      <CategoryList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 26,
    paddingright: 26
  },
});
