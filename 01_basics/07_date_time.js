// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString()); /// date to string
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());



// console.log(typeof myDate);


// let myCreateDate = new Date(2023,0,23);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleTimeString());


// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // it isin milisecond

// console.log(myCreateDate.getTime());


// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay()+1);
console.log(newDate.getMonth());

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    timeStyle: "medium",
}));