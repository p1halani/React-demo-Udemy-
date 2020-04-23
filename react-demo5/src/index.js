import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import ContactForm from './ContactForm'

class App extends Component {

  render() {
    return (<div className='container'>
      <h1 className = 'alert alert-info'>Form Validation</h1>
          <ContactForm />

    </div>);
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);