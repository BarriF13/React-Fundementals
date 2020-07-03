import React from 'react'
//we need to say to items below to use the props = data which we grab from other component so we use prop.item.title or rename props with item-- it is like saying ftom the props which is a big object I only want the item 
export const NewsItem = ({item}) => {
  // console.log(props);
  return (
    <div>
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