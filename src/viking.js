// Soldier
class Soldier {
    constructor(health, strength) /*arguments*/ {
        this.health = health; /*property with its  1 argument*/
        this.strength = strength; /*property with its  2 argument*/
    }

    attack() { /*attack method-its a function with no arguments-return the streng property of the soldier */
        return this.strength;
    }

    receiveDamage(damage) { /*function-recieve one argument (damage) - substracts the recieved damage from health1 */
        this.health -= damage;
    }
}
// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
