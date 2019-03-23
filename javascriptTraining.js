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

Object.defineProperty(Person.prototype, "getName", {get :function(){
    return this.firstName + " this is getter defined for a constructor " + this.lastName;
}
})


Object.defineProperties(Person.prototype, {
    occupation : {
        get: function(){
            return "developer";
        },
        set: function(data){
            console.log(data);
        }
    },
    visaStatus : {
        value : "permenant residnece"
    },
})




Person.prototype.addr = "here";

Person.prototype.nationality = "China";
Person.prototype.name = function(){
    return this.firstName + " " + this.lastName;
}

var myCousin = new Person("Jonathon", "Li", "40", "Green");
var mySister = new Person("Shay", "Tim", "33", "Black");
console.log(myCousin.getName)
console.log(mySister.name());
console.log(myCousin.addr)
console.log(myCousin.occupation)
myCousin.occupation = "action!!!"
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
console.log(window.myFunction3(2,3,4))

var callPerson = {
    firstName : "Eric",
    lastName : "He",
    eyeColor: "Pink",
    get getEyeColor(){
        return this.eyeColor;
    },
    getName : function(){
        return this.firstName + " " + this.lastName;
    },
    getHomeTown: function(suburb, city){
        return this.firstName + " " + suburb + " " + city;
    }
}

var callPerson1 = {
    firstName: "Bai",
    lastName: "Lu",
    eyeColor: "Pink"
}   
 var callPerson2 = {
     firstName: "Matthew",
     lastName: "Retford",
     eyeColor: "Pink"
 }

 console.log(callPerson.getName.call(callPerson2));
 console.log(callPerson.getHomeTown.call(callPerson1,"Riverwood","Sydney"))
 console.log(callPerson.getHomeTown.apply(callPerson1,["Perth","Sydney"]))
 var getHomeTown = callPerson.getHomeTown.bind(callPerson2,"Tianjin","China")
 console.log(getHomeTown())

 console.log(Math.max(1,2,3,4,5))
 console.log(Math.max.apply(null, [1,2,3]))


 function myFunction4(){
     return callPerson1;
 }

 console.log(callPerson1)

 var add = (function (){
    var counter = 1;
    var plus = function(){return counter++;}
    return plus
 })()

 console.log(add())
 console.log(add())
 console.log(add())
 console.log(add())

 /* Class */

 class Ractangle{
     constructor(height, width){
         this.height = height;
         this.width = width;
     }
 }

 const p = new Ractangle();

 let RectangleX =  class{
        constructor(height, width){
            this.height = height;
            this.width = width;
        }
        get area(){
                return this.height * this.width;
        }
        speak(){
            return this;
        }
}

let RectangleY =  class Ractangle2{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}
RectangleX.age = "40"
RectangleX.prototype.nickname = "staticName"

console.log(RectangleX.name)
console.log(RectangleY.name)

const square = new RectangleX(2,2);
console.log(square.area)

square.nickname = "changedStaticName"
RectangleX.prototype.nickname = "staticName"
console.log("This is a static name: " + square.nickname)
console.log("This is a static age: " + square.age)

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(a, b){
        const dx = a.x - a.y;
        const dy = b.x - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(3,5);
const p2 = new Point(6,-1);

console.log(Point.distance(p1,p2))

console.log(square.speak())
const speak = square.speak.bind(square);
console.log(speak())



function Animal() { 
    this.speak = function() {
        return this;
      };
    this.eat = function() {
        return this;
      }
}


let obj1 = new Animal();
let speak1 = obj1.speak;
console.log("Global Object:" + speak1()); // global object

Animal.eat = function() {
    return this;
  };
let eat = Animal.eat
console.log(eat()); // global object

class Rectangle4{
    height = 30; //static members cannot be defined here.
    width = 50; //static members cannot be defined here.
}
Rectangle4.height = 30;
console.log(Rectangle4.height)



class Animal1 { 
    speak() {
      return this;
    }
    static eat() {
      return "this this this " + this;
    }
  }
  
  let obj2 = new Animal1();
  console.log(obj2.speak()); // Animal {}
  let speak2 = obj2.speak.bind(obj2);
  console.log(speak2()); // undefined

  console.log('*********')
  console.log(Animal1.speak()) // class Animal
  console.log(Animal1.eat.call(obj2));
  //console.log(eat2()); // undefined

  console.log('*********')

  function laptop(){
      this.id = "100";  
    }

  laptop.prototype.color = "white";  

   var laptop1 = new laptop();
   laptop1.color = "red";
   console.log(laptop1.color)

   var laptop2 = new laptop();
   console.log(laptop2.color)

function Animal3() { 
    this.eat3 = function() { // this field is in constructor so cannot be accessed from prototype
        return this;
      }
}

Animal3.prototype.speak = function() { 
  return this;
}

Animal3.eat3 = function() {
    return this;
  }

let obj3 = new Animal3();
let speak3 = obj3.speak;
console.log(speak3()); // global object

let eat3 = Animal3.prototype.eat3;
console.log(eat3); // global object

class InheritAnimal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name + ' makes a noise')
    }
}

class Dog extends InheritAnimal{
    constructor(name){
        super(name)
    }
    speak(){
        console.log(this.name + ' barks')
    }
}

var d = new Dog("John");
d.speak()

function functionalAnimal(name){
    this.name = name;
    this.speak = function(){
        console.log(this.name + ' makes a noise.')
    }
}

class FuntionalDog extends functionalAnimal{

}

let df = new FuntionalDog('Mitzie');
df.speak();


class Cat{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name + ' make a noise.')
    }
}

class Lion extends Cat{
    constructor(name){
        super(name);
    }
    speak(){
        super.speak();
        console.log(this.name + 'maake a rarrrrrr!!!!')
    }
}

var l = new Lion("Lion ")
l.speak();

// document.getElementById("myButton").addEventListener("click", function(){
//     console.log(event)
//     console.log(this)
// })

function test(element){
    console.log(event)
    console.log(element)
}

var body = document.getElementsByTagName("body")[0];

var div = document.createElement("div");

var para = document.createElement("p");

var textNode = document.createTextNode("lorem ipsum");

para.appendChild(textNode);
div.appendChild(para);
body.append(div);

console.log(typeof(0));

var s = "string"

s[0] = 't'

console.log(s)

var a = ["s","t"]
a[0] = "b"
console.log(a)

var searchStrin = "abcdefghihjk"

console.log(searchStrin.match(/h/g))

var spliceArr = ["Emil", "Tobias", "Linus"];
spliceArr.splice(2, 0)
console.log(spliceArr)


var fruits = ["Apple", "Banana", "Orange"];
for (x in fruits) {
  console.log(x);
}


class Animal {
    name = "Eric";
    get getName(){
        return this.name;
    }
 }

Animal.prototype.speak = function() {
  return this;
}

Animal.prototype.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;

console.log(obj.name); // global object


