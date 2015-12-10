/**
 * Created by flybear on 15/11/18.
 */

import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {click: false};
    }

    handleClick(event){
        this.setState({click: !this.state.click});
    }

    render() {
        let title = this.state.click ? "don't click me!" : "click me!";
        return (
            <div>
                <h2>About</h2>
                <ul>
                   <li onClick={this.handleClick}>{title}</li>
                </ul>
            </div>
        )
    }
}

export default About
