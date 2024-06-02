// singleton - >> constructor se bnega toh hmesa singleton rhega

// object literals
// Object.create -> singleton

const mysym = Symbol("key1"); // symbol ko keys me kese add krenge


const jsUser = {
    name: "arihant",
    "fullname" : "arihant jain",  // for this we use second method to access it
    age: 20,

    [mysym ]: "mykey1", // we have to use it in square bracelt

    location : "jabalpur",
    email:"fgk@gmail.com",
    isLggedIn : false,
    lastLoggedInDays : ["Monday", "saturday"]
}
// console.log(jsUser.email);

// console.log(jsUser["fullname"]);
// console.log(jsUser[mysym]);
// console.log(typeof jsUser[mysym]); // string but we want it to symbol 


jsUser.email = "arigfn@gmail.com"
// Object.freeze(jsUser);
jsUser.email = "arigfn@ms.com"

// console.log(jsUser);


// functionnns

jsUser.greeting =function () {
    console.log("hello Gm");
}

// function intpulation
jsUser.greeting =function () {
    console.log(`hello Gm,${this.fullname}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
