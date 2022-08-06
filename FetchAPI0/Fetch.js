//Pending
// const users = fetch('https://jsonplaceholder.typicode.com/users');
// console.log(users);


// const users = fetch('https://jsonplaceholder.typicode.com/users')
//     .then((respone)=>{
//         return respone.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         console.log(data[0]);
//         return data;
//     });
// console.log(users);

// Async/Await =)

// const myUsers = {
//     userList: []
// }

// 1
// async function myCoolFunction(){
// }

// 2 arrow view
// const myCoolFunction = async()=>{
//     const respone = await fetch('https://jsonplaceholder.typicode.com/users');
//     const jsonUserData = await respone.json();
//     return jsonUserData;
// }

// const anotherFunc = async()=>{
//     const data = await myCoolFunction();
//     console.log(data);
// }

// anotherFunc();

// workflow function:

// const getUserEmails = async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const jsonUserData = await response.json();

//     const userEmailArray = jsonUserData.map((user)=>{
//         return user.email;
//     });

//     postToWebPage(userEmailArray);
// }

// const postToWebPage = (data)=>{
//     console.log(data);
// }

// getUserEmails();

// 2-nd parametr of Fetch is an object:

// const getDadsJoke = async()=>{
//     const response = await fetch('https://icanhazdadjoke.com/',
//     {   
//         method: 'GET',
//         headers: {
//             Accept: 'application/json'
//         }
//     });

//     const jsonJokeData = await response.json();

//     console.log(jsonJokeData.joke);
// }

// getDadsJoke();

//POST data:
// const jokeObject = {
//     id: '0oO71TSv4Ed',
//     joke: 'Why was it called the dark ages? Because of all the knights.'
// }

// const postData = async (jokeObj) => {
//     const response = await fetch('https://httpbin.org/post', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(jokeObj)
//     });
//     const jsonResponse = await response.json();
//     console.log(jsonResponse.headers);
// }

// postData(jokeObject);

const requestJoke = async(firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    const jsonJokeData = await response.json();
    console.log(jsonJokeData.value.joke);
}

requestJoke('...', '...');