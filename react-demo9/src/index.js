import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import ContactList from './ContactList'
// import ContactCard from './ContactCard'

class App extends Component {

  state = {contacts: []};

  componentDidMount() {
    fetch('http://localhost:4000/contacts/')
    .then(resp=>resp.json())
    .then(data=>this.setState({contacts: data}));
  }

  render() {

    return (<div className='container'>
      <h1 className = 'alert alert-info'>Using AJAX for getting data from REST Endpoint</h1>

      {/* <p>
        {this.state.contacts.length()} contact exists
      </p> */}

      <div className="row">
        <div className="col"></div>
          <ContactList contacts={this.state.contacts} />
        <div className="col"></div>
      </div>

    </div>);
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);