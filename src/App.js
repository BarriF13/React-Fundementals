import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NewsList from './components/News_list'
import JSON from './db.json';


class App extends Component {

  state = {
    news:JSON,
    filtered:[]
  }
  getKeyword = (event) => {
    // console.log(event.target.value);
    let keyword = event.target.value;

    let filtered = this.state.news.filter((item)=> {
      return item.title.indexOf(keyword) > -1
    });
    this.setState({filtered});
  }
 
  render(){
    // console.log(this.state.news);
    let newsFiltered = this.state.filtered;
    let newsWhole = this.state.news
    return (
   
      <div className="App">
      <Header keywords={this.getKeyword} />
      <NewsList news={newsFiltered.length === 0 ? newsWhole: newsFiltered} >
        {/* what ever information we put here will count as part of props */}
        Hello lolo 
      </NewsList>
     </div>  
 
    );
  }
 
}

export default App;
