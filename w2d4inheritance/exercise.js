"use-strict";
//Exercise 1
String.prototype.filter = function(word){
  return this.replace(word,"");
};
console.log("This house is not nice!".filter('not'));


//Exercise 2
Array.prototype.bubbleSort = function(arr){
    return this.sort(arr);
}
console.log([6,4,0, 3,-2,1].bubbleSort());