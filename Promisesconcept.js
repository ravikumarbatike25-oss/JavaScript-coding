//Promise: is used to handle Async operations (things that take time)

//1. File reading
//2. DB Query
//3. AJAX: element is coming on the page 5 10 15 20 0


//Instead of callbacks, JS has introduced promises to handle the async operations in a cleaner way...


//Promise:
// you place the order: promise is created
// prepare the food: pending/in-progress
// food is delivered: Resolved / fulfillment
// cancels the order: Rejected / Error

let myPromise = new Promise((resolve, reject) => {

    let success = false; //true or false: based on the success of the task

    if (success) {
        resolve('Task Completed');
    }
    else {
        reject('Task Failed');
    }

});

myPromise
    .then((result) => { //if the task is successful
        console.log(result); //Task Completed
    })
    .catch((error) => { //if the task is failed
        console.log(error); //Task Failed
    });


    //Real Async Operation:Set time out 3 seconds 
    let dataPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
           // reject('Failed:data is not recieved from server');
            resolve('Success:data is recieved from server');
        }, 3000);
    
    });
    
    dataPromise
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });


// Ex: Real async operation with user data/object (5 seconds delay)

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                name: 'priya',
                role: 'QA',
                salary:10000
            };
            resolve(user);
        }, 5000);
    });
}

fetchUser()
    .then((user) => {
        console.log(user);
    });

// Ex: Real async operation with user data/object with resolve and reject and finally block
function fetchUser() {
    return new Promise((resolve, reject) => {

        let flag = true;
        //true: success: resolve
        if (flag) {
            setTimeout(() => {
                let user = {
                    name: 'priya',
                    role: 'QA'
                };
                resolve(user);
            }, 5000);
        } else {
            setTimeout(() => {
                reject('user is not found: 404 NOT FOUND');
            }, 2000);
        }
    });
}

fetchUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('disconnect with DB');
    });

//promise chaining:
let promise1 = new Promise((resolve, reject) => {
    resolve (5);
});
 promise1
     .then((n=> n*2))
    .then((n=> n*3))
    .then((n=> n*4))
    .then((n=> n*5))
    .then((n=> console.log(n)));

