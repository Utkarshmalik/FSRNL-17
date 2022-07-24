
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from '../Commons/Spinner/spinner';
import "./loginForm.css";

let auth=true;

class Login extends React.Component{

  constructor(){
    super();
    this.state={email:"",password:"",isLoading:false,showError:false};
  }

  onEmailChange(e){
    this.setState({email:e.target.value});
  }


  onPasswordChange(e){
    this.setState({password:e.target.value});
  }

  onLogin(email,password){
    
    this.setState({isLoading:true,showError:false});

    //Authenticate by making an API call 

    setTimeout(()=>{
      if(auth){
      this.props.onLoginSuccessful();
      }else{
        this.setState({showError:true});
      }
      this.setState({isLoading:false});
    },4000);

  }


  render(){
    return (
      <Form className='loginForm' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=>this.onEmailChange(e)} value={this.state.email} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=>this.onPasswordChange(e)}  value={this.state.password} type="password" placeholder="Password" />
        </Form.Group>

        {(this.state.isLoading)?<Spinner/>:
        (<Button onClick={()=>this.onLogin(this.state.email,this.state.password)} variant="primary">
          Submit
        </Button>)
        }
       
        {this.state.showError &&  <p style={{color:"red"}}>Invalid Credentials</p>}
       
      </Form>
    );
  }
}

export default Login;