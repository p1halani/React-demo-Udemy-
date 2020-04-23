import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import './App.css'

class App extends Component {

  render() {
    const footerProps = {
      website: 'https://p1halani.github.io',
      year: 2020,
      company: 'Parth Inc'
    };

    return <div className='app'>
      <AppHeader title="Addressbook App - v1.0" subheading="Created by Parth"/>
      <AppContent />
      <AppFooter {...footerProps}/>
    </div>;
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);