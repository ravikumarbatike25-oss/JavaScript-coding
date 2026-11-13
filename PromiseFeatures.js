//Promise features
//1. Promise.all()
//Promise all execute all the promises in parallel and return the result in the order of the promises
let p1= Promise.resolve('P1 is successed')
let p2 = Promise.resolve('p2 is successed')
let p3 =Promise.resolve('p3 is successed')

Promise.all([p1,p2,p3]).then((result)=>{
console.log(result)
});


//with wait 
// Promise all with resolve : it will wait for all the promises to be resolved and then return the result
let p4 = new  Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('p4 is successed : Header is ready')
    },3000)});

    let p5 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("p5 is successed : Content is ready")
    },5000)});

    let p6 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("p6 is successed : Footer is ready")
    },6000)});
    Promise.all([p4,p5,p6]).then((result)=>{console.log(result)});

//Promise all with reject: it will return the error of the first promise that is rejected
    let p7 = new  Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('p4 is successed : Header is ready')
        },3000)});
    
        let p8 = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("p5 is successed : Content is crashed")
        },5000)});
    
        let p9 = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("p6 is successed : Footer is ready")
        },6000)});
        Promise.all([p7,p8,p9]).then((result)=>{console.log(result)})
        .catch((error)=>{console.log(error)});

    //promise.race() : it will return the result of the first promise that is resolved or rejected
    let p10 = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("p10 is successed : Header is ready")
        },3000)});
    
        let p11 = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject("p11 is successed : Content is crashed")
        },500)});
        let p12 = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve("p12 is successed : Footer is ready")
            },6000)});
    Promise.race([p10,p11,p12]).then((result)=>{console.log(result)})
    .catch((error)=>{console.log(error)});

    //promise.allSettled() : it will return the result of all the promises that are resolved or rejected
    let p13 = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("p13 is successed : Header is ready")
        },3000)});
    
        let p14 = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject("p14 is successed : Content is crashed")
        },5000)});
        let p15 = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve("p15 is successed : Footer is ready")
            },6000)});
    Promise.allSettled([p13,p14,p15]).then((result)=>{console.log(result)})
    .catch((error)=>{console.log(error)});

    //promise.any() : it will return the result of the first promise that is resolved
    //if all the promises are rejected, it will return the error of the first promise that is rejected
    let p16 = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("p16 is successed : Header is crashed")
        },3000)});
    
        let p17 = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("p17 is successed : Content is crashed")
        },500)});

        let p18 = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                reject("p18 is successed : Footer is crashed")
            },6000)});
    Promise.any([p16,p17,p18]).then((result)=>{console.log(result)})
    .catch((error)=>{console.log(error)});