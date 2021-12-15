// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
.then(posts => posts.json())
.then(postsArray => {
    console.log(postsArray);
    let divPosts = document.createElement('div');

    for (let post of postsArray) {
let divElement = document.createElement('div');
divElement.classList.add('element');

        let userId = document.createElement('div');
        userId.innerText = `userId: ${post.userId}`;

         let idDiv = document.createElement('div');
         idDiv.innerText = `id: ${post.id}`;

        let nameDiv = document.createElement('div');
        nameDiv.innerText = `title: ${post.title}`;

        let bodyDiv = document.createElement('div');
        bodyDiv.innerText = `body: ${post.body}`;

        let btn = document.createElement('button');
        btn.innerText = 'show detail';

        divElement.append(userId,idDiv,nameDiv,bodyDiv, btn);


        btn.onclick = ()=> {
            console.log(post.id)
          fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
              .then(response => response.json())
              .then(commentsArr => {
                  console.log(commentsArr);
                  let commentsDiv = document.createElement('div');
                  commentsDiv.classList.add('comments');
                  for (let comment of commentsArr) {
                      let commDiv = document.createElement('div');
                      commDiv.classList.add('commentStyle');
                      commDiv.innerText = comment.body;


                      commentsDiv.appendChild(commDiv);
                    divElement.appendChild(commentsDiv);

                  }

              })
        }

divPosts.appendChild(divElement);
document.body.appendChild(divPosts);


    }

})







