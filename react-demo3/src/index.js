import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import ContactForm from './ContactForm'

class App extends Component {

  render() {
    return (<div className='container'>
      <h1 className = 'alert alert-info'>Using "refs" (Uncontrolled Components)</h1>

      <div className="row">
        <div className="col">
          <ContactForm />
        </div>
        <div className="col"></div>
      </div>

    </div>);
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);