import React, { Component } from 'react';
import './Todoitem.css';

const classNames = require('classnames');

class Todoitem extends Component {
    render() {
        const {item} = this.props;
        let className = classNames('Todoitem', {TodoitemDone: item.isDone});

        return (
            <div className={className}>
                <p>{item.title}</p>
            </div>
        );
    };
}

export default Todoitem