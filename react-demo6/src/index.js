import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import CounterApp from './CounterApp'

class App extends Component {

  state = {
    showCounterApp: false,
    title: 'Counter app'
  };

  render() {

    let output = null;
    if(this.state.showCounterApp === true) {
      output = <CounterApp title={this.state.title}/>;
    }

    return (<div className='container'>
      <h1 className = 'alert alert-info'>Component Lifecycle Demo</h1>
      <hr/>

      <button className="btn btn-primary"
        onClick={()=>{
          this.setState({showCounterApp: !this.state.showCounterApp});
        }}
        >Show / Hide CounterApp Component</button>

      <button className="btn btn-secondary"
        onClick={()=>{
          if(this.state.title === 'Counter app') {
            this.setState({title: 'Click Counter app'})
          }
          else {
            this.setState({title: 'Counter app'})
          }
        }}
        >Toggle the title</button>

      {output}

    </div>);
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);