
const allUsers=document.getElementsByClassName('users')[0];
const message=document.getElementsByClassName('message')[0];
const searchField=document.getElementsByName("user-search")[0];

var allUsersData;


searchField.addEventListener('keyup', function(){

    const value=this.value;

    const filteredUsers=allUsersData.filter((user)=>{
        return user.firstName.toLowerCase().startsWith(value);
    })

    removeExistingUsers();
    loadUsers(filteredUsers);
    showUsers();
});

function removeExistingUsers(){
    allUsers.innerHTML='';
}

fetch("https://dummyapi.io/data/v1/user",{
    "method":"GET",
    headers:{
        "app-id":"62c1b1b65b25e6a595ee427b"
    }})
    .then(response=>response.json())
    .then(data=>{
        allUsersData=data.data;
        loadUsers(data.data);
        hideLoadingMessage();
        showUsers();
    });

    function hideLoadingMessage(){
        message.style.display="none";
    }

    function showUsers(){
        allUsers.style.display="flex";
    }


    function loadUsers(users){


        users.forEach((user)=>{

            //try to make a card 

            const userCard=createUserCard(user);
            allUsers.appendChild(userCard);

        })
    }

    function createUserCard(user){

        const userDiv=document.createElement('div');
        userDiv.className="user";
        userDiv.id=user.id;

        const userImageDiv=document.createElement('div');
        userImageDiv.className="user-image";

        const imageElement=document.createElement('img');
        imageElement.setAttribute("src",user.picture);

        userImageDiv.appendChild(imageElement);

        const userDetailsDiv=document.createElement('div');
        const heading=document.createElement('h2');
        heading.textContent=` ${user.title} ${user.firstName} ${user.lastName}`;

        userDetailsDiv.appendChild(heading);

        const button=document.createElement('button');
        button.textContent="See Complete Details";

        userDiv.appendChild(userImageDiv);
        userDiv.appendChild(userDetailsDiv);
        userDiv.appendChild(button);

        return userDiv;
    
    }



    