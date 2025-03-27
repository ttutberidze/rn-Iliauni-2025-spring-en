import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View } from 'react-native';
import Todo from './components/todoItem'
import { useState, useCallback } from 'react';
import Add from './components/add';

export default function App() {
  const [todos, setTodos] = useState([{title: 'Go to shop', id: Math.random()}])

  const addTodo = (textInput) => {
    setTodos((prevState) => {
      return [...prevState, { title: textInput, id: Math.random() }]
    })
  }

  const remove = useCallback((id) => {
    setTodos((prevTodos) => 
                    prevTodos.filter((todo) => todo.id !== id))
  }, [])

  return (
    <View style={styles.container}>
      <Add addTodo={addTodo} />
      {/* <ScrollView>
        {todos.map((todo, index) => {
          return <Todo key={index} title={todo.title} removeItem={() => remove(index)} />
        })}
      </ScrollView> */}
      <FlatList
        data={todos}
        renderItem={({item: todo}) => <Todo 
                            id={todo.id}
                            title={ todo.title } 
                            removeItem={ remove }
                          />
        }
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  }
});
