const name = "arihant"
const repoCount = 20

console.log(name+repoCount);

console.log(`Hello this side ${name} and his total repo is ${repoCount}`);

const school = new String('iiest-shibpur');

console.log(school[0]);
console.log(school.__proto__);
console.log(school.length); // tell the length
console.log(school.toUpperCase());
console.log(school.charAt(5));
console.log(school.indexOf('s'));
console.log(school);

const newstring = school.substring(0,4);
console.log(newstring)

const secondString = school.slice(-6,2);
console.log(secondString);

const newStringOne = "     arihant     "
console.log(newStringOne);
console.log(newStringOne.trim()); // this trim the starting and ending space of string  uses in form

const url = "https://aria.www.com/hirtss%44t"

console.log(url.replace('%4', '-'));


console.log(url.includes('aria'));


// string comvert to array based on - 

console.log(school.split('-' ));