import React, { Component } from 'react';

class CounterApp extends Component {

    state = {
        count: 1,
        title: 'Counter app'
    }

    num = 1

    constructor() {
        super();
        console.log('CounterApp.constructor called');
    }

    render() {
        console.log('CounterApp.render called');
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>Value of count is {this.state.count}</p>
                <p>Value of num is {this.num}</p>

                <button onClick={
                    ()=>this.setState({count: this.state.count + 1})
                } className="btn btn-secondary">Increment count</button>
                <button onClick={
                    ()=>{
                        this.num++;
                        this.forceUpdate();
                    }
                } className="btn btn-secondary">Increment num</button>
            </div>
        );
    }

    static getDerivedStateFromProps(props, state) {
        console.log('CounterApp.getDerivedStateFromProps called');
        return null;
    }

    componentDidMount() {
        console.log('CounterApp.componentDidMount called');
    }

    componentWillUnmount() {
        console.log('CounterApp.componentWillUnmount called');
    }

    shouldComponentUpdate() {
        console.log('CounterApp.shouldComponentUpdate called',this.state.count);
        return false;
    }

    getSnapshotBeforeUpdate() {
        console.log('CounterApp.getSnapshotBeforeUpdate called');
        return null;    
    }

    componentDidUpdate() {
        console.log('CounterApp.componentDidUpdate called');
    }

}

export default CounterApp;