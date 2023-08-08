/* eslint-disable require-jsdoc */


class ClassWithPrivateMethod {
    #privateMethod() {
       console.log('I am a private method');
    }
    static #privateStaticMethod() {
      console.log('I am a private static method');
    }

    callPrivateMethod() {
      return this.#privateMethod();
    }
    callPrivateStaticMethod() {
      return ClassWithPrivateMethod.#privateStaticMethod();
    }
  }
  let obj = new ClassWithPrivateMethod();
  obj.callPrivateMethod(); // calling private method 
  obj.callPrivateStaticMethod();  // calling private static method 
  obj.#privateMethod();