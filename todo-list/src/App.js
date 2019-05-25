import React, { Component } from 'react';
import './App.css';
import Todoitem from './compornents/Todoitem'

class App extends Component {
  constructor() {
    super(); 
    this.todoitem = [
      {title: "bye meat", isDone: false},
      {title: "bye fish", isDone: false},
    ]
  }
  render() {
    return (
      <div className="App">
        {
          this.todoitem.map((item, index) => <Todoitem key={index} item= {item} />)
        }
      </div>
    );
  }
}

export default App;
