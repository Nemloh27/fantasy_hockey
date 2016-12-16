var maxTime = 1000;


var evenDoubler = function (v, callback) {
    if (v === 2) {
        return v * 2;
    } else {
        return callback()
    }
};

var handleResults = function(err, results, time) {
    if (err) {
        cosole.log("ERROR:" + err.message);
        
    } else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

evenDoubler(2, handleResults);

console.log("-----");