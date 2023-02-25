//Q3.Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  }
  var details=new personalbar('Prasath','kumar','22','male');
  