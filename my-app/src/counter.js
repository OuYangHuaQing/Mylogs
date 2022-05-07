import React, {Component} from 'react';
import { Button } from 'antd';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    add = () => {
        let newNumber = this.state.number + 1
        this.setState({
            number: newNumber
        })
    }

    substract = () => {
        let newNumber = this.state.number - 1
        this.setState({
            number: newNumber
        })
    }

    render() {
        return (
            <React.Fragment>
                <Button type="primary" onClick={this.add}>增加</Button>
                <span>{this.state.number}</span>
                <Button type="primary" onClick={this.substract}>减少</Button>
            </React.Fragment>
        );
    }
}

export default Counter;