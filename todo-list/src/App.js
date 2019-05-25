import React, { Component } from 'react';
import './App.css';
import Todoitem from './compornents/Todoitem'

class App extends Component {
  constructor() {
    super(); 
    this.todoitem = [
      "bye meat",
      "bye fish"
    ]
  }
  render() {
    return (
      <div className="App">
        {
          this.todoitem.map((item, index) => <Todoitem key={index} title= {item} />)
        }
      </div>
    );
  }
}

export default App;
