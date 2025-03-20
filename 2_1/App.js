import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View } from 'react-native';
// import Todo, { TodoItem2 } from './components/todoItem'
import Todo from './components/todoItem'
import { useState, useEffect } from 'react';

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([{title: 'Go to shop'}])

  const addTodo = () => {
    setTodos((prevState) => {
      return [...prevState, { title: textInput }]
    })
    setTextInput('')
  }

  // useEffect(() => {
  //   console.log("Component was mounted")
  // }, [])

  useEffect(() => {
    console.log("Todos is updated", todos)
    return () => {
      console.log("todos cleanup", todos)
    }
  }, [todos])

  // useEffect(() => {
  //   console.log("Component was rerendered")
  // })
  
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        onChangeText={(value) => setTextInput(value)} 
        value={textInput}
      />
      <Button title='Add Todo' onPress={addTodo} />
      
      {/* <TodoItem2></TodoItem2> */}
      {todos.map((todo, index) => {
        return <Todo key={index} title={todo.title} />
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'lime',
    width: '100%'
  }
});
