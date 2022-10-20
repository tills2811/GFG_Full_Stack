console.log("Hello world");
// console.error("shreyash");


//  Datatypes : Primitive Datatypes

//  1. String
//  2. Number
//  3. Boolean
//  4. Undefined
//  5. Symbols 


// Declare and Define 
 

// var num;  // Declaring a variable 

// num = 1 ;  //  Defining a variable



// var,let,const 

// console.log(num)

// var num = 1;


// line no. 27 will go at top of the file and only declare the num variable .


// Hoisting :- var, function name , class name will go the top of the program  and intialize or declare that variable. 
// It will only intialize or declare that Element not assign or define  the value. 


// let has a block scope

// const:- we cannot update value with const.

// let str =  "Shreyash";
// let x = null;

// console.log(typeof str);
// console.log(typeof x);



// Strings 

// concatenation :- Joining of two strings 


// let name ="Shreyash";
// let surName = "Arali";

// let fullName = `My name is ${name} ${surName}`

// console.log(fullName);


// console.log(fullName.substring(0,6));
// console.log(fullName.split("s"));



// Arrays


// let array = [1,4,7,"Shreyash"]

// console.log(array);
// console.log(array[1]);


// push :- add Element at the end of array
// pop:- delete Element from end
// unshift :- Add Element at start of array
// shift:- delete Element from start


// "==" it only checks its value.
// "===" it will check both datatype and its value.



// Objects 

//Collection of key value pair in js


// const course = {
//     lecture : 10,
//     section : 3,
//     title : "Javascript",
//     notes : {
//         introduction : "Welcome to JS Course" 
//     },
//     enroll() {
//         console.log("You are successfully enrolled.")
//     }
// }

// course.enroll()
// console.log(course);
// course.price = 999;

// console.log(course);


// Constructor Function 


// function Course(title){
//     this.title= title;
//     this.enroll = function (){
//         console.log("You are successfully enrolled.")
//     }
// }


// const course = new Course("Javascript")

// console.log(course);

// course.enroll();

// delete course.title;

// console.log(course);

// course.checkEnrollment = function(){
//     console.log("30 Students enrolled.")
// }

// console.log(course);



// Primitive Datatype 

// let number = 10 ;

// // Pass by value

// let number_2 = number;
// number = 15;

// console.log(number);
// console.log(number_2)


// number_2 creates exact copy of number 


// Reference datatypes

// let obj = {number: 10};


// // Pass by refernece 

// let obj2 = obj;

// obj.number= 15;

// console.log(obj);
// console.log(obj2);


// it will not create a exact copy but it will create a reference to old obj.


// so how to do the pass by value in objects 


// ans >>>>>>>>>> 


// const course = {
//     title : "Javscript",
//     enroll : function (){
//      console.log("you are successfully enrolled")
//     }
// }

// // const course_1 = {...course};    // ES6 method
// // course_1.title = "C++";

// // console.log(course);
// // console.log(course_1);

// const course_1 = Object.assign({}, course);  // js inbuilt method

// course_1.title = "C++";

// console.log(course);
// console.log(course_1);




// // Function 


// let myFunc= function (){

// }


// // ES6 way of writing 

// let myFunc1 = () => {

// }