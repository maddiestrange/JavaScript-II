// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function basket() {
  const crackerbox = "Box of Ritz";
  console.log(`You are looking at a ${crackerbox}.`);

  function cracker(){
    const crackers = "round cracker";
    console.log(`You are looking at a ${crackers} inside a ${crackerbox}.`);

    function crumbs(){
      const crumb = "small crumb";
      console.log(`You are looking at a ${crumb} inside a ${crackers} inside a ${crackerbox}.`);
    }
    crumbs();
  }
  cracker();
}
basket();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
