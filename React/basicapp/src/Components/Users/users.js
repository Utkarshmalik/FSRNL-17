import User  from "../User/user";

const users=[{name:"utkarsh",age:27},{name:"Rahul",age:34}];

function Users(){

    return (
        <div>
        <h1> This is users component </h1>
        {
            users.map((user)=>{
                return <User name={user.name} age={user.age} />
            })
        }
        </div>
    )
}


export default Users;