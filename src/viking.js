// Soldier
// Modify the Soldier class and add 2 methods to it: attack(), and receiveDamage().

class Soldier {
/* class 
- should receive 2 arguments (health & strength) 
- should receive the health property as its 1st argument 
- should receive the strength property as its 2nd argument */
    constructor(health, strength) {
        this.health = health; 
        this.strength = strength;
    }
/* attack() method 
- should be a function 
- should receive 0 arguments 
- should return the strength property of the Soldier */
    attack() {
        return this.strength;
    }  
/* receiveDamage() method 
- should be a function should receive 1 argument (the damage) 
- should remove the received damage from the health property 
- shouldn't return anything */ 
    receiveDamage(damage) {
        this.health -= damage;
    }  
}



// Viking
/* A Viking is a Soldier with an additional property, their name. 
They also have a different receiveDamage() method and a new method, battleCry().
Modify the Viking class, have it inherit from Soldier, re-implement the receiveDamage() method for Viking, and add a new battleCry() method. */

// inheritance: Viking should extend Soldier
class Viking extends Soldier {
/*class 
- should receive 3 arguments (name, health & strength)
- should receive the name property as its 1st argument
- should receive the health property as its 2nd argument
- should receive the strength property as its 3rd argument*/
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

/* attack() method (This method should be inherited from Soldier, no need to re-implement it.)
- should be a function
- should receive 0 arguments
- should return the strength property of the Viking*/

/* receiveDamage() method (This method needs to be re-implemented for Viking because the Viking version needs to have different return values.)
- should be a function
- should receive 1 argument (the damage)
- should remove the received damage from the health property
- if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
- if the Viking dies, it should return "NAME has died in act of combat" */
    receiveDamage(damage) {
        this.health -= damage; 
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
/* battleCry() method
- should be a function
- should receive 0 arguments
- should return "Odin Owns You All!"*/
    battleCry() {
        return "Odin Owns You All!";
    }
}



// Saxon
/* A Saxon is a weaker kind of Soldier. Unlike a Viking, a Saxon has no name. 
Their receiveDamage() method will also be different than the original Soldier version.
Modify the Saxon, constructor function, have it inherit from Soldier and re-implement the receiveDamage() method for Saxon. */

// inheritance: Saxon should extend Soldier
class Saxon extends Soldier {
/* class
- You don't have to include a constructor method since this class will inherit perfectly from the parents class, both the health and the strength (it extends Soldier class 😉 ) */

/* attack() method (This method should be inherited from Soldier, no need to re-implement it)
- should be a function
- should receive 0 arguments
- should return the strength property of the Saxon */ 

/* receiveDamage() method: This method needs to be re-implemented for Saxon because the Saxon version needs to have different return values.
- should be a function
- should receive 1 argument (the damage)
- should remove the received damage from the health property
- if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
- if the Saxon dies, it should return "A Saxon has died in combat" */
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}



// War
// Our War class will allow us to have a Viking army and a Saxon army that battle each other.
/* Modify the War class and add 5 methods to its class:
- addViking()
- addSaxon()
- vikingAttack()
- saxonAttack()
- showStatus() */ 

/* When we first create a War, the armies should be empty. We will add soldiers to the armies later.
- should receive 0 arguments
- should assign an empty array to the vikingArmy property
- should assign an empty array to the saxonArmy property */
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
 /* addViking() method: Adds 1 Viking to the vikingArmy. If you want a 10 Viking army, you need to call this 10 times.
- should be a function
- should receive 1 argument (a Viking object)
- should add the received Viking to the army
- shouldn't return anything*/
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
/* addSaxon() method is the Saxon version of addViking().
- should be a function
- should receive 1 argument (a Saxon object)
- should add the received Saxon to the army
- shouldn't return anything */ 
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
/* vikingAttack() method
A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). 
This should only perform a single attack and the Saxon doesn't get to attack back.
- should be a function
- should receive 0 arguments
- should make a Saxon receiveDamage() equal to the strength of a Viking
- should remove dead Saxons from the army
- should return result of calling receiveDamage() of a Saxon with the strength of a Viking */
    vikingAttack() {
        if (this.saxonArmy.length === 0) {
            return "There are no Saxons left to attack!";
        }
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        
        const result = randomSaxon.receiveDamage(randomViking.attack());

        if (randomSaxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
        }

        return result; 
    }
/* saxonAttack() method is the Saxon version of vikingAttack(). A Viking receives damage equal to the strength of a Saxon.
- should be a function
- should receive 0 arguments
- should make a Viking receiveDamage() equal to the strength of a Saxon
- should remove dead Vikings from the army
- should return result of calling receiveDamage() of a Viking with the strength of a Saxon */ 
    saxonAttack() {
        if (this.vikingArmy.length === 0) {
            return "There are no Vikings left to attack!";
        }

        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        const result = randomViking.receiveDamage(randomSaxon.attack());

        if (randomViking.health <= 0) {
            this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
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