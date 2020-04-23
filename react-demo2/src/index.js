import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

const Button = props => (
  <button className='btn btn-primary' onClick={props.handler}>
    {props.caption}
  </button>
);

class App extends Component {

  state = {num: 0};

  // increment = () => {
  //   this.setState({num: this.state.num+1});
  // }

  // decrement = () => {
  //   this.setState({num: this.state.num-1});
  // }

  increOrdecre = (intval) => {
    this.setState({num: this.state.num+intval});
  }

  render() {
    return (<div className='container'>
      <h1 className = 'alert alert-info'>ReactJS Counter Application</h1>
      <h3>Value of num is {this.state.num}</h3>
      {/* <button className='btn btn-primary' onClick={this.increment}>Increment</button>
      <button className='btn btn-primary' onClick={this.decrement}>Decrement</button> */}
      
      {/* <button className='btn btn-primary' onClick={() => this.increOrdecre(1)}>Increment</button>
      <button className='btn btn-primary' onClick={() => this.increOrdecre(-1)}>decrement</button> */}

      <Button caption = 'Increment' handler = {() => this.increOrdecre(1)}/>
      <Button caption = 'Decrement' handler = {() => this.increOrdecre(-1)}/>
    </div>);
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);