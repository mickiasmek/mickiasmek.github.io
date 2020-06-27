
//a function max() that takes two numbers as arguments and returns the largest of them. 
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// a function maxOfThree() that takes three numbers as arguments and returns the largest of them
function maxOfThree(x, y, z) {
  return max(max(x, y), z);
}

//a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(a) {
  let x = ["a", "e", "i", "o", "u"];
  let vowel = 0;
  for (let i = 0; i < x.length; i++) {
    if (a !== x[i] && a !== x[i].toUpperCase()) {
      continue;
    }
    vowel = 1;
    break;
  }
  if (vowel === 1) {
    return true;
  }
  return false;
}

//a function sum() that sums all the numbers in an array of numbers.
function sum(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }

  return sum;

}

//a function multiply() that multiplies all the numbers in an array of numbers.
function multiply(param) {
  let mul = 1;
  for (let i = 0; i < param.length; i++) {
    mul *= param[i];
  }
  return mul;
}
//a function reverse() that computes the reversal of a string. 
function reverse(rev) {
  let reversed = "";
  for (let i = rev.length - 1; i >= 0; i--) {
    reversed += rev[i];
  }
  return reversed;
}

//a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(words) {
  let max = words[0].length;
  for (let i = 1; i < words.length; i++) {
    if (max > words[i].length) {
      continue;
    }
    max = words[i].length;
  }
  return max;
}

//a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(param1, param2) {
  let arrayWordsGreaterThanI = [];
  for (let i = 0; i < param1.length; i++) {
    if (param1[i].length < param2) {
      continue;
    }
    arrayWordsGreaterThanI.push(param1[i]);
  }
  return arrayWordsGreaterThanI.toString();

}

//Modified the jsfiddle on the map/filter/reduce following the slide:
const a = [1, 3, 5, 3, 3];

//multiply each element by 10
const b = a.map(function (elem, i, array) {
  return elem * 10;
})// [10,30,50,30,30]

//return array with all elements equal to 3
const c = a.filter(function (elem, i, array) {
  return elem === 3;
});//[3,3,3]

const f = a.reduce(function (accumulator, elem) {
  return accumulator * elem;
}, 0); //135 is the product




/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

//Testing functions using consol.log()
console.log("Expected output of max(3,4) is 4 " + myFunctionTest(4, max(3, 4)));
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));


console.log("Expected output of isVowel(\"K\") is false " + myFunctionTest(false, isVowel("K")));
console.log("Expected output of isVowel(\"A\") is true " + myFunctionTest(true, isVowel("E")));
console.log("Expected output of isVowel(\"e\") is true " + myFunctionTest(true, isVowel("e")));
console.log("Expected output of isVowel(A) is true " + myFunctionTest(false, isVowel("A")));

console.log("Expected output of sum([1, 2, 3, 4]) is 10 " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of sum([1, 2, 3, 4]) is 10 " + myFunctionTest(12, sum([1, 2, 3, 4])));

console.log("Expected output of multiply([1, 2, 3, 4]) is 24 " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of multiply([1, 2, 3, 4]) is 24 " + myFunctionTest(20, multiply([1, 2, 3, 4])));


console.log("Expected output of reverse(\"mick kcim\") is mick kcim" + myFunctionTest("mick kcim", reverse("mick kcim")));
console.log("Expected output of reverse(mick kcim) is mick kcim " + myFunctionTest("mick im", reverse("mick kcim")));


console.log("Expected output of findLongestWord([\"mickias\", \"hi\", \"honsssse\"]) is 8 " + myFunctionTest(8, findLongestWord(["mickias", "hi", "honsssse"])));
console.log("Expected output of findLongestWord([\"mickias\", \"hi\", \"honsssse\"]) is 8 " + myFunctionTest(7, findLongestWord(["mickias", "hi", "honsssse"])));


console.log("Expected output of filterLongWords([\"mickias\", \"hi\", \"honsssse\"], 3  is  [\"mickias\", \"honsssse\"] " + myFunctionTest("mickias,honsssse", filterLongWords(["mickias", "hi", "honsssse"], 3)));
console.log("Expected output of filterLongWords([\"mickias\", \"hi\", \"honsssse\"], 3  is  [\"mickias\", \"honsssse\"] " + myFunctionTest("mickias,tros", filterLongWords(["mickias", "hi", "honsssse"], 3)));


//Testing functions using Consol.assert() one for pass and one for failure. 
console.assert(4 === max(3, 4), "TEST FAILED.  Expected " + 4 + " found " + max(3, 4));//This passes
console.assert(3 === max(3, 4), "TEST FAILED.  Expected " + 3 + " found " + max(3, 4));//This one fails


console.assert(false === isVowel("K"), "TEST FAILED.  Expected " + false + " found " + isVowel("K"));
console.assert(true === isVowel("K"), "TEST FAILED.  Expected " + true + " found " + isVowel("K"));

console.assert(10 === sum([1, 2, 3, 4]), "TEST FAILED.  Expected " + 10 + " found " + sum([1, 2, 3, 4]));
console.assert(11 === sum([1, 2, 3, 4]), "TEST FAILED.  Expected " + 11 + " found " + sum([1, 2, 3, 4]));


console.assert(24 === multiply([1, 2, 3, 4]), "TEST FAILED.  Expected " + 24 + " found " + multiply([1, 2, 3, 4]));
console.assert(20 === multiply([1, 2, 3, 4]), "TEST FAILED.  Expected " + 20 + " found " + multiply([1, 2, 3, 4]));

console.assert("mick kcim" === reverse("mick kcim"),"TEST FAILED.  Expected " + "mick kcim" + " found " + reverse("mick kcim"));
console.assert("mick cim" === reverse("mick kcim"),"TEST FAILED.  Expected " + "mick cim" + " found " + reverse("mick kcim"));

console.assert(8 === findLongestWord(["mickias", "hi", "honsssse"]), "TEST FAILED.  Expected " + 8 + " found " + findLongestWord(["mickias", "hi", "honsssse"]) );
console.assert(9 === findLongestWord(["mickias", "hi", "honsssse"]), "TEST FAILED.  Expected " + 9 + " found " + findLongestWord(["mickias", "hi", "honsssse"]));

console.assert("mickias,honsssse" === filterLongWords(["mickias", "hi", "honsssse"], 3),"TEST FAILED.  Expected " + "mickias,honssse" + " found " + filterLongWords(["mickias", "hi", "honsssse"], 3));
console.assert("mickias,sssse" === filterLongWords(["mickias", "hi", "honsssse"], 3),"TEST FAILED.  Expected " + "mickias,ssse" + " found " + filterLongWords(["mickias", "hi", "honsssse"], 3));
