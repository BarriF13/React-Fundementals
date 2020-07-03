import React, { Fragment } from 'react';
import NewsItem from './News_item'
//information from other places coming as other props in the () below
const NewsList = ( props ) => {
// console.log(props.dog);

  const items = props.news.map((item) => {

    return (
      <NewsItem  item={item}/>
    )
  }); 
  return (
    <Fragment>
      {/* <div>{props.news}</div> --wont show because it is an array of object */}
      {items}
    </Fragment>
  )
}

export default NewsList;