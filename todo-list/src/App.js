import React, { Component } from 'react';
import './App.css';
import Todoitem from './compornents/Todoitem';
import tick from './svg/tick.svg';
import Current from './compornents/Current';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      newItem: "",
      todoitem: [],
      current: [
        {current: 'All', active: true},
        {current: 'Active', active: false},
        {current: 'Non-Active', active: false},
      ],
    };
  };

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

  onCurrentClick(item) {
    const { current } = this.state;
    let index = current.indexOf(item);
    
    let result1 = current.slice(0, index);
    result1.map(x => x.active = false);
    let result2 = current.slice(index + 1);
    result2.map(x => x.active = false);

    this.setState({
      current: [
        ...result1,
        {...item, active: true},
        ...result2
      ]
    })
  } 

  render() {
  const { todoitem, newItem,  current } = this.state;
  let result = [...todoitem]
  let status = current.filter(x => x.active === true)[0].current;
  if(status === "Active") {
    result = result.filter(x => x.isDone === true);
  } else if(status === "Non-Active") {
    result = result.filter(x => x.isDone === false);
  }
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
        todoitem.length > 0 && result.map((item, index) => 
        <Todoitem 
        onClick={this.onItemClick.bind(this, item)} 
        key={index} 
        item= {item} />)
        }
        {
        todoitem.length === 0 && 'notthing here!'
        }
        <div className="Current-place">
          {
            current.map((item, index) => 
            <Current
            onClick={this.onCurrentClick.bind(this, item)}
            key={index}
            item={item}/>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
