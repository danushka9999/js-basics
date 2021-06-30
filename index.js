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
