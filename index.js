
const student = {
  fullname: "shahbaz",
  marks: 94,
  printmarks() {
    console.log(`the marks of the studnet is ${this.marks}`);
  },
};

const emploee = {
  caltax() {
    console.log("tax is 10");
  },
};
const user = {
  salary: 2000,
};

user.__proto__ = emploee;

class car {
  start() {
    console.log("car start");
  }
  stop() {
    console.log("car stop");
  }
  setbrandname(brand) {
    this.brand = brand;
  }
}

let fortuner = new car();
fortuner.setbrandname("ata maji");

class parrent {
  hello() {
    console.log("heloo");
  }
}

class child extends parrent {}

let property = new child();

class Person {
  constructor() {
    this.species = "homo sapians";
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("human can work ");
  }
}

class Engineer extends Person {
  work() {
    console.log("work");
  }
}

class Doctor extends Person {
  work() {
    console.log("treat patient");
  }
}

let engineerclassaccess = new Engineer();
let personconstuctor = new Person();

let engineer1 = new Engineer();

class Person {
  constructor(name) {
    this.species = "homo sapians";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("human can work ");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name);
  }
  work() {
    console.log("work");
  }
}

class Doctor extends Person   {
  constructor(field) {
    super();
    this.field = field;
  }
  work() {
    console.log("treat patient");
  }
}

let engineerclassaccess = new Engineer("physical engineer");
let doctorclass = new Doctor("ortho");

let websitedata = "www.google.com"
class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewdata() {
    console.log(`you can view the data of the website on ${websitedata}`);
  }
}
let user1 = new user("shahbaz", "ashbrokemisty@gmail.com");
let user2 = new user("RAHUL", "abc@gmail.com");

let teacher1 = new user("dean", "dean@college.com")


let websitedata = "www.google.com";
class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewdata() {
    console.log(`you can view the data of the website on ${websitedata}`);
  }
}
class Admin extends user {
  constructor(name,email){
    super(name, email)
  }
  Editdata() {
    websitedata = "new data";
    console.log(`you can edit the data. The new data is ${websitedata}`);
  }
}

let user1 = new user("shahbaz", "ashbrokemisty@gmail.com");
let user2 = new user("RAHUL", "abc@gmail.com");

let teacher1 = new user("dean", "dean@college.com");

let HR = new Admin("admin", "admin@ibex.co");
