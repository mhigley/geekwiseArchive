var students = ['matthew', 'david', 'haley', 'marisa', 'micaela', 'osvaldo', 'rosamaria', 'alfredo', 'rigoberto', 'leonardo', 'gustavo', 'eric', 'kevin', 'montgomery', 'cobi', 'joshua'];

// function randomStudent(){
//     var numStudents = students.length;
//     var randStudent = Math.ceil( Math.random() * numStudents ) - 1;
//     alert( students[randStudent] );
// }
// randomStudent();

var fruits = ['mango', 'strawberry', 'pineapple', 'avocado', 'dragonfruit'];
// console.log(fruits);


// Push - adds to the end of an array
fruits.push('apple');
// console.log(fruits);

// Pop - removes from the end of an array
var lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

// Unshift - adds to the front of an array
fruits.unshift('kiwi');
// console.log(fruits);

// Shift - removes from the front of an array
var firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

// IndexOf - finds the index of an item in an array
var posFruit = fruits.indexOf('avocado');
// console.log(posFruit);

// Splice - remove and item by index number
var remFruit = fruits.splice(1, 1);
//                           ^  ^
//                       index  number removed
// console.log(remFruit);
// console.log(fruits);

// Slice - copies an array
var copyFruit = fruits.slice(2, 3);
//                           ^  ^
//              starting index  up-to but not including
// console.log(fruits);
// console.log(copyFruit);
// console.log(fruits);

/*
    1. Create a new array with one school subject
    Using the correct methods
    2. add two new subjects to the beginning
    3. add two new subjects to the end.
    4. Remove the second from last without damaging original array

*/

var subjects = ['english'];
console.log(subjects);

subjects.unshift('trig', 'bio');
console.log(subjects);

subjects.push('spanish', 'hist', 'civ');
console.log(subjects);

var slicedSubject = subjects.slice(4, 5);
console.log(slicedSubject);
console.log(subjects);

// Sort - machine alphabetization
subjects.sort();
console.log(subjects);

// Reverse - reverses an array in place
subjects.reverse();
console.log(subjects);


var nums = [0, 53, 5, 103, 7, 78, 10];
// 0, 5, 7, 10, 53, 78, 103
nums.sort();
console.log(nums);
