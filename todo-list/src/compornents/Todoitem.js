import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './Todoitem.css';
import check from '../svg/success.svg';
import checkDone from '../svg/success-done.svg';

const classNames = require('classnames');

class Todoitem extends Component {
    render() {
        const {item, onClick} = this.props;
        let url = check;
        if(item.isDone) {
            url = checkDone
        }
        let className = classNames('Todoitem', {TodoitemDone: item.isDone});

        return (
            <div className={className}>
                <img onClick={onClick} src={url} alt="..."/>
                <p>{item.title}</p>
            </div>
        );
    };
}

Todoitem.propTypes = {
    item: PropTypes.shape({
        isDone: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func
}

export default Todoitem