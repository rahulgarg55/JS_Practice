// Define a basic function
function introduce(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

// Create objects to use as 'this'
const person1 = { name: 'Rahul' };
const person2 = { name: 'Priya' };

// Example 1: Using `call`
// `call` invokes the function immediately with the specified `this` value and individual arguments
introduce.call(person1, 'Hello', '!'); // Output: "Hello, my name is Rahul!"
introduce.call(person2, 'Hi', '.');    // Output: "Hi, my name is Priya."

// Example 2: Using `apply`
// `apply` is similar to `call`, but arguments are passed as an array
introduce.apply(person1, ['Greetings', '!!']); // Output: "Greetings, my name is Rahul!!"
introduce.apply(person2, ['Hey', '...']);      // Output: "Hey, my name is Priya..."

// Example 3: Using `bind`
// `bind` returns a new function with a specific `this` value and optionally pre-set arguments
const introduceRahul = introduce.bind(person1, 'Hello');
const introducePriya = introduce.bind(person2);

// The returned functions can be invoked later
introduceRahul('!'); // Output: "Hello, my name is Rahul!"
introducePriya('Hi', '.'); // Output: "Hi, my name is Priya."
