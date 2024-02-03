// Question 1: How to compare two JSON have the same properties without order /

let obj1 = {"name":"Person 1","age":5};
let obj2 = {"age":5,"name":"Person 1"};

var objString1=JSON.stringify(obj1);
var objString2=JSON.stringify(obj2);

if(objString1===objString2){
    console.log("JSON objects are equal");
}
else{
    console.log("JSON objects are not equal");
}
