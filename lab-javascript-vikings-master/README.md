![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Vikings

![giphy](https://user-images.githubusercontent.com/76580/167318130-3f0e5e19-86bc-4278-aaab-a988febcea3f.gif)

## Introduction

We have learned Object-oriented programming and how `class` and inheritance work in JavaScript. Now let's work with our Viking friends, applying all of the concepts we have just learned.

<br>

## Requirements

- Fork this repo.
- Clone this repo.

<br>

## Submission

- Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
```

- Create a Pull Request so that your TAs can check your work.

<br>



## Test Your Code

This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, they are in the `tests/viking.spec.js` file.



To run the tests and your JavaScript code, open the `SpecRunner.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.



To see the outputs of the `console.log` in your JavaScript code, open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

<br>



## Instructions

You will work on the `src/viking.js` file.

Your task is to write the correct code in the `src/viking.js` file to make the tests pass. In this file, you will find the following starter code:

```javascript
// Soldier
class Soldier {}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
```



### Iteration 0: First test

Let's have a look at the first test case together to get you started.

The first test case says that "_Soldier class >> should receive 2 arguments (health & strength)_", so we have to write the correct code to pass this test. Let's make the `Soldier` class receive two arguments:

```javascript
// Soldier
class Soldier {
  constructor(health, strength) {}
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
```

<br>



### Iteration 1: Soldier

Modify the `Soldier` class and add 2 methods to it: `attack()`, and `receiveDamage()`.

#### class

- should receive **2 arguments** (health & strength)
- should receive the **`health` property** as its **1st argument**
- should receive the **`strength` property** as its **2nd argument**

#### `attack()` method

- should be a function
- should receive **0 arguments**
- should return **the `strength` property of the `Soldier`**

#### `receiveDamage()` method

- should be a function
- should receive **1 argument** (the damage)
- should remove the received damage from the `health` property
- **shouldn't return** anything

<br>

### Iteration 2: Viking

A `Viking` is a `Soldier` with an additional property, their `name`. They also have a different `receiveDamage()` method and new method, `battleCry()`.

Modify the `Viking` class, have it inherit from `Soldier`, re-implement the `receiveDamage()` method for `Viking`, and add a new `battleCry()` method.

#### inheritance

- `Viking` should **extend** `Soldier`

#### class

- should receive **3 arguments** (name, health & strength)
- should receive the **`name` property** as its **1st argument**
- should receive the **`health` property** as its **2nd argument**
- should receive the **`strength` property** as its **3rd argument**

#### `attack()` method

(This method should be **inherited** from `Soldier`, no need to re-implement it.)

- should be a function
- should receive **0 arguments**
- should return **the `strength` property of the `Viking`**

#### `receiveDamage()` method

This method needs to be **re-implemented** for `Viking` because the `Viking` version needs to have different return values.

- should be a function
- should receive **1 argument** (the damage)
- should remove the received damage from the `health` property
- **if the `Viking` is still alive**, it should return **"NAME has received DAMAGE points of damage"**
- **if the `Viking` dies**, it should return **"NAME has died in act of combat"**

#### `battleCry()` method

[Learn more about battle cries](http://www.artofmanliness.com/2015/06/08/battle-cries/).

- should be a function
- should receive **0 arguments**
- should return **"Odin Owns You All!"**

<br>

### Iteration 3: Saxon

A `Saxon` is a weaker kind of `Soldier`. Unlike a `Viking`, a `Saxon` has no name. Their `receiveDamage()` method will also be different than the original `Soldier` version.

Modify the `Saxon`, constructor function, have it inherit from `Soldier` and re-implement the `receiveDamage()` method for `Saxon`.

#### inheritance

- `Saxon` should extend `Soldier`

#### class

- You don't have to include constructor method since this class will inherit perfectly from the parents class, both, the health and the strength (it `extends` Soldier class :wink: )

#### `attack()` method

This method should be **inherited** from `Soldier`, no need to re-implement it.

- should be a function
- should receive **0 arguments**
- should return **the `strength` property of the `Saxon`**

#### `receiveDamage()` method

This method needs to be **re-implemented** for `Saxon` because the `Saxon` version needs to have different return values.

- should be a function
- should receive **1 argument** (the damage)
- should remove the received damage from the `health` property
- **if the Saxon is still alive**, it should return **_"A Saxon has received DAMAGE points of damage"_**
- **if the Saxon dies**, it should return **_"A Saxon has died in combat"_**

<br>



### BONUS - Iteration 4: War

Now we get to the good stuff: WAR! Our `War` class will allow us to have a `Viking` army and a `Saxon` army that battle each other.

Modify the `War` class and add 5 methods to its `class`:

- `addViking()`
- `addSaxon()`
- `vikingAttack()`
- `saxonAttack()`
- `showStatus()`

#### class

When we first create a `War`, the armies should be empty. We will add soldiers to the armies later.

- should receive **0 arguments**
- should assign an empty array to the **`vikingArmy` property**
- should assign an empty array to the **`saxonArmy` property**

#### `addViking()` method

Adds 1 `Viking` to the `vikingArmy`. If you want a 10 `Viking` army, you need to call this 10 times.

- should be a function
- should receive **1 argument** (a `Viking` object)
- should add the received `Viking` to the army
- **shouldn't return** anything

#### `addSaxon()` method

The `Saxon` version of `addViking()`.

- should be a function
- should receive **1 argument** (a `Saxon` object)
- should add the received `Saxon` to the army
- **shouldn't return** anything

#### `vikingAttack()` method

A `Saxon` (chosen at random) has their `receiveDamage()` method called with the damage equal to the `strength` of a `Viking` (also chosen at random). This should only perform a single attack and the `Saxon` doesn't get to attack back.

- should be a function
- should receive **0 arguments**
- should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
- should remove dead saxons from the army
- should return **result of calling `receiveDamage()` of a `Saxon`** with the `strength` of a `Viking`

#### `saxonAttack()` method

The `Saxon` version of `vikingAttack()`. A `Viking` receives the damage equal to the `strength` of a `Saxon`.

- should be a function
- should receive **0 arguments**
- should make a `Viking` `receiveDamage()` equal to the `strength` of a `Saxon`
- should remove dead vikings from the army
- should return **result of calling `receiveDamage()` of a `Viking`** with the `strength` of a `Saxon`

<br>



### BONUS - Iteration 5

Since there is a lot of repetitive code in the previous two iterations, methods _vikingAttack()_ and _saxonAttack()_, try to create one _generic_ method and call it in the case of _vikingAttack_ and in the case of _saxonAttack_ instead of using almost the same code for both methods. (This iteration doesn't have test, so ask your TAs and your instructor to give you feedback on the quality of your code after the refactor.)

#### `showStatus()` method

Returns the current status of the `War` based on the size of the armies.

- should be a function

- should receive **0 arguments**

- **if the `Saxon` array is empty**, should return **_"Vikings have won the war of the century!"_**

- **if the `Viking` array is empty**, should return **_"Saxons have fought for their lives and survived another day..."_**

- **if there are at least 1 `Viking` and 1 `Saxon`**, should return **_"Vikings and Saxons are still in the thick of battle."_**

  

**Happy Coding!** 💙
