// async function: async keyword as prefix
// it always returns a promise (generally)
// inside the async function body: we have to write multiple await (asynchronous/promises) steps

async function hello() {
    return "hello world";
}

hello()
.then(res => console.log(res));

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('user data');
        }, 3000);
    });
}

async function getData() {
    console.log('fetching data...');
    
    let result = await fetchData();

    console.log(result);
    console.log('data fetching done....');
}

getData();


//callback hell: overcome with Async and Await:
function startMachine() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('machine started');
        resolve();
    },5000)
  });
};


function grindBeans(resolve, reject) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('beans ground');
        resolve();
    }, 3000);
});
}

function boilWater(resolve, reject) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('water boiled');
        resolve();
    }, 4000);   
    });
}
function brewCoffee(resolve, reject) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('coffee brewed');
        resolve();
    }, 3000);
});
}
function pourIntoCup(resolve, reject) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('coffee poured into cup');
        resolve();
    }, 2000);
})
}

 function stopMachine(resolve, reject ){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('machine stopped');
        resolve();
    }, 2000);
});
 }

 async function coffeready(){
    await startMachine();
    await grindBeans();
    await boilWater();
    await brewCoffee();
    await pourIntoCup();
    await stopMachine();
 };
 coffeready();




 //promise with async and await: UI Automation:
 function waitForElement(locator, timeout) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let isEleFound = true;

            if (isEleFound) {
                let webElement = `driver.findElement('${locator}')`;
                resolve(webElement);
            } else {
                reject('Element not found');
            }

        }, timeout);

    });
}

function click(element) {
    console.log(`clicking on the element by using: ${element}`);
}

async function login() {
    try {
        const element = await waitForElement('#loginBtn', 5000);
        click(element);
    } catch (error) {
        console.log(error);
    }
}

login();