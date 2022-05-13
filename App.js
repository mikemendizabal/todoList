import React, {useState} from 'react';
import { Keyboard, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>
      <View style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task} onChangeText={text => setTask(text)}
        />
        <TouchableOpacity style={styles.sectionTitle} onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  writeTaskWrapper:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderWidth: 4,
    width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
  },
  addText:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});
