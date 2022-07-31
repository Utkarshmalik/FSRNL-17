import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from '../Commons/Spinner/spinner';
import './userModel.css';

function UserModel({id,closeModel}) {

    const [isLoading,setIsLoading]=useState(true);
    const [userDetails,setUserDetails]=useState(null);
    const {prepareMessage,showUserDetails} = useUserModelHook();


   useEffect(()=>{
    fetch(`https://dummyapi.io/data/v1/user/${id}`,{
        method:"GET",
        headers:{
            "app-id":"62c1b1b65b25e6a595ee427b"
        }})
        .then(res=>res.json())
        .then(data=>{
            setIsLoading(false);
            setUserDetails(data);
        })
    },[]);



  return (
      <div className='userModel' >
    <Modal.Dialog>
      <Modal.Header >
        <Modal.Title>Complete User Details </Modal.Title>
      </Modal.Header>

      
      <Modal.Body>
          {console.log(userDetails)}
          {(isLoading)?<Spinner message={prepareMessage(id)} />:showUserDetails(userDetails)};   
      </Modal.Body>

  
      <Modal.Footer>
        <Button onClick={closeModel} variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
    </div>
  );
}


function useUserModelHook(){

    function prepareMessage(id){
        return `Fetching data for user ${id}`
    }


    function showUserDetails(userDetails){

       console.log(userDetails);

        const {id,title,firstName,lastName,picture,location,phone,email,dateOfBirth,gender}=userDetails;
        const fullName = `${title} ${firstName} ${lastName}`;
        const {street,city,state,country}=location;
        const address=`${street} ${city} ${state} ${country}`;

        return(
             <div className='userModalBody' > 
      <img height="400" width="300"  src={picture} />
        <div>
        <h4> Name: {fullName} </h4>
        <p> id:  {id} </p>
        <p> gender: {gender} </p>
        <p> email: {email} </p>
        <p> DOB: {dateOfBirth} </p>
        <p> phone: {phone} </p>
        <p> address: {address} </p>
        </div>
    </div> 
        )
    }

    return {prepareMessage,showUserDetails};

}

export default UserModel;