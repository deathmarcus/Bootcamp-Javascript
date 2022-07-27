const requestGetPosts = (url) => {
    const httpRequest = new XMLHttpRequest();

    let result = [];
    httpRequest.onload = (data) => {
        result = JSON.parse(data.target.responseText);
    };
    httpRequest.open("GET", url, false);
    httpRequest.send();

    return result;

};

const infoPost = requestGetPosts('https://dummyjson.com/posts');
const posts = infoPost.posts;

let cardBody = document.querySelector("#post-cards");
let cardInfo = posts.reduce((ac,cv, i)=>{
    cv = `<div class="col">
    <div class="card border-primary text-bg-light">
      <div class="card-body">
        <h5 class="card-title">${cv.title}</h5>
        <p class="card-text">${cv.body}</p>
      </div>
    </div>
  </div>`
    return ac+cv
    },"");

cardBody.innerHTML = cardInfo;

