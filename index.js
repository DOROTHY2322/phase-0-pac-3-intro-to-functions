function sayHello()
{
    console.log("Hello!");
  }

  sayHello();

  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }
  sayHelloToIsabel();

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }
  sayHelloToSofia();

  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  } 

sayHelloToBrendan();


function say(Goodbye, Julio) {
    console.log(`${Goodbye}, ${Julio}!`);
  };
  
  say("Goodbye", "Julio");
  
  function say(Julio, Goodbye) {
    console.log(`${Julio}, ${Goodbye}!`);
  }
  say("Julio", "hello");

  function say(hello, Julio) {
    console.log("Julio: ", Julio);
    console.log("hello: ", hello);
    console.log(`${hello}, ${Julio}!`);
  }


  function add(x, y) {
    return x + y;
   
  }
  console.log(add(1, 2));

  
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Sofia"));

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Sofia"));
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner"));