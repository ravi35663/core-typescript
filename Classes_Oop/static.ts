/*
===> Static Properties and Methods in TypeScript:
    ->  Static properties and methods belong to the class itself, not to instances of the class. 
        They can be accessed directly via the class without creating an instance. 
    ->  Static members are used when certain functionality or data needs to be shared across all 
        instances of the class, or when it is not related to any specific instance.
*/

/*
===> Key Points:
    1) Static members are shared by all instances of the class.
    2) They are accessed directly via the class name, not via instances.
    3) Useful for utility functions, constants, or counters.
*/

class Calculator{
    // Static property

    static PI:number = 3.14

    // Static method
    static add(a:number,b:number):number{
        return a+b;
    }

    // Non-static method
    multiply(a:number,b:number):number{
        return a*b;
    }
}

const cal = new Calculator();

// Accessing static properties and methods
console.log(Calculator.PI);

// class Calculator {
//     // Static property
//     static PI: number = 3.14;
  
//     // Static method
//     static add(a: number, b: number): number {
//       return a + b;
//     }
  
//     // Non-static method
//     multiply(a: number, b: number): number {
//       return a * b;
//     }
//   }
  
//   // Accessing static property and method directly via class name
//   console.log(Calculator.PI); // Output: 3.14
//   console.log(Calculator.add(5, 10)); // Output: 15
  
//   // Non-static method requires an instance
//   const calc = new Calculator();
//   console.log(calc.multiply(5, 10)); // Output: 50
  