import React, { Component } from 'react';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            email:'',
            role:''

        }
    }

   
  render() {
    return (
      <div className="LandingPage">
      <h2>Register!</h2>
        <form action="http://task26.herokuapp.com/user/create" method="post">
        <input type="text" name="username"></input>
        <input type="password" name="password"></input>
        <input type="email" name="email"></input>
        <input type="number" name="role"></input>
        <button onClick="">Send</button>
        </form>
      </div>

      

        
    );
  }
}

export default Register;
