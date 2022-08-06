// Fetch API
// Callbacks, Promises, Thenables, Async/Await

// Callbacks

function firstFunction(parameters, callback){
    // do stuff
    callback();
}

// Alsow known as "callback hell"
// ------------------------------
// firstFunction(para, function(){
//     // do stuff
//     secondFunction(para, function(){
//         thirdFunction(para, function(){

//         });  
//     });
// });
// ------------------------------

// Promisese

// 3 states: Pending, Fulfilled, Rejected
//
// 11111
// const myPromise = new Promise((resolve, reject)=>{
//     const error = true;
//     if(!error){
//         resolve('Yes! Resolved the promise!');
//     }
//     else{
//         reject('No! Rejected the promise.');
//     }
// });

// console.log(myPromise);

// myPromise
// .then((value)=>{
//     return value + 1;
// })
// .then((newValue)=>{
//     console.log(newValue);
// })
// .catch((err)=>{
//     console.log(err);
// })


// 22222
const myPromise = new Promise((resolve, reject)=>{
    const error = false;
    if(!error){
        resolve('Yes! Resolved the promise!');
    }
    else{
        reject('No! Rejected the promise.');
    }
});

const myNextPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Next promise resolved!');
    }, 2000);
});

myNextPromise
    .then((value)=>{
        console.log(value);
    })
myPromise
    .then((value)=>{
        console.log(value);
    })
