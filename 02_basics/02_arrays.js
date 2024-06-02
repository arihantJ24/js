
const core_sub = ["oops","computerNetwork", "operationSystem"];
const dsa_sub = ["recursion", "dynamic", "graph"];

// core_sub.push(dsa_sub);
// console.log(core_sub); // array ke andar array


// const all_sub = core_sub.concat(dsa_sub); // concat always return the new array
// console.log(all_sub);


const all_sub = [...core_sub, ...dsa_sub]; // spread operation spread the array in individual and then combine
// console.log(all_sub);

const new_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_new_array = new_array.flat(Infinity);
// console.log(real_new_array); 


//In data scraping we need it in form of array

console.log(Array.isArray("arihant"));
console.log(Array.from("arihant"));

console.log(Array.from({name: "arihant"})); // interesting 


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));




