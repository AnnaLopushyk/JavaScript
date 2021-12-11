// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts



// fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(posts=>posts.json())
    // .then(postArray => {
    //   console.log(postArray)
    //
    //     let divPost = document.createElement('div');
    //     divPost.classList.add('placing');
    //
    //     for (let post of postArray){
    //
    //         let divCard = document.createElement('div');
    //         divCard.classList.add('post');
    //
    //             let userIdDiv = document.createElement('div');
    //             userIdDiv.innerText = `userId: ${post.userId}`;
    //             userIdDiv.classList.add('userId')
    //
    //             let idDiv = document.createElement('div');
    //             idDiv.innerText = `Id: ${post.id}`;
    //             idDiv.classList.add('id')
    //
    //             let title = document.createElement('div');
    //             title.innerText = `title: ${post.title}`
    //              title.classList.add('title')
    //
    //
    //         divCard.append(userIdDiv,idDiv,title);
    //
    //
    //         divPost.append(divCard)
    //
    //         document.body.appendChild(divPost)
    //
    //     }
    //
    // })



//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then (comments => comments.json())
.then(commentsArray => {
    console.log(commentsArray)
let divComment = document.createElement('div');
    divComment.classList.add('comments')

    for (let coment of commentsArray) {

        let divCard = document.createElement('div');

        let divPostId = document.createElement('div');
        divPostId.innerText = `POSTID: ${coment.postId}`

        let divId = document.createElement('div');
        divId.innerText = `ID: ${coment.id}`

        let nameDiv = document.createElement('div');
        nameDiv.innerText = `NAME: ${coment.name}`;

        let emailDiv = document.createElement('div');
        emailDiv.innerText = `E-MAIL: ${coment.email}`;


        let bodyDiv = document.createElement('div');
        bodyDiv.innerText = `BODY: ${coment.body}`;


        divCard.append(divPostId,divId,nameDiv,emailDiv,bodyDiv);
        divCard.classList.add('card')
        divComment.appendChild(divCard);
        document.body.appendChild(divComment)
    }


})