const posts = [
    {title: 'Post one', body : 'this is post one'},
    {title: 'Post two', body : 'this is post two'}
];

function getPosts () {
    setTimeout(
        () => {
            let output = '';
            console.log("getPosts undergoing")
            posts.forEach((post, index) => {
                output += `
                    <li> ${post.title} </li>
                `
            })

            document.body.innerHTML =output;
        },
        1000
    );
}

console.log("getPosts started")
getPosts ()
console.log("getPosts ended")
// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(
//             ()=> {
//                 posts.push(post)
                
//                 const error = false;

//                 if(!error){
//                     resolve();
//                 }
//                 else{
//                     reject('Error: Something went wrong');
//                 }
//             },
//             2000)
//     });
// }


// createPost( {title: 'Post three', body : 'this is post three'})
//     .then(getPosts, error => console.log(error))


// async await

// async function init(){
//     await createPost( {title: 'Post three', body : 'this is post three'})

//     getPosts()
// }

// init();


// async await with fetch

// async function fetchUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
// }

// fetchUsers();


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => { 
        resolve('resolved!!!');
        console.log('testing')
      }, 5000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();

    console.log(result)
    console.log('calling ended')
    // expected output: 'resolved'
  }

  function fetchDataAsyc(){
    console.log('start')
    
    asyncCall();
    console.log('end');

  }

  fetchDataAsyc();




Promise.all

const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {setTimeout(resolve, 2000, 'Goodbye')})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json())

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))