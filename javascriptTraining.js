/* Object */

var person = "Eric";

var person = {
                firstName:"Eric",
                lastName:"He",
                age:30,
                eyeColor:"blue",
                fullName: function(){
                    return this.firstName + " " + this.lastName;
                },
                get getEyeColor(){
                    return this.eyeColor;
                },
                set setEyeColor(eyeColor){
                    this.eyeColor = eyeColor;
                }
            }

var name = person.fullName();

console.log(name);

var person = new Object();

person.firstName = "Eric";
person.lastName = "He";
person.age = "50";
person.eyeColor = "black";

var x = person //reference

var name = person.firstName + person.lastName;

person.nationality = "China";

delete person.nationality;

var message = "Hello World";
var MESSAGE = message.toUpperCase();
console.log(MESSAGE);

person.setEyeColor = "Canva"

console.log(person.getEyeColor);

function testSetTimeOut(){
    setTimeout(function(){
        console.log("set time out is executed.")
    }, 0);

    console.log("second line");
    console.log("third line");
}

testSetTimeOut();

var obj = {
    counter: 0,
    get reset(){
        this.counter = 0;
    },
    get increment(){
        this.counter++;
    },
    get decrement(){
        this.counter--;
    },
    set add(value){
        this.counter += value;
    },
    set substract(value){
        this.counter -= value;
    }
}

var counter = new Object();

counter.counter = 0;

Object.defineProperty(obj, "reset",{
    get: function(){
        this.counter = 0;
    }
});

Object.defineProperty(obj, "increment",{
    get: function(){
        this.counter++;
    }
});

Object.defineProperty(obj, "decrement",{
    get: function(){
        this.counter--;
    }
});

Object.defineProperty(obj, "add",{
    set: function(value){
        this.counter += value;
    }
});


Object.defineProperty(obj, "substract",{
    set: function(value){
        this.counter -= value;
    }
});

//From now on using contructor function to create objects

function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "China";
Person.prototype.name = function(){
    return this.firstName + " " + this.lastName;
}

var myCousin = new Person("Jonathon", "Li", "40", "Green");
var mySister = new Person("Shay", "Tim", "33", "Black");
console.log(mySister.name());

console.log(Object.getPrototypeOf(mySister));
console.log(Object.getOwnPropertyDescriptor(mySister,"firstName"));


/* function */


console.log(myFunction(5));

function myFunction(y) {
  return y * y;
}

(function(){
    console.log("self invoked!!!");
})();

function myFunction(a, b) {
    return arguments.length;
}
console.log(myFunction(1,2,3));

const x1 = (x, y) => {return x * y}

function myFunction2(a = 7, b = 2){
    console.log(a*b);
}

function myFunction3(){
    return arguments[0] * arguments[1] * arguments[2]
}
console.log(myFunction3(2,3,4))

