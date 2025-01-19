import {
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "@/data/todoData";
import { useState } from "react";

//interface for todo item
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Index() {
  //sorting data by id
  const sortedData = data.sort((a, b) => a.id - b.id);

  //declaring state
  const [todo, setTodo] = useState(sortedData);
  const [text, setText] = useState("");

  //function to add new todo item
  const addTodo = () => {
    if (text) {
      const newTodo = {
        id: todo.length + 1,
        title: text,
        completed: false,
      };
      setTodo([...todo, newTodo]);
      setText("");
    }
  };
  //function to toggle todo item
  const toggleTodo = (id: number) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodo(updatedTodo);
  };
  //function to delete todo item
  const removeTodo = (id: number) => {
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
  };

  //rendering todo list
  const renderItem = ({ item }: { item: Todo }) => (
    <View style={styles.inputContainer}>
      <Text
        style={[styles.todoText, item.completed && styles.completedText]}
        onPress={() => toggleTodo(item.id)}
      >
        {item.title}
      </Text>
      <Pressable onPress={() => removeTodo(item.id)}>
        <MaterialCommunityIcons name="delete" size={24} color="white" />
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        placeholder="Add new todo"
        value={text}
        placeholderTextColor={"#666"}
        onChangeText={setText}
        />
        <Pressable style={styles.button} onPress={addTodo}>
          <Text style={styles.addButtonText} >Add</Text>
        </Pressable>
      </View>
      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle= { {flexGrow: 1} }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 'auto',
    width: '90%',
    maxWidth: 1024,
    padding: 10,
    pointerEvents: 'auto',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    fontSize: 18,
    minWidth: 0,
    color: "black",
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  addButtonText: {
    fontSize: 18,
    color: 'black',
  },
  todoText: {
    flex: 1,
    fontSize: 18,
    color: 'white',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});