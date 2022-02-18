import React from 'react';
import { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Invitation from './pages/invitation/invitation.component';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Hello Humlis'
    }
  }
  render() {
    return (
      <div className="App">
      <Header />  

    </div>
    )
  }
}

export default App;
