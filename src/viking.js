// Soldier
class Soldier {
    // receive 2 arguments (health & strength)
    // receive the health property as its 1st argument
    // receive the strength property as its 2nd argument
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() { // should be a function and receive 0 arguments
        return this.strength // should return the strength property of the soldier
    }
    receiveDamage(damage) { // should be a function and receive 1 argument (the damage)
        this.health -=  damage; // should remove the received damage from the health property.
    } // shouldn't return anything
}

// Viking
class Viking extends Soldier { // Viking should extend Soldier
    constructor(name, health, strength) { // receive 3 arguments (name (f1st), health (2nd) & strength (3rd))
        super(health, strength); // super() used to invoke superclass's constructor
        this.name = name; // need to create name property.
    }
    attack() { // be a function and receive 0 arguments
        // super.attack(); perhaps not needed due to inheritance
        return this.strength // return the strength property of the viking
    }
    receiveDamage(damage) { // be a function and receive 1 argument (the damage)
        super.receiveDamage(damage); // re-implemented viking version with different
        // return values.
        
        if (this.health <= 0) { // if the viking dies return "NAME has died in act of combat"
            return `${this.name} has died in act of combat`
        } else { // if viking is still alive return "NAME has received DAMAGE points of damage"
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry() { // be a function and receive 0 arguments
        return 'Odin Owns You All!' // return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier { // Saxon extends Soldier
    // no need to include constructor method since this class will perfectly inherit fro the 
    // parents class, both, the health and the strength
    // attack() method has been inherited from Soldier
    receiveDamage(damage) { // re-implemented for Saxon version with different return values
        // be a function and receive 1 argument (the damage)
        this.health -= damage // remove the received damage from health property.

        if (this.health <= 0) {
            return 'A Saxon has died in combat'
        } else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}

// War
class War {
    // create a constructor() method with zero arguments
    // inside the constructor() assign an empty array to the 
    // vikingArmy and to the saxonArmy property
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    }
    addViking(Viking) {
        // add the received Viking to the vikingArmy with push
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        // add the received Saxon to the saxonArmy with push
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        // should make a random Saxon receiveDamage() equal to the strength of 
        // a random viking 
        // receiveDamage() === this.strength
        let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));
        let randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));

        let attackingViking = this.vikingArmy[randomViking].attack();
        let attackedSaxon = this.saxonArmy[randomSaxon].receiveDamage(attackingViking);
        
         // should remove dead saxons from the army
        if (this.vikingArmy[randomViking].attack() >= this.saxonArmy[randomSaxon].health) {
            this.saxonArmy.splice(randomSaxon, 1) // at position of randomSaxon, remove 1 item
        }

        // should return result of calling receivedDamage() 
        return attackedSaxon
    }
    saxonAttack() {
        let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));
        let randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));
        
        let attackingSaxon = this.saxonArmy[randomSaxon].attack();
        let attackedViking = this.vikingArmy[randomViking].receiveDamage(attackingSaxon);

        if (this.saxonArmy[randomSaxon].attack() >= this.vikingArmy[randomViking].health) {
            this.vikingArmy.splice(randomViking, 1);
        }

        return attackedViking
    }
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length <= 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }   
    }
}
