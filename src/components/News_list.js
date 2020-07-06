import React, { Fragment } from 'react';
import NewsItem from './News_item'

//information from other places coming as other props in the () below
const NewsList = ( props ) => {
// console.log(props.dog);

  const items = props.news.map((itemize) => {
    //in loop below each time you iterate you need to pass a key on each iteration-- this is from React
    return (
      <NewsItem  key={itemize.id} item={itemize}/>
    )
  }); 
  return (
    <Fragment>
      {/* <div>{props.news}</div> --wont show because it is an array of object */}
      {props.children}
      {items}
      
    </Fragment>
  )
}

export default NewsList; 