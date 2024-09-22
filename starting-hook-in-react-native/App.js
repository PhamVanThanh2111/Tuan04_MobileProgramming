import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(1);
  const [arr, setArr] = useState([1, 2, 3]);
  const handleClick = () => {
    const newStart = start + 1;
    const newArr = [newStart, newStart + 1, newStart + 2];

    setStart(newStart);
    setArr(newArr);
  };
  return (
    <View>
      <Text style={styles.result}>{count}</Text>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
      <FlatList
        data={arr}
        renderItem={({ item }) => <Text style={{ fontSize: 24 }}>{item}</Text>}
        keyExtractor={(item) => item.toString()}
      />
      <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    fontSize: 20,
    letterSpacing: 15,
  },
  button: {
    backgroundColor: 'black',
    height: 40,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
