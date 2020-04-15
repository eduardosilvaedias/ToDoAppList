import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todoText: '',
      todoArray: [],
    }
  }
 


   addTodo = () => {
    if(this.state.todoText === ''){ 
      alert('Digite alguma coisa')
    } else {
      const todoArray = [];
      const data = {
        description: this.state.todoText,
        done: false,
      }

      todoArray.push(...this.state.todoArray, data);
      this.setState({todoText: '', todoArray})
    }
  }

  setDone = (index) => {
    let allData  = this.state.todoArray;
    allData[index].done = !allData[index].done;
    
    this.setState({todoArray: allData})
  }

  deleteTodo = (index) => {
    let allData  = this.state.todoArray;
    
    allData.splice(index, 1);
    this.setState({todoArray: allData})
  }
  
  render(){

  return (
    <View style={styles.container}>
    
    <View style={styles.inputView}>
      <TextInput 
        style={styles.input}
        placeholder="Digite um todo"
        onChangeText={text => this.setState({todoText: text})}
        value={this.state.todoText}
      />

      <TouchableOpacity onPress={() => this.addTodo()} style={styles.inputButtom}>
        <Text>Add</Text>
      </TouchableOpacity>

    </View>

    {this.state.todoArray.map((item, index) => (
      <TouchableOpacity onLongPress={() => this.deleteTodo(index)} onPress={() => this.setDone(index)} 
      style={styles.itemView}
      >
        <Text style={styles.itemText}>{item.description}</Text>
  
        <View style={[styles.status, {backgroundColor: item.done ? 'green' : 'red'}]} />
      </TouchableOpacity>
    )
  )}
     
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginRight: 10,
  },
  inputView:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputButtom: {
  backgroundColor: 'red',
  },
  itemView: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 2,
    marginBottom: 8,
    borderColor: 'gray',
  },
  itemText: {
    color: 'gray',
    fontSize: 18,
    marginRight: 5,
  },
  status: {
    height: 20,
    width: 20,
    borderRadius: 20 /2,
  }
});
