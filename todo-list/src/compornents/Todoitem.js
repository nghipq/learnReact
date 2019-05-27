import React, { Component } from 'react';
import './Todoitem.css';

const classNames = require('classnames');

class Todoitem extends Component {
    render() {
        const {item, onClick} = this.props;
        let className = classNames('Todoitem', {TodoitemDone: item.isDone});

        return (
            <div onClick={onClick} className={className}>
                {item.title}
            </div>
        );
    };
}

export default Todoitem