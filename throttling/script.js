// variable defined for count click events
let counter = 0;

// example function for represent users fetching function
function getUsers(){
    console.log(`You clicked buton ${counter++}`);
}

// throttling function definition
const throttling= (func, limit)=>{
    let flag = true;
    // return throttled function
    return function(){
        let context = this;
        let args = arguments;
        if(flag){
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}

// add throttling to the getUsers function
const throttledGetData = throttling(getUsers, 300);