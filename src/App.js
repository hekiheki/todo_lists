import React, { Component } from 'react'
import Title from './Title'
import Input from './Input'
import List from './List'

class App extends Component {
  constructor(props){
      super();
      this.state = {
        todos: ['This is a ToDo List', 'Click to remove']
      }
  }

  onAddTodo(text) {
    const todos = this.state.todos;
    this.setState({
      todos: [text,...todos],
    })
  }

  onRemoveTodo(index) {
    const todos = this.state.todos;

    this.setState({
      todos: todos.filter((todo,i) => i!=index),
    })
  }

  render() {
    return (
      <div className="container">
        <Title>To-Do List</Title>
        <Input placeholder={'Type a todo, then hit enter!'} onSubmitEditing={this.onAddTodo.bind(this)} />
        <List list={this.state.todos} onClickItem={this.onRemoveTodo.bind(this)} />
      </div>
    );
  }
}

export default App;