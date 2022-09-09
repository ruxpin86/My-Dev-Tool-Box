const dogs = [
  { name: "Odie", age: 3 },
  { name: "Tess", age: 1 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "silly");

// Styled
console.log(
  "%c I am a piece of text",
  "font-size: 20px; background: blue; text-shadow: 2px 2px 0 gray"
);

// Warning!
console.warn("Rut-ro");

// Error :|
console.error("ERROR");

// Info
console.info("My dogs name is Odie");

// Testing
// console.assert(1 === 1, "That is incorrect");
const p = document.querySelector("p");

console.assert(p.classList.contains("foo"), "That is is incorrect");

// Clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p); //shows all the available methods on that element

// Grouping together
dogs.forEach((dog) => {
  //   console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} in dog years`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count("Ted");
console.count("Ted");
console.count("Ted");
console.count("Ted");

// timing
console.time("fetch data");
fetch("https://api.github.com/users/ruxpin86")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetch data");
    console.log(data);
  });
