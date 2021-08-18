function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`hi,this is ${this.name}`);
};

function Student(name) {
  this.name = name;
}

Student.prototype = new Person();
const studentA = new Student('A');
studentA.sayHi();
console.log(Student.__proto__ === Function.prototype);
console.log(Student.prototype.__proto__ === Person.prototype);

class CPerson {
  constructor(name) {
    this.name = name;
    this.type = 'person';
  }

  sayHi() {
    console.log(`hi,this is ${this.name}`);
  }
}

class CStudent extends CPerson {
  constructor(name) {
    super(name);
    this.type = 'student';
  }
}

// let SA = new CStudent('SA');
// SA.sayHi();
// console.log(SA.type);
