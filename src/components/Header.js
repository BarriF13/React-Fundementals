//--------sample functional component which they only returning something 
import React,{Component} from 'react';

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
//6- bind(this) is referring to the parent of the function -- if we remove it we then have to use fat arrow function for the child function 
// import React,{Component} from 'react';



// class Header extends Component {

//   state = {
//     keywords: ''
//   }
//   inputChangeHandler = (event) => {
//     event.preventDefault();
//     //console.log(event.target.value)
//     // each time we ust this function we set the state and react reload nad 
//     this.setState({
//       keywords: event.target.value
//     })
//   }
//     render() {
//       console.log(this.state.keywords)

//       return ( 
        
//         <header className="navbar bg-primary">
          
//           <div className="logo">Logo</div>
//           <input type="text" onClick={this.inputChangeHandler}/>
//         </header>
//       )
//       }
// }

//----------------
// class Header extends Component {
//     state = {
//       title: 'The keywords are: ',
//       keywords: ''
//     }
 
//   inputChangeHandler = (event) => {
//     // event.preventDefault();
  
//     this.setState({
//       keywords: event.target.value
//     })
//   }
//     render() {
//       console.log(this.state.keywords)

//       return ( 
        
//         <header className="navbar bg-primary">
          
//           <div className="logo">Logo</div>
//           <input type="text" onClick={this.inputChangeHandler}
          
//           />
//           <div>Title is {this.state.title}</div>
//           <div>{this.state.keywords}</div>
//         </header>
//       )
//       }
// }
//---------------props
class Header extends Component {

  state = {
    keywords: ''
  }

inputChangeHandler = (event) => {
  // event.preventDefault();
  // for background to change we need to see this is empty or not 

  this.setState({
    
    keywords: event.target.value
  })
}
  render() {
    //---playing with style
    // const style = {
    //   background: ''
    // }
    // if(this.state.keywords !== ''){
    //   style.background = 'teal'
    // }
//-------------------
     return ( 
      
      
      <header >
        
        <div className="logo">Logo</div>
        <input type="text" onClick={this.inputChangeHandler}
        
        />
      </header>
    )
    }
}

export default Header;