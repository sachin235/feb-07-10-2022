const study = function(hours) {
    console.log(`Studying ${hours} hours`);
};

const study = function() {
    console.log(`Studying ${hours} hours`);
};


//tsc doesn't allow this.
function sleep(hours) {
    console.log(`Sleeping ${hours} hours`);
}

function sleep() {
    console.log(`I like sleeping`);
}

function sleep() {
    console.log(`I love sleeping`);
}

sleep(12);