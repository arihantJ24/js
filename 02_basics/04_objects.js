// const tinderUser = new Object(); ---> singleton 
 const tinderUser = {} // -> non singleton 

tinderUser.id  = "123adv"
tinderUser.name = "dara"
tinderUser.isLoggedin = false
// console.log(tinderUser);



const regularUser = {
    email : "aaa@gmail.com",
    fullname : {
        userFullName :{
            firstName : "arihant",
            secondName : "jain",
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName) // . access the object

// combine object 
const obj1 = {
    1 : "a",
    2 : "b",
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = {obj1 , obj2} // same array wala problem

// console.log(obj3); 

const obj4= Object.assign({} ,obj1,obj2) // copies all enumerable values

// console.log(obj4);


//spread operator

const obj5 = {...obj1, ...obj2};
// console.log(obj5);

// value from database
// object in aerray 
const users = [
    {
        id : 1,
        email : "sds@gmail.com"
    },
    {
        id : 1,
        email : "sds@gmail.com"
    },
    {
        id : 1,
        email : "sds@gmail.com"
    },
    {
        id : 4,
        email : "sds@gmail.com"
    }
]

// console.log(users[3].id);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(typeof Object.keys(tinderUser));


// Object de-structure and json api

const course = {
    coursename : "js-hindi",
    cost : "888",
    teacher : "arihant",
}

// console.log(course.teacher);  this is fine 

const {teacher :prof  } = course;
// console.log(prof);

const navbar = (companyName) => {

}

navbar(companyName = "Ariannt")


{
    "name" ; "arihat" 
    "coursename" ; "js-hindi"
    "cost" ; "888";
    
}


