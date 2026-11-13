/**
 * @param {string} browserName 
 * @returns {number}
 */

(function(browserName){
    console.log(`browser name is : ${browserName}`);
    let x=10;
    console.log(x);
  
})("chrome"); 







/**
 * 
 * @param {string} browserName 
 * @returns {boolean}
 */

let initDriver = function (browserName) {

    console.log(`browser name is : ${browserName}`);
    switch (browserName.replaceAll(" ", '').toLowerCase()) {

        case 'chrome':
            console.log('launch chrome');
            return true;

        case 'firefox':
            console.log('launch ff');
            return true;

        case 'edge':
            console.log('launch edge');
            return true;

        default:
            console.log('plz pass the right browser', browserName);
            return false;
    }

};

let isInit = initDriver('ch rome');

if (isInit) {
    console.log('enter the url: google.com');
}