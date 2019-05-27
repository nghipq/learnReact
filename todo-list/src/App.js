import React, { Component } from 'react';
import './App.css';
import Todoitem from './compornents/Todoitem'

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      todoitem: [
      {title: "bye meat", isDone: true},
      {title: "bye fish", isDone: false},
    ]}
  }

  onItemClick(item) {
    this.setState(
      this.change(item)
    )
  }

  change(item) {
    return this.state.todoitem.filter(x => x === item).map(x => x.isDone = !item.isDone);
  } 

  render() {
  const { todoitem } = this.state
    return (
      <div className="App">
        {
        todoitem.length > 0 && todoitem.map((item, index) => <Todoitem onClick={this.onItemClick.bind(this, item)} key={index} item= {item} />)
        }
        {
        todoitem.length === 0 && 'notthing here!'
        }
      </div>
    );
  }
}

export default App;
