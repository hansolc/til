// Prototype의 기본 사용
function Person(name) {
  this.name = name;
  //   this.gretting = function () {
  //     return "hi";
  //   };
}

Person.prototype.gretting = function () {
  return `${this.name} hi`;
};

const p1 = new Person("bob");
const p2 = new Person("pop");
console.log(p1.gretting());
p1.gretting(); //hi
p2.gretting(); //hi

// --------------------------------
// 프로토타입 체인
function Person(name) {
  this.name = name;
  this.sayMyName = function () {
    return `my name is ${this.name}`;
  };
}

const p3 = new Person("bob");
console.log(p3.sayMyName()); // my name is bob
console.log(p3.hasOwnProperty("name")); // true
console.log(p3.hasOwnProperty("tel")); // false
