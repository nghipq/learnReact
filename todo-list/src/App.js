import React, { Component } from 'react';
import './App.css';
import Todoitem from './compornents/Todoitem';
import tick from './svg/tick.svg';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      newItem: "",
      todoitem: []
    }
  }

  onItemClick(item) {
    let { todoitem } = this.state;
    let index = todoitem.indexOf(item);
    this.setState(
    {  todoitem: [
        ...todoitem.slice(0, index),
        {
          ...item, isDone: !item.isDone
        },
        ...todoitem.slice(index + 1),
      ]}    
    )
  }

  onKeyUp(event) {
    let text = event.target.value;
    if(event.keyCode !== 13) {
      return
    }

    text = text.trim();
    if(!text) {
      return
    }

    this.setState({
      newItem: "",
      todoitem: [
        {title: text, isDone: false},
        ...this.state.todoitem
      ]
    })
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
  const { todoitem, newItem } = this.state
    return (
      <div className="App">
        <div className="InputPlace">
          <img src={tick} width={32} height={32} alt="..." />
          <input type="text"
           placeholder="ADD NEW TODO"
           value={newItem}
           onChange={this.onChange.bind(this)}
           onKeyUp={this.onKeyUp.bind(this)} />
        </div>
        {
        todoitem.length > 0 && todoitem.map((item, index) => 
        <Todoitem 
        onClick={this.onItemClick.bind(this, item)} 
        key={index} 
        item= {item} />)
        }
        {
        todoitem.length === 0 && 'notthing here!'
        }
      </div>
    );
  }
}

export default App;
