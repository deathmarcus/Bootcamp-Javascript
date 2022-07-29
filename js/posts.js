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

let postToRender = requestGetPosts('https://javascript-kodemia-g20-default-rtdb.firebaseio.com/posts.json')



let postsHolder = document.querySelector('#post-cards')

const insertPost = (posts) => {

    let template = '';
    for (post in postToRender) {
        template +=  `
                <div class="col">
                    <div class="card border-secondary">
                        <img src="https://picsum.photos/1000" class="card-img-top" alt="img" width="400" height="400" />
                        <div class="card-body">
                            <h5 class="card-title">${postToRender[post].title}</h5>
                            <p class="card-text">
                                ${postToRender[post].body}
                            </p>
                            <hr>
                            <div class="d-flex justify-content-between p-2">
                            <strong>${postToRender[post].date}</strong>
                            <a href="post_detail.html?postId=${post}">
                                <button type="button" class="btn btn-primary">Detalle</button>
                            </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
    }
    console.log(template)
    postsHolder.innerHTML = template
}


document.addEventListener('DOMContentLoaded', ()=>{
    insertPost(postToRender)
})

// const infoPost = requestGetPosts('https://javascript-kodemia-g20-default-rtdb.firebaseio.com/posts/.json');
// const posts = Object.values(infoPost);
// const posts2 = Object.keys(infoPost);
// //console.log(infoPost);
// //console.log(posts);
// let cardBody = document.querySelector("#post-cards");
// let cardInfo = posts.reduce((ac, cv, i) => {
//     ac += `<div class="col">
//     <div class="card border-primary text-bg-light">
//       <div class="card-body">
//         <h5 class="card-title">${cv.title}</h5>
//         <p class="card-text">${cv.body}</p>
//         <p class="card-text"><small class="text-muted">${cv.date}</small>
//         <a href="post_detail.html?postId=${posts2}">
//         <button type="button" class="btn btn-primary">Detalle</button>
//         </a>
//         </p>
//       </div>
//     </div>
//   </div>`
//     return ac;
// }, "");

// cardBody.innerHTML = cardInfo;

// const createUser = (user) => {
//     const httpRequest = new XMLHttpRequest();
//     httpRequest.onload = (e) => {
//         console.log(e.target.responseText);
//     }
//     httpRequest.open("POST", 'https://kodemia-g20-default-rtdb.firebaseio.com/koders.json', false);
//     let userJson = JSON.stringify(user);
//     httpRequest.send(userJson);
// };

// const userToCreate = {
//     firstName : 'Marco',
//     lastName : 'Castañeda'
// };


// const createPost = (post) => {
//     const httpRequest = new XMLHttpRequest();
//     httpRequest.onload = (e) => {
//         console.log(e.target.responseText);
//     }
//     httpRequest.open("POST", 'https://javascript-kodemia-g20-default-rtdb.firebaseio.com/posts/.json', false);
//     let postJson = JSON.stringify(post);
//     httpRequest.send(postJson);
// };
// const postToCreate = {
//     title: 'Post2',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget aliquet nibh praesent tristique magna sit amet.',
//     date: '07/27/23'
// };


// let publish = document.querySelector('.posts')
// publish.addEventListener('click', () => {
//     for (let i = 0; i < 10; i++) {
//         createPost(postToCreate);
//     };

// });
