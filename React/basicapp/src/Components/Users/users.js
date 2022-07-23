import React from "react";
import User  from "../User/user";
import Spinner from 'react-bootstrap/Spinner';

import './users.css';


class Users extends React.Component{

    constructor(){
        super();
        this.state={isLoading:true,usersData:[]};
    }

    componentDidMount(){
        fetch("https://dummyapi.io/data/v1/user/",{
            headers:{
                "app-id":"62c1b1b65b25e6a595ee427b"
            }
        }).then(data=>data.json())
        .then(data=>{
           this.setState({isLoading:false,usersData:data.data});
        })
    }

     showSpinner(){
      
        return   <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    showUsers(){
        return  <div className="usersDiv">
        {
            this.state.usersData.map((user)=>{
                return <User data={user} />
            })
        }
        </div>
    }
   

    render(){
        return <div>
            <h1> Employee List</h1>
            {(this.state.isLoading)?this.showSpinner() :this.showUsers()}
       </div>
    }
}


export default Users;