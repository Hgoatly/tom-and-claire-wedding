import { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

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
      <header className="App-header">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         { this.state.string }
        </p>
        <button onClick={() => this.setState({ string: 'Hello Ugglis' })}>Change Greeting</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <HomePage/>
    </div>
    )
  }
}

export default App;
