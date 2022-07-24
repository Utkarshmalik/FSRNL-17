import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersComponent from './Components/Users/users';
import LoginForm from './Components/LoginForm/loginForm';


class App extends React.Component{

  constructor(){
    super();
    this.state={isLoggedIn:true}
  }

  onLoginSuccessful(){
    this.setState({isLoggedIn:true});
  }

  render(){
    return (
      <div className="App">
       {(this.state.isLoggedIn)?<UsersComponent/>:<LoginForm onLoginSuccessful={this.onLoginSuccessful.bind(this)} />}
      </div>
    );

  }

}



export default App;
