
const button = document.getElementById("addAlbumButton");
const albums= document.getElementsByClassName("albums")[0];

button.addEventListener("click",function(){

    const image = document.getElementById("imageURL").value;
    const description = document.getElementById("description").value;
    const time = document.getElementById("time").value;


    const album=createNewAlbum(image,description,time);

    albums.appendChild(album);

    
})

function createNewAlbum(imageURL,description,time){

    const albumDiv=document.createElement('div');
    albumDiv.className="album";

    const thumbNailDiv=document.createElement('div');
    thumbNailDiv.className="thumbnail";
    const image= document.createElement('img');
    image.setAttribute('src',imageURL);
    thumbNailDiv.appendChild(image);


    const details=document.createElement('div');
    details.className="details";


    const para=document.createElement('p');
    para.textContent=description;

    const detailsFooter=document.createElement('div');
    detailsFooter.className="details-footer";

    const buttonsDiv=document.createElement('div');
    const button1=document.createElement('button');
    button1.textContent="View";
    const button2=document.createElement('button');
    button2.textContent="Edit";

    buttonsDiv.appendChild(button1);
    buttonsDiv.appendChild(button2);

    const timeElement=document.createElement('span');
    timeElement.textContent=time+ " min";

    detailsFooter.appendChild(buttonsDiv);
    detailsFooter.appendChild(timeElement);

    details.appendChild(para);
    details.appendChild(detailsFooter);


    albumDiv.appendChild(thumbNailDiv);
    albumDiv.appendChild(details);

    return albumDiv;
}