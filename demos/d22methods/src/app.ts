//write any code you want to test here and run with npm run app

type Person = {
    name: string;
    age: number;
    job: string;
    sayHi(this: Person): void;
  }

const manager: Person = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: sayHowdy
  };
  const intern:  Person= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdy
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHowdy(this: Person) {
     //COMPLETE THIS
     console.log("Hello, my name is ", this.name, );
  }
  
  
  manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'

  