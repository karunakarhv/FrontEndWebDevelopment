var Employee = {
  name : "Karunakar",
  age: 30,
  salary : 10000,
  Address:{
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560061
  }
};

console.log("Name: " + Employee.name);
console.log("Age: " + Employee.age);
console.log("Salary: " + Employee.salary);
console.log("City: " + Employee.Address.city);
console.log("State: " + Employee.Address.state);
console.log("PinCode: " + Employee.Address.pincode);
