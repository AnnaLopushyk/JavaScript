// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста



let usersDiv = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(usersArray => {
        console.log(usersArray);
        for (let user of usersArray) {

            let userDiv = document.createElement('div');
            userDiv.classList.add('user');

            let userIdDiv = document.createElement('div');
            userIdDiv.innerText = `Id - ${user.id}`;

            let nameDiv = document.createElement('div');
            nameDiv.innerText = `name - ${user.name}`;

            let userNameDiv = document.createElement('div');
            userNameDiv.innerText = `username - ${user.username}`;

            let emailDiv = document.createElement('div');
            emailDiv.innerText = `email - ${user.email}`;

                let addressDiv = document.createElement('div');
                addressDiv.classList.add('address');
                addressDiv.innerText='address';

                            let cityDiv = document.createElement('div');
                            cityDiv.innerText = `city - ${user.address.city}`;

                            let streetDiv = document.createElement('div');
                            streetDiv.innerText = `street - ${user.address.street}`;

                            let suiteDiv = document.createElement('div');
                            suiteDiv.innerText = `suite - ${user.address.suite}`;

                            let zipcodeDive = document.createElement('div');
                            zipcodeDive.innerText = `zipcode - ${user.address.zipcode}`;

                            let geoDiv = document.createElement('div');
                            geoDiv.classList.add('geo');
                            geoDiv.innerText = 'geo';
                                 let latDiv = document.createElement('div');
                                 latDiv.innerText = `lat: ${user.address.geo.lat}`;

                                 let lngDiv = document.createElement('div');
                                 lngDiv.innerText = `lng: ${user.address.geo.lng}`;

                            geoDiv.append(latDiv,lngDiv);


                addressDiv.append(cityDiv,streetDiv,suiteDiv,zipcodeDive,geoDiv);



            let companyDiv = document.createElement('div');
            companyDiv.innerText = 'company';

                    let bsCompanyDiv = document.createElement('div');
                    bsCompanyDiv.innerText = `bs - ${user.company.bs}`;

                    let catchPhraseCompanyDiv = document.createElement('div');
                    catchPhraseCompanyDiv.innerText = `city - ${user.company.catchPhrase}`;

                    let nameCompanyDiv = document.createElement('div');
                    nameCompanyDiv.innerText = `name - ${user.company.name}`;

            companyDiv.append(bsCompanyDiv,catchPhraseCompanyDiv,nameCompanyDiv)


            let phoneDiv = document.createElement('div');
            phoneDiv.innerText = `phone - ${user.phone}`;

            let websiteDiv = document.createElement('div');
            websiteDiv.innerText = `company - ${user.website}`;

            let buttonUser = document.createElement('button');
            buttonUser.innerText='show post'

            buttonUser.onclick =()=> {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(posts=>posts.json())
                    .then(postsArray=> {
                        let postDiv = document.createElement('div');
                        postDiv.classList.add('post');
                        for (let post of postsArray) {
                            let postNumb = document.createElement('div');
                            postNumb.classList.add('postStyle');
                            postNumb.innerText = post.body;

                            let divButton = document.createElement('div');
                            let buttonPost = document.createElement('button');
                            buttonPost.innerText='show comment';

                                     divButton.appendChild(buttonPost);
                                    postNumb.append(divButton);
                                    postDiv.append(postNumb);

                            buttonPost.onclick =()=> {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(comments=>comments.json())
                                    .then(commentsArray => {
                                        let commentsDiv = document.createElement('div');
                                        commentsDiv.classList.add('comments');
                                        for (let comment of commentsArray) {
                                            let commentDiv = document.createElement('div');
                                            commentDiv.innerText = comment.body;
                                            commentDiv.classList.add('commentStyle');

                                            commentsDiv.append(commentDiv);
                                            postNumb.append(commentsDiv)
                                        }

                                    })
                            }

                            userDiv.appendChild(postDiv);
                        }

                    })
            }

            userDiv.append(userIdDiv,nameDiv,userNameDiv,emailDiv,addressDiv,companyDiv,phoneDiv, buttonUser)
            document.body.appendChild(userDiv)
            }

});



