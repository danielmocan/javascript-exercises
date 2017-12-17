/*
    1. Please rewrite the fullUrl using template litterals
    2. Use template litteral to rewrite addAWithB
*/

var baseUrl = "example.com";
var category = "shoes";
var subCategory = "men";
var articleId = "1010";

var fullUrl = "http://" + baseUrl + "/" + category + "/" + subCategory + "/" + articleId;

var a = 2;
var b = 3;
var addAWithB = " " + a + " + " + b + " = " + ( a + b );
