//callback hell: pyramid of doom

//multiple async operations/tasks, they depn on each other --- nested callback/indented callbacks
//hard to read
//hard to debug


//example: coffee machine:
//1. start the machine --- 5 secs
//2. Grind the beans --- 3 secs
//3. Boil water --- 4 secs
//4. Brew Coffee --- 3 secs
//5. Pour into cup --- 2 secs


// setTimeout((name, age) => {
//     console.log('hello', name, age);
// }, 3000, 'Devika', 30);


// setTimeout(() => {
//     console.log('account is created');
// }, 4000);

function startMachine(callback) {
    setTimeout(() => {
        console.log('machine started');
        callback();
    }, 5000);
}
function grindBeans(callback) {
    setTimeout(() => {
        console.log('beans griund');
        callback();
    }, 3000);
}
function boilWater(callback) {
    setTimeout(() => {
        console.log('water boiled');
        callback();
    }, 4000);   
}
function brewCoffee(callback) {
    setTimeout(() => {
        console.log('coffee brewed');
        callback();
    }, 3000);
}
function pourIntoCup(callback) {
    setTimeout(() => {
        console.log('coffee poured into cup');
        callback();
    }, 2000);
}

 function stopMachine(){
    setTimeout(() => {
        console.log('machine stopped');
    }, 2000);

 }
//callback hell:
startMachine(()=> {
    grindBeans(()=> {
        boilWater(()=> {
            brewCoffee(()=> {
                pourIntoCup(()=> {
                    console.log('coffee is ready');
                    stopMachine();
                });
            });
        });
    });

    });

//1.promises:
//2.async and await:
//async and await are used to handle asynchronous operations in a more readable and manageable way.

//By PROMISES chaining : multiple promises are chained together
function startMachine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('machine started');
            resolve();
        }, 5000);
    });
}
function grindBeans() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('beans ground');
            resolve();
        }, 3000);
    });
}
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('water boiled');
            resolve();
        }, 4000);
    });
}   
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('coffee brewed');
            resolve();
        }, 3000);
    });
}
function pourIntoCup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('coffee poured into cup');
            resolve();
        }, 2000);
    });
}
function stopMachine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('machine stopped');
            resolve();
        }, 2000);
    });
}
//promise chaining: promises are resolved/fulfilled and then the next promise is resolved/fulfilled
startMachine()
    .then(grindBeans)
    .then(boilWater)
    .then(brewCoffee)
    .then(pourIntoCup)
    .then(stopMachine)
    .catch((error) => {
        console.log(error);
    });
