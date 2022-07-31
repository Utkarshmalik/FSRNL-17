import React from "react";
import User  from "../User/user";
import Spinner from '../Commons/Spinner/spinner';
import UserModel from '../UserModel/userModel';
import './users.css';


class Users extends React.Component{

    constructor(){
        super();
        this.state={isLoading:true,usersData:[],searchValue:"",isModelOpen:false};
    }

    componentDidMount(){
        fetch("https://dummyapi.io/data/v1/user/",{
            headers:{
                "app-id":"62c1b1b65b25e6a595ee427b"
            }
        }).then(data=>data.json())
        .then(data=>{
           this.setState({isLoading:false,usersData:data.data});
           this.completeData=data.data;
        })
    }

     showSpinner(){
         return <Spinner/>
    }

    onSearchFieldChange(e){
        const value=e.target.value.toLowerCase();
        this.setState({searchValue:value});

        const filteredData= this.completeData.filter((user)=>{
           return  user.firstName.toLowerCase().startsWith(value);
        })

        this.setState({usersData:filteredData});
    }

    showUsers(){
        return  <div>

         <input onChange={(e)=>this.onSearchFieldChange(e)} value={this.state.searchValue} type="text" />
         <div className="usersDiv">

        {
            this.state.usersData.map((user)=>{
                return <User data={user} openModel={this.openModel.bind(this)} />
            })
        }
        </div>

        </div>
    }


    openModel(id){
        this.id=id;
        this.setState({isModelOpen:true});
    }

    closeModel(){
        this.setState({isModelOpen:false});
    }
   

    render(){
        return <div>
            <h1> Employee List</h1>
            {(this.state.isLoading)?this.showSpinner() :this.showUsers()}
            { this.state.isModelOpen &&  <UserModel  id={this.id}  closeModel={this.closeModel.bind(this)}  />}
       </div>
    }
}


export default Users;