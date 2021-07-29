//this is my first java script code
    console.log('Hello  World');

//Variables

    //cannot be reserved keyword
    //should be meaningful
    //they cannot start with a nmuber
    //cannot containg sapce or hyphen(-)
    //use cammel notation
    //case sensitive

    let firstName = 'Danushka';
    let lastName = 'Ranasinghe';
    console.log(firstName);
    console.log(lastName);

//Constants
    const interestRate = 0.3;
    //interestRate = 1;
    //cannot assign a value again because its a constant
    console.log(interestRate);

//Pirimitive/Value Types
    //String
    //Number
    //Boolean
    //Symbol(Introduced in ES6)
    //Undefined 
    //Null
    let name = 'Danauhska'; //String literal
    let age = 30; //Number literal
    let isApproved = false; //Bollean literal
    let firstname = 'Undefined';
    let selectColor = null;
    console.log(name);
    console.log(age);
    console.log(isApproved);
    console.log(firstname);
    console.log(selectColor);

//Dynamic Typing
    //can use 'typeof' to check its pirimitive type
    //undefined is also a value and a type
    //typeof selectColor = object


//Refference Types
    //Object
    //Array
    //Fuction

//Object
    let person = {
        fname: 'Danu',
        Age: 21
    };
    //Dot Notation(to access property)
    //Mostly use dot notation
    person.fname = 'Malinga';
    console.log(person.fname);

    //Bracket Notation(to access property)
    //When we dont know the target property we use this(It is goint to select by user)
    person['Age'] = 22;
    console.log(person.Age);

    console.log(person);

//Array
    let selectColors = ['Red' , 'Blue']; //Array Literal
    selectColors[2] = 'green'
    console.log(selectColors);
    console.log(selectColors[0]);
    console.log(selectColors.length);

//Functions
    //Performing a task
    function greet(name , lname) {
        console.log('Hello ' + name + ' ' + lname);
    }
    greet('Danushka' , 'Ranasinghe');//Danushka is an argument | name is a parameter
    greet('John' , 'Mayor');

//Types of functions
    //Calculate a value
    function square(number){
        return number*number;
    }
    let number = square(2);
    console.log(number);


//OOP IN JS
    //Encapsulation - Reduce complexity + increase reusability
    //Abstraction   - Reduce complexity + isolate impact of changes
    //Inheritance   - Eliminate redundant code
    //Polymorphism  - Refactor ugly switch/case statements

//Object Literal
    //Object in js is a collection of key/value pairs
    //value can be a object, function, array
    //{}; <----- Object literal syntax

    const circle = {
        radius : 1,
        location : {
            x : 1,
            y : 1
        },
        draw : function(){
            console.log('draw');
        }
    };
    //This circle object has 3 members
    //if a member is a function, we refer it as method
    //other two members are propertys
    circle.draw();
    //Object literal is the simple way to define an object

//Factories
    //If a object has one or more method we call that object has bechaviour. so if an object has atleast one fuction then its not suit to go on object literal
    //Threfore use factory and constructor method
//factory function
    function createCircle(radius){
        return{
            radius, //In ES6 we have this feature, If the key and value are the same we can remove the value and  keep key (radius : radius) ---> radius
            draw : function(){
                console.log('draw');
            }
        };
    }
    const ccircle = createCircle(5);
    ccircle.draw();

//Constructor Fuction
    function Circle(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('Draw');
        }
    }
    const another = new Circle(1);
    
//We can assign methods to an object by defining properties that are functions:
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
    console.log('hello, my name is ' + this.name)
    },
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed

//Methods can be assigned to objects even after the creation of the object:
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
    console.log('hello, my name is ' + this.name)
    },
}

arto.growOlder = function() {
    this.age += 1
}

console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed
    


//Constructor property
   //Every object in js has a property called constructor. Amd that refernces to the function that we used to create object
   //another.constructor 
   //ccircle.constructor

//Fuctions are objects
    //JS engine use a fuction to create function object
    Circle.call({} , 1); //this equals to line 142 statement
    Circle.apply({} , [1,2,3]) //above we pass the arguments explicitly now we pass arguments as arrays

//Values/Pirimitives vs Reference types
    //Pirimitives are copied by their value
    //Objects are copied by their references

//Adding or removing properties
    //objects are dynamic
    //Dot notation to add property
    another.location = {x:1};
    //Bracket notation to add property
    const propetyName = 'location';
    another['propetyName'] = {x : 1};

    //Dot Notaion to remove property
    delete another.location;
    //Bracket Notaion to remove property
    delete another['location'];

//Enumerating properties
    const circle1 = new Circle(10);

    for (let key in circle1){
        console.log(key);
        console.log('Hello');
    }
    //to get values of these members use bracket notation
    for (let key in circle1){
        console.log(key, circle[key]);
        console.log('Chao');
    }
    //To only get properties not the methods
    for (let key in circle1){
        if (typeof circle1[key] !== 'function'){
            console.log(key, circle[key]);
            console.log('Ayubowan');
        }
    }
    //this will return all the keys in a array
    const keys = Object.keys(circle1);
    console.log(keys);
     
    //Check for exixsting member(property or method)
    if('radius' in circle1)
        console.log('Circle has a radius');


//Abstraction(Hide the details Expose the essentials)
//If need to keep it as private remove this and put let
    function Circle1(radius){
        this.radius = radius;
        let defaultLocation = {x: 0,y :0};
        let computeOptimumLocation = function(factory){
            console.log(factory);
        }
        this.draw = function(){
            computeOptimumLocation(25);
            console.log('Draw');
        }
    }
    const another1 = new Circle1(10);
    another1.draw();

//Getters/Setters
    function Circle2(radius){
        this.radius = radius;
        let defaultLocation = {x: 0,y :0};
        this.draw = function(){
            console.log('Draw');
        }
        Object.defineProperty(this, 'defaultLocation', {
            get: function(){
                return defaultLocation;
            },
            set: function(value) {
                if(!value.x || !value.y)
                    throw new Error('Invalid Location. ');
                defaultLocation = value;    
            }

        });
    }
    const another2 = new Circle2(10);
    //another2.defaultLocation = 0;
    another2.draw();


//Exercise STOPWATCH
    function Stopwatch() {
        let startTime, endTime, running, duration = 0; 
        this.start = function () {
            if(running)
                throw new Error('Stopwatch has already started.');
            running = true;
            startTime = new Date();

        };
        this.stop = function () {
            if(!running)
                throw new Error('Stopwatch is not started.');
            running = false;
            endTime = new Date();
            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        };
        this.reset = function () {
            startTime = null;
            endTime = null;
            running = false;
            duration = 0;
            
        };
        Object.defineProperty(this, 'duration', {
            get: function () {
                return duration;   
            }
        });
        
    }
    const sw = new Stopwatch();


//ES6
    //Let/Const
    //Objects
    //this
    //Arrow Functions
    //Destructing
    //Spread
    //Classes
    //Modules
  
//arrays
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})  


// concat, which does not add the item to the array, but creates a new array in which the content of the old array and the new item are both included.
const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed


//Based on the old array, map creates a new array, for which the function given as a parameter is used to create the items. In the case of this example the original value is multiplied by two.
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

//Individual items of an array are easy to assign to variables with the help of the destructuring assignment.
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed

//Clases
class Person {
constructor(name, age) {
  this.name = name
  this.age = age
}
greet() {
  console.log('hello, my name is ' + this.name)
}
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()

