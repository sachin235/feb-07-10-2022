//var, let, const
//var is function scoped
//let, const are block scoped
//const is readonly

function scopeOfVariables() {
    //global = 10; //BAD PRACTICE
    let i = 10;
    if (i % 2 == 0) {
        const message = 'Even';
    } 
    //console.log(message);
}

scopeOfVariables();
//console.log(global);