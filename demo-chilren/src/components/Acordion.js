import React, { Component } from 'react'

class Acordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: true
        };
        
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
    }

    render() {
        const { heading, children } = this.props;
        const {isCollapsed} = this.state;
        return  <div className="Acordion">
                    <div className="Heading" onClick={this.onClick} >
                        <h2>{ heading }</h2>
                    </div>
                    { !isCollapsed && <div>{ children }</div> }
                </div>
    }
}

export default Acordion

