/*
  Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
Run the tests to see the expected output for each method. 
These methods must be the only available means of interacting with the object. 
Each test will declare a new Person instance as new Person('Bob', 'Ross'). 
*/

const Person = function (firstAndLast) {
  let fullname = firstAndLast;
  this.getFullName = () => {
    return fullname;
  };
  this.getFirstName = () => {
    return fullname.split(" ")[0];
  };
  this.getLastName = () => {
    return fullname.split(" ")[1];
  };
  this.setFirstName = (newName) => {
    fullname = newName + " " + fullname.split(" ")[1];
  };
  this.setLastName = (newName) => {
    fullname = fullname.split(" ")[0] + " " + newName;
  };
  this.setFullName = (newName) => {
    fullname = newName;
  };
};

const bob = new Person("Bob Ross");
let result = bob.getFullName();
console.log(result);
