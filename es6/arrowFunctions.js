/*
    Rewrite the following functions using arrow functions
*/

const person = {
    name: "Daniel",
    age: 32
}

function getName( person ) {
    return person.name;
}

function addNumbers( a ) {
    return function( b ) {
        return function( c ) {
            return a + b + c;
        }
    }
}

console.log( "This is the name from the person object", getName( person ) );
console.log( "Result", addNumbers( 3 )( 4 )( 3 ) );
