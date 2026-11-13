let user = {  //Outer Object
    name: 'Tom',
    age: 30,
    city: 'LA',
    isActive: true,
    address: {  //nested object
        flat: 101,
        zip: 54544,
        lat: 10.34,
        lng: 11.22
    },
    devices: ['iphone', 'mouse', 'keyboard'],  // array
};

// for...in loop
for (let key in user) { // key is the variable that will store the key of the object
    console.log(key, ':', user[key]);   //its a way to access the value of the key ,it stores the values of object
     console.log(user[key]['flat']);
}
console.log(user.devices.length);
console.log(key, ':', user.key); // in this case it will check for the single key in the object and then it will return the value of the key
