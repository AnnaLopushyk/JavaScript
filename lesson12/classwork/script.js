// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(posts => posts.json())
// .then(postsArray => {
//     console.log(postsArray)
//     let divPosts = document.createElement('div');
//
//     for (let post of postsArray) {
// let divElement = document.createElement('div');
// divElement.classList.add('element')
//
//         let userId = document.createElement('div');
//         userId.innerText = `userId: ${post.userId}`;
//
//          let idDiv = document.createElement('div');
//          idDiv.innerText = `id: ${post.id}`;
//
//         let nameDiv = document.createElement('div');
//         nameDiv.innerText = `title: ${post.title}`;
//
//         let bodyDiv = document.createElement('div');
//         bodyDiv.innerText = `body: ${post.body}`;
//
//         let btn = document.createElement('button');
//         btn.innerText = 'show detail';
//
//         divElement.append(userId,idDiv,nameDiv,bodyDiv, btn);
//
//
//         btn.onclick = ()=> {
//           fetch('https://jsonplaceholder.typicode.com/posts/${post.id}/comments')
//               .then(response => response.json())
//               .then(commentsArr => {
//                   for (let comment of commentsArr) {
//                       if (post.id === comment.id) {
//                           let commentCard = document.createElement('div');
//                             commentCard.classList.add('card')
//                           commentCard.innerHTML =
//                                 `   <h3> ID: ${comment.id} </h3>
//                                    <h4> Name: ${comment.name} </h4>
//                                    <h5> Email: ${comment.email} </h5>
//                                    <h6> Body:${comment.body} </h6>
//                                 `;
//
//                           divElement.appendChild(commentCard)
//                       }
//                             btn.disabled = true
//                   }
//
//               })
//         }

//
// divPosts.appendChild(divElement);
// document.body.appendChild(divPosts)
//
//
//     }
//
//
// })









        let postsDiv = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.json())
    .then(postsArray => {
        console.log(postsArray);
        for (let postElement of postsArray) {
            let divPosts = document.createElement('div');
            divPosts.innerText=`post id: ${postElement.id} ${postElement.userId} ${postElement.title} ${postElement.body}`
            let btn = document.createElement('button');
            btn.innerText = 'show detail';
            btn.onclick = function () {
console.log(postElement.id)
                fetch('https://jsonplaceholder.typicode.com/posts/${postElement.id}/comments')
                    .then(comments => comments.json())
                    .then(comments => {
                        console.log(comments)

                    });
            };

postsDiv.append(divPosts, btn)
    }
    })





