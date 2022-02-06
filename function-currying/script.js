//////////// function currying using bind method ///////////////////////

function multiply(x,y){
    console.log(x * y);;
}

// currying multiply function
const multiplyByTwo = multiply.bind(this, 2);

multiplyByTwo(3); // output => 2 x 3 = 6
multiplyByTwo(4); // output => 2 x 4 = 8
multiplyByTwo(5); // output => 2 x 5 = 10
multiplyByTwo(6); // output => 2 x 6 = 12


// currying multiply function
const multiplyByTen = multiply.bind(this, 10);

multiplyByTen(3); // output => 10 x 3 = 30
multiplyByTen(4); // output => 10 x 4 = 40
multiplyByTen(5); // output => 10 x 5 = 50
multiplyByTen(6); // output => 10 x 6 = 60



/////////////////////////// function currying using closure /////////////////////////

function multiplyClosure(x){
    return function(y){
        console.log(x * y);
    }
}

const multiplyClosureByTwo = multiplyClosure(2);

multiplyClosureByTwo(3); // output => 2 x 3 = 6
multiplyClosureByTwo(4); // output => 2 x 4 = 8
multiplyClosureByTwo(5); // output => 2 x 5 = 10
multiplyClosureByTwo(6); // output => 2 x 6 = 12


const multiplyClosureByTen = multiplyClosure(10);

multiplyClosureByTen(3); // output => 2 x 3 = 6
multiplyClosureByTen(4); // output => 2 x 4 = 8
multiplyClosureByTen(5); // output => 2 x 5 = 10
multiplyClosureByTen(6); // output => 2 x 6 = 12