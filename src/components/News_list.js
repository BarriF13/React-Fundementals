import React, { Fragment } from 'react';

//information from other places coming as other props in the () below
const NewsList = ( props ) => {
// console.log(props.dog);

  const items = props.news.map((item) => {

    return (
      <div>
        <h3>{item.title}</h3>
        <div>
          {item.feed}
        </div>
      </div>
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