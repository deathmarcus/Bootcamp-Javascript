// De alguna forma insertar id en url -> Done 
// De alguna forma leer el id del post del url  -> Done
//! Cargar la data del post al cargar la pagina 


// ? functionToGetData(url){
    // codigo 
// } 


let queryURL = window.location.search
console.log(queryURL)

let params = new URLSearchParams(window.location.search)
let postId = params.get('postId')
console.log(postId)
let url = `https://javascript-kodemia-g20-default-rtdb.firebaseio.com/posts/${postId}.json`

//? Hacer el request con el metdoo get de lata del post selccionado y isertarla en mi template 

const requestGetPosts = (url) => {
    const httpRequest = new XMLHttpRequest();

    let result = [];
    httpRequest.onload = (data) => {
        result = JSON.parse(data.target.responseText);
        console.log(result)
    };
    httpRequest.open("GET", url, false);
    httpRequest.send();

    return result;

};
let data = requestGetPosts(url);

//console.log(url)

let cardHolder = document.querySelector('.card_holder')

document.addEventListener("DOMContentLoaded", (e)=> {
    cardHolder.innerHTML = `
    <div class="card mb-3 mt-5 w-75">
    <img src="https://picsum.photos/1000" class="card-img-top mt-2" alt="img"  height="300"  width="500"  />
    <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">
       ${data.body} 
    </p>
    <p class="card-text">
        <small class="text-muted">${data.date}</small>
    </p>
    </div>
    </div> 
    `
})