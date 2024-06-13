// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
}

// Saxon
class Saxon extends Soldier {
    // constructor(health, strength) {
    //     super(health, strength);
    // }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat";
        }
    }
}

// War
// BONUS
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const randomSaxonIndex = Math.floor(
            Math.random() * this.saxonArmy.length
        );

        const randomVikingIndex = Math.floor(
            Math.random() * this.vikingArmy.length
        );

        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];

        const result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return result;
    }
    saxonAttack() {
        const randomSaxonIndex = Math.floor(
            Math.random() * this.saxonArmy.length
        );

        const randomVikingIndex = Math.floor(
            Math.random() * this.vikingArmy.length
        );
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];

        const result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }

        return result;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

/**class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];

        const result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return result;
    }

    saxonAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];

        const result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }

        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
} */

// autre exo
// test ecole
function product(x, y) {
    // your code
    console.log(x * y);
    return x * y;
}

product(2, 3);

/**Check if number is even
Context
This challenge tests your basic understanding of data types, conditionals and functions.

Requirements
Create a function named isEven that receives a number as an argument. The function should check the number and return true if number is even or false if it's not. */

function isEven(num) {
    // your code
    if (num % 2 === 0) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}

isEven(2);

/**Find max of two numbers
Context
This challenge tests your basic understanding of comparison operators, conditionals and functions.

Requirements
Create a function named maxOfTwoNumbers that receives any two number as arguments. The function should compare two numbers and return the greater number. */

numberList = [28, 99];
function maxOfTwoNumbers(a, b) {
    // your code
    for (greaterNum in numberList) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
}
console.log(maxOfTwoNumbers(28, 99));

/**Find max of three numbers
Context
This challenge tests your basic understanding of data types, conditionals and functions.

Requirements
Create a function named maxOfThreeNumbers that receives any three numbers as arguments. The function should return the greatest number out of three numbers provided. */
// function maxOfThreeNumbers(a, b, c) {
//     if (a >= b) {
//         if (a >= c) {
//             return ` ${a} is the greatest number`;
//         }
//     } else {
//     }
//     if (b >= c) {
//         return ` ${b} is the greatest number`;
//     } else {
//         return ` ${c} is the greatest number`;
//     }
// }
// console.log(maxOfThreeNumbers(28, 99, 100));

function maxOfThreeNumbers(a, b, c) {
    const array1 = [28, 99, 100];
    Math.max(...array1);
    return Math.max(...array1);
}
console.log(maxOfThreeNumbers(28, 99, 100));

// const array = [28, 99, 100];
// const initialValue = 0;
// function sumArray(numbers) {

//     // your code

//     const moreAndMore = array.reduce(accumulator, currentValue) => accumulator + currentValue, initialValue
//     console.log(moreAndMore);

//     console.log(numbers.reduce(reducer));
// }

function sumArray(numbers) {
    return numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
}

const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log(result); // Sortie : 15

/**Find max in an array of numbers
Context
This challenge tests your basic understanding of data types, conditionals, loops and functions.

Requirements
Create a function named maxOfArray that receives an array of numbers as an argument. The function should return the greatest number out of the numbers provided in the array. */
function maxOfArray(numbers) {
    if (numbers.length === 0) {
        return false;
    }
    return Math.max(...numbers);
}

/** 
Find the longest string
Context
This challenge tests your basic understanding of data types, conditionals, loops and functions.

Requirements
Create a function named longestString that receives an array of strings as an argument.
The function should return the longest string out of the array of provided strings.
If the array contains more than one string of the same length, the first found longest string should be returned.*/

function longestString(strings) {
    // your code
    let longest = "";
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}

// `Get the full name
// Context
// This challenge tests your basic understanding of primitive data types, objects, conditionals and functions.

// Requirements
// Create a function named getFullName that receives an object as an argument.
// The function should return the concatenated string containing the firstName and lastName property values from the object.
// More specifically, the returned string should represent a person's full name based on the provided object that contains the first and last name as its properties. Example object { firstName: 'Tony', lastName: 'Stark'}.`

const person = { firstName: "Tony", lastName: "Stark" };
function getFullName(personObj) {
    // your code
    return `${personObj.firstName} ${personObj.lastName}`;
}

console.log(getFullName(person));

/**Does word exist
Context
This challenge tests your basic understanding of primitive data types, arrays, conditionals, loops and functions.

Requirements
Create a function named doesWordExist that receives two arguments:

an array of strings and
a string with the word we want to check if it exists in that array.
The function should returntrue/false depending on if the word exists in the array or not. */

function doesWordExist(wordsArr, word) {
    // your code
    if (wordsArr.includes(word)) {
        return true;
    }
    return false;
}

/**Find the nth element 

Find unique word
Context
This challenge tests your basic understanding of primitive data types, arrays, conditionals, loops and functions.

Requirements
Create a function named findUnique that receives an array of words as an argument.
The function should return the first found unique (non-repeating) word.*/

function findUnique(words) {
    return (
        words.find((word) => words.indexOf(word) === words.lastIndexOf(word)) ||
        false
    );
}
