import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  function bookInputHandler(enteredText) {

  }
   function addBookHandler(){

   }

  return (
    <View style={styles.appContainer}>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Add ur book' onChangeText={bookInputHandler} />
        <Button title="Add book" onPress={addBookHandler} />
      </View>
      
      <View style={styles.booksContainer}>
        <Text>List of books</Text>
      </View>

    </View>
  );
f}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  booksContainer: {

    flex: 4
  }

});
