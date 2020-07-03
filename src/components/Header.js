//--------sample functional component which they only returning something 
// import React from 'react';

// const getYear =()=>{
//  const newDate = new Date();
// return newDate.getFullYear();
// } 
// const user = {
//   name: 'Barri',
//   LastName: 'Clever'
// }
//---------------main job to do is to return in this example
// const Header = () => {
// return ( 
//   <div>
//     <div> The year is {getYear()}</div>
//     <div>My name is {user.name} {user.LastName}</div>
//   </div>
// )
// }
// export default Header;

//--------in example below our function needs to know more than just returning so 1--we need a class component
//2-- after making a class we need to connect it to react so we extends it to react.component
//3-- we need to render the class--render function 
//4-- now we need to destructuring so we ass Component on the import line

//5- now we are adding an event
import React,{Component} from 'react';



class Header extends Component {

    render() {

      return ( 
        
        <header className="navbar bg-primary">
          
          <div 
          className="logo"
          onClick={ ()=> {console.log('I have been clicked')}}
          >Logo</div>
          <input type="text" />
        </header>
      )
      }
}


export default Header;