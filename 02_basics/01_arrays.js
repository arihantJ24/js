//array

const myArr = [0,1,2,3,4,5];

// javascript array are resizable ..
// 0 based indexing 
// shallow copy -> same reference pont
// console.log(myArr[0]);

const myHero = ['shakiman', 'fjnf'];

const myArr2 = new Array(1,3,4,5);
// console.log(myArr2[2]);

// Array methond

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

//myArr.unshift(94); // push in starting place
 // myArr.shift(); // remove


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr); // it become string
// console.log(typeof newArr);


// slice splice


console.log(("A ", myArr));

const myArn1 = myArr.slice(1,3);
console.log("slice" , myArn1);


console.log('A' , myArr);

const myArn2 = myArr.splice(0,3);
console.log("splice" , myArn2);

console.log('C' , myArr);