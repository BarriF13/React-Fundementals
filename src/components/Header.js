import React from 'react';

const getYear =()=>{
 const newDate = new Date();
return newDate.getFullYear();
} 
const user = {
  name: 'Barri',
  LastName: 'Clever'
}

const Header = () => {
return ( 
  <div>
    <div> The year is {getYear()}</div>
    <div>My name is {user.name} {user.LastName}</div>
  </div>
)
}
export default Header;