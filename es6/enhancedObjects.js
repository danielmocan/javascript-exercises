/*
    Rewrite this using es6 enhanced objects also use destructuring
*/

var array = [ "Alex Jr.", "JS" ];
var name = array[0];
var likes = array[1];

var alex = {
    name: name,
    likes: likes,
    printDetails: function ( ) {
        console.log( "My name is " + name + " and I like  " + this.likes + "." );
    }
};

alex.printDetails();