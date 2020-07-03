import React, { Component } from 'react';
import Header from './components/Header';
import NewsList from './components/News_list'
import JSON from './db.json';
import './App.css';

class App extends Component {

  state = {
    news:JSON
  }
 
  render(){
    // console.log(this.state.news);
    return (
   
      <div className="App">
      <Header />
      <NewsList news={this.state.news} dog="zaghart"/>
     </div>  
 
    );
  }
 
}

export default App;
