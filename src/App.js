import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

        <Route exact path="/" render={() => {
          return(
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            </header>
          )
        }} />
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
      </div>
    );
  }
}

export default App;
