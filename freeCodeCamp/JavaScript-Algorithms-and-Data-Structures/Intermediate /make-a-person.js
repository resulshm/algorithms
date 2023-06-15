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
