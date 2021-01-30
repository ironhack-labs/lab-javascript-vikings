// Soldier
class Soldier {
    constructor(health, strength) { // the soilder class recieves two arguements (health and strength)
        this.health = health;
        this.strength = strength;
    }

    attack() {  // here attack is a method. It has nothing inside the () brackets. 
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier { // calling extends keyword and extending Soilder means it inherits
    constructor (name, health, strength) {
        super(health, strength); // super always has to come the line after the constructor or else it doesnt work
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`; // damage is not a variable in the object so we dont need to call this
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry () {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier { //you don't have to include constructor method since this class will inherit perfectly from the parents class, both, the health and the strength (it extends Soldier class)
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`; // damage is not a variable in the object so we dont need to call this
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomDamagedSaxon = randomSaxon.receiveDamage(randomViking.strength);
        this.saxonArmy = this.saxonArmy.filter(function(saxon){
            return saxon.health > 0;
        });
        return randomDamagedSaxon;
    }

    saxonAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomDamagedViking = randomViking.receiveDamage(randomSaxon.strength);
        this.vikingArmy = this.vikingArmy.filter(function(viking){
            return viking.health > 0;
        });
        return randomDamagedViking;
        // this.attack(this.saxonArmy);
    }

    // ==========attempt that doesnt work!===============
    // attack(attackingArmy) {
    //     let defendingArmy;
    //     if (attackingArmy === this.vikingArmy) {
    //         defendingArmy = this.saxonArmy;
    //     }
    //     else {
    //         defendingArmy = this.vikingArmy;
    //     }
    //     const randomAttackingSoldier = attackingArmy[Math.floor(Math.random() * attackingArmy.length)];
    //     const randomDefendingSoldier = defendingArmy[Math.floor(Math.random() * defendingArmy.length)];
    //     const randomDamagedSoldier = randomDefendingSoldier.receiveDamage(randomAttackingSoldier.strength);
    //     defendingArmy = defendingArmy.filter(function(soldier){
    //         return soldier.health > 0;
    //     });
    //     return randomDamagedSoldier;

    // }

    showStatus() {

    }

}
