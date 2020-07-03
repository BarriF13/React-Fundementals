import React from 'react'
//we need to say to items below to use the props = data which we grab from other component so we use prop.item.title 
export const NewsItem = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <h3>{props.item.title}</h3>
        <div>
          {props.item.feed}
        </div>
      </div>
    </div>
  )
}
// 
export default NewsItem;