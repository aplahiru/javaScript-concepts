// example object with user information
const user = {
    firstName: "Lahiru",
    lastName: "Madhushan"
}

// function for appending user information node to the dom
const printUser= function printUser(){
    const container = document.createElement('h1');
    container.textContent = `Name is ${this.firstName} ${this.lastName}.`;
    document.querySelector('body').appendChild(container);
}

// inbuild bind function 
let printUserBind = printUser.bind(user);
printUserBind();




///////////////////// custom bind function implementation  /////////////////////////////////

// ...argsTop and ...argsInner are rest parameters that catch all params
const customBind = function customBind(...argsTop){
    let obj = this;
    let restParams = argsTop.slice(1);
    
    return function(...argsInner){
        obj.apply(argsTop[0], [...restParams, ...argsInner]);
                    // or
        // obj.call(argsTop[0], restParams.join(','), argsInner.join(','));
    }
}

// add custom bind function into Function's prototype for accessing every function
Function.prototype.customBind = customBind;

// customBind invocation
let printUserCustomBind = printUser.customBind(user);
printUserCustomBind();






/////////////////////////////////////// test cases ///////////////////////////////////////////////


// function for appending user information with extra data to the dom
const printUser01= function printUser01(age, city){
    const container = document.createElement('h1');
    container.textContent = `Name is ${this.firstName} ${this.lastName}. Age is ${age}. City is ${city}.`;
    document.querySelector('body').appendChild(container);
}

// test 01
let testCustom01 = printUser01.customBind(user);
testCustom01(25, 'Maharagama');

// test 02
let testCustom02 = printUser01.customBind(user, 25);
testCustom02('Maharagama');

// test 03
let testCustom03 = printUser01.customBind(user, 25, 'Maharagama');
testCustom03();