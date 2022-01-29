let text, data;
function searchData(){
    console.log(document.querySelector("#search").value);
}

// debouce method definition
const debounce = function(func, delay){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        // clear previous timeout
        clearTimeout(timer);
        // set timeout function
        timer = setTimeout(()=>{
            // call search method by passing current context and arguments
            func.apply(context, args);
        },delay);
    }
}

// debouncing the search function
const debouncedSearchData = debounce(searchData, 300);