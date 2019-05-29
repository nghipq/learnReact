import React, { Component } from 'react';
import './Current.css' 

const classNames = require('classnames');

class Current extends Component {
    render() {
        const {item, onClick} = this.props;
        let className = classNames('Current', {Active: item.active} )
        
        return (
            <button className={className}
            onClick={onClick}
            >{item.current}</button>
        )
    }
}

export default Current