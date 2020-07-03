import React from 'react';

import { css } from 'glamor';
//we need to say to items below to use the props = data which we grab from other component so we use prop.item.title or rename props with item-- it is like saying ftom the props which is a big object I only want the item 
export const NewsItem = ({item}) => {
// console.log(props);

  let news_style = css({
    padding: '2px',
    boxSizing:'border-box',
    borderBottom:'4px solid pink',
    ':hover':{
      color:'teal',
    },
    '@media (max-width: 500px)':{
      color:'Purple'
    }

  })
  
  return (
    <div className= {`${news_style}`}>
      <div>
        <h3>{item.title}</h3>
        <div>
          {item.feed}
        </div>
      </div>
    </div>
  )
}
// 
export default NewsItem;