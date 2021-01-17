var joke = {
  category: "Chuck Norris Jokes",
  url: "https://api.chucknorris.io/jokes/I5_UU3f7Q2e2qao2TJz9aw",
  content: "Anything you can do, Chuck Norris does better.",
};

// Task 1
// Using `for..in`, `console.log` all property names of the `joke` object,
// concatenating string `joke.` first.
// Expected result : 'joke.category', `joke.url`, `joke.content`

for (let key in joke) {
  console.log(`joke.${key}`);
}

// Task 2
// Using `Object.keys` get the array of property names (keys) from the object joke
// and `console.log` that array.

let names = Object.keys(joke);
console.log(names);

// Task 3
// Using keyword `delete`, remove the property `url` from the object joke.
delete joke.url;
console.log(joke);

// Task 4
// Using dot notation add method (function) `hint` to the joke object.
// Method should `console.log`: "The joke is stored in the property .content"

joke.hint = "The joke is stored in the propert .content";
console.log(joke);

var cohorts = [
  {
    city: "bcn",
    course: "webdev",
    date: new Date("2019-04-01"),
    name: "2019 Apr",
    students: [
      { name: "Michelle", country: "de" },
      { name: "Jason", country: "us" },
      { name: "Arnau", country: "es" },
      { name: "Chloe", country: "fr" },
      { name: "Gus", country: "es" },
      { name: "Miguel", country: "es" },
      { name: "Yvonne", country: "de" },
    ],
  },
  {
    city: "bcn",
    course: "webdev",
    date: new Date("2019-06-04"),
    name: "2019 June",
    students: [
      { name: "Carlos", country: "es" },
      { name: "Cody", country: "us" },
      { name: "Ana", country: "ru" },
      { name: "Esther", country: "es" },
      { name: "Jairo", country: "es" },
      { name: "Lu", country: "es" },
      { name: "Anna", country: "es" },
    ],
  },
];

// Task 1
// Get the name of the first student in the "2019 Apr" cohort
// for (let key in cohorts){
console.log(cohorts[0].students[0].name);
//}

// Task 2
// Using the forEach loop print the names of all the students in the "2019 June cohort"

cohorts[1].students.forEach((studentsSecond) => {
  console.log(studentsSecond.name);
});

// Extra
// Modify the above loop to print "only" the names of the students from "2019 June" cohort with the `country` value 'es'.

cohorts[1].students.forEach((studentsSecond) => {
  if (studentsSecond.country === "es") {
    console.log(studentsSecond.name);
  }
});

//Create an array of employees containing the following strings:
//"Bob", "Sarah", "Anna", "Martha", "John", "Ben", "Nidia".
//After you finish, console.log the employees array.

let employees = ["Bob", "Sarah", "Anna", "Martha", "John", "Ben", "Nidia"];

console.log(employees);

//Using the method push add new strings representing the new employee names: Adriana, Gabriel, Mia .​

//console.log the employees array.

employees.push("Adriana", "Gabriel", "Mia");

console.log(employees);

//Using method pop remove the last employee Mia and save it in a string named mia.

//console.log the employees array and variable mia.

let mia = employees.pop();

console.log(employees);
console.log(mia);

//Let's promote Martha to be the new manager! Create a new array called managers using the method splice . Make sure to remove only Martha from the employees array.
//We can't afford to promote just anyone! 👷
//console.log the employees and managers array.

//Let's promote another employee. Using the method shift remove the first employee from the employees array and add him to the managers array. Yay! Martha is not alone.
//console.log the employees and managers array.

let managers = employees.splice(3, 1);

console.log(employees);
console.log(managers);

//As the last step print the length of managers and employees arrays.

console.log(employees.length);
console.log(managers.length);
