/*
    Rewrite the following function using es6 to receive an unlimited number of params
    Too keep it simple please send only numbers as parameters
*/

function sum( ){
    var total = 0;
    for( var i = 0; i < arguments.length; i++ ){
        total += arguments[ i ];
    }
    return total;
}