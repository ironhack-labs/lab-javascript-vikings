![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Vikings *Object Oriented Programming*

## Introduction

We have learned Object Oriented Programming and Prototypal inheritance with JavaScript. Now we will work with our Viking friends applying all the concepts we just learned today. Let's start with the exercise.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Make sure you use objects and prototypal inheritance during the exercise.
- We should follow good object oriented principals.

## Submission

- Upon completion, run the following commands

```
git add .
git commit -m "done"
git push origin master
```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Tools we will use

We will be working with npm, Node, Chai and Mocha to work with this project and learn Object Oriented Programming in JavaScript.

![](https://i.imgur.com/5QYneg7.jpg)

In future weeks of the course we will explain all this concepts deeply. By the moment, we will give you a few introduction to help you understand how we will use each one:

- [`npm`](https://www.npmjs.com/). It's the Node package manager. It will help us to install all the packages and its dependencies that we need to run our project.
- [`Node`](https://nodejs.org/es/). It's used to run JavaScript in the back end.
- [`Chai`](http://chaijs.com/). It's a library that allows us to test our application.
- [`Mocha`](https://mochajs.org/). It works with `Chai` and allows us to write the tests. We write the tests with Mocha and run them with Chai.

**Note this is a very big picture about the tools we are going to use in this exercise. We will learn all them all deeply in the future lessons of the course :)**

## Usage

```bash
$ cd ~/code/labs/lab-javascript-oop/
$ npm install
$ mocha

  SOLDIERS
    ✓ should have Object as its prototype
    1) should have a number of health
    2) should have a strength
    3) should have an attack function
    4) should have a receiveDamage function
    5) should remove the received damage from his health

  VIKINGS
    6) should be derived from Soldier
    7) should have a name
    8) should have a health
    9) should have a strength
    10) should have an attack function
    11) should have a receiveDamage function
    12) should remove the received damage from his health
    13) should return "Odin Owns You All!" when battleCry is called
    14) should return "{name} has died in act of combat" when the health is equal or lower than 0

  SAXONS
    15) should be derived from Soldier
    16) should have a health
    17) should have a strength
    18) should have an attack function
    19) should have a receiveDamage function
    20) should remove the received damage from his health
    21) should return "A Saxon has died in combat" when the health is equal or lower than 0

  WAR
    22) should have an array of Vikings
    23) should add Vikings to the army
    24) should have an array of Saxons
    25) should add saxons to the army
    26) should show the result of the saxon attack
    27) should show the result of the viking attack
    28) should has a fight function to start the combat
    29) should show show the final stats of the combat


  1 passing
  29 failing
```

## Exercise

![](https://i.imgur.com/5TPElt8.jpg)

### Soldier
- Create a new `soldier` constructor function that allows you to create soldiers.
- A `soldier` should be able to have `health`, `strength`, `attack`, and `receiveDamage`.
- The `soldier` attack will use all his `strength` to create damage.
- When he receives a damage, that damage will be removed from his `health`.

### Viking
- Create a new `viking` function that allows you to create vikings.
- The vikings will be `soldiers` with a `name`.
- Each viking in the army will have a `battleCry`, a `console.log` that writes **"Odin Owns You All!"**. ([Learn more about battle cries](http://www.artofmanliness.com/2015/06/08/battle-cries/))
- The application should inform us when the vikings receive damage, by logging **"{vikingName} has received {amountOfDamage} points of damage"**.
- If a Viking dies in combat, the application should log **"{vikingName} has died in act of combat"**.

### Saxons
- Create a new `saxons` function that allows you to create saxons, that will be weaker than `vikings`.
- The application should inform us when the saxons receive damage, by logging **"A Saxon has received {amountOfDamage} points of damage"**.
- If a Saxon dies in combat, the application should log **"A Saxon has died in combat"**.

### War
- Create a new `war` function that allows us to have a Vikings army and a Saxons army to fight between them.
- It should has a `saxonAttack` function to attack the vikings.
- It should has a `vikingAttack` function to attack the saxons.
- It should has a `showStats` function to show a message of how have won the combat.

**Happy Coding!!**

![Vikings picture](https://i.imgur.com/fHHEoEj.jpg)
