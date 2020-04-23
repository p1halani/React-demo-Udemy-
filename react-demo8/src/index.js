import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import ContactCard from './ContactCard'

class App extends Component {

  render() {

    // const contact = {
    //   "id": 1,
    //   "name": "Parth Halani",
    //   "gender": "Male",
    //   "email": "parthhalani05@gmail.com",
    //   "phone": "+919421727746",
    //   "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9pHf6WW0upc64ZJeYg9XBpDMubvMQfnvUOYf4fm4QMZMtvkTu"
    // }

    const contacts = [
      {
        "id": 2,
        "name": "Parth Halani",
        "gender": "Male",
        "email": "parthhalani05@gmail.com",
        "phone": "+919421727746",
        "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9pHf6WW0upc64ZJeYg9XBpDMubvMQfnvUOYf4fm4QMZMtvkTu"
      },
      {
        "id": 3,
        "name": "Parth Halani",
        "gender": "Male",
        "email": "parthhalani05@gmail.com",
        "phone": "+919421727746",
        "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9pHf6WW0upc64ZJeYg9XBpDMubvMQfnvUOYf4fm4QMZMtvkTu"
      },
      {
        "id": 4,
        "name": "Parth Halani",
        "gender": "Male",
        "email": "parthhalani05@gmail.com",
        "phone": "+919421727746",
        "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9pHf6WW0upc64ZJeYg9XBpDMubvMQfnvUOYf4fm4QMZMtvkTu"
      }
    ]

    const contactCards = contacts.map(c => <ContactCard key={c.id} contact={c}/>);

    return (<div className='container'>
      <h1 className = 'alert alert-info'>Using AJAX</h1>

      {contactCards}

    </div>);
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);