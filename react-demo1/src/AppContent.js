import React, { Component } from 'react';
import './AppContent.css';
import 'bootstrap/dist/css/bootstrap.css'

export default class AppContent extends Component {

    btnHandler = () => {
        console.log('Button 1 clicked', this);
    } 

    render() {
        return (
            <div className='app-content'>
                <h3>Powered by Parth Halani</h3>
                <button onClick={this.btnHandler} className='btn btn-primary'>Button 1</button>
            </div>
        );
    }
}