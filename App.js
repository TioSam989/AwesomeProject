import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredBookText, setEnteredBookText] = useState('') //the text inserted in the input and eh action of SET IN 
  const [books, setBooks] = useState([]) //is an array cuz is a list of books but has no books yet

  function bookInputHandler(enteredText) {
    setEnteredBookText(enteredText)
  }
  function addBookHandler() {
    // setBooks([...books, enteredBookText]) // works but not the better way to update an state

    setBooks((currentBooks) => [
      ...books,
      enteredBookText,
    ]); // recommended way, with aero func
  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Add ur book' onChangeText={bookInputHandler} />
        <Button title="Add book" onPress={addBookHandler} />
      </View>

      <View style={styles.booksContainer}>
        {books.map((book) => <Text key={book}>{book}</Text>)}
      </View>

    </View>
  );
  f
}

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
