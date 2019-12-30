//prototype
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  return eyecolor
}

Person.prototype.name =function () {
    return this.firstName + " " + this.lastName;
  }
var Father = new Person("John", "Doe", 50, "blue");
var Mother = new Person("Sall", "Rall", 48, "green");
console.log(Mother.name())
/*
Person("John", "Doe", 50, "blue"); 
Person.nationality = "English"
Person.prototype.nationality = "English"
console.log(Person())
console.log(Person.age)
console.log(Father.nationality)
console.log(Mother.nationality)
console.log(Mother.age)
*/

/*
//call
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  person.fullName.call(person1, "Oslo", "Norway")

  //apply
  var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  person.fullName.apply(person1, ["Oslo", "Norway"]);

//bind
var obj = {name:"Nil"};
var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};
var bound = greeting.bind(obj); 
console.dir(bound()); //returns a function
console.log(bound("Newtown","KOLKATA","WB"));
*/