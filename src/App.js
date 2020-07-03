import React, { Component } from 'react';
import Header from './components/Header';
import JSON from './db.json';
import './App.css';

class App extends Component() {
 
  render(){
    return (
   
      <div className="App">
      <Header />
     </div>  
 
    );
  }
 
}

export default App;
