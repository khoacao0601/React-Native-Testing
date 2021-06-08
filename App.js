import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryList from './components/CategoryList';

export default function App() {

  const [category, setCategory] = useState([
    { id:1, name: 'dog'},
    { id:2, name: 'cat'},
    { id:3, name: 'chicken'}
  ])

  return (
    <FlatList data={category}
      renderItem={({ item }) => <CategoryList category={item}/>}
      keyExtractor={item => `${item.id}`}/> //`${item.id}` to convert from number to string
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
