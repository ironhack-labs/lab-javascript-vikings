// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {return this.strength}
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier  {
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super (health,strength)
    }
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
class War {
    constructor() {
    this.vikingArmy= [];
    this.saxonArmy= []
    }

    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject)
    }

    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject)
    
    }
    vikingAttack(){
        let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let chosenViking= this.vikingArmy[indexViking];
        let chosenSaxon = this.saxonArmy[indexSaxon];
        if (chosenSaxon.health <= chosenViking.strength) {
            this.saxonArmy.splice(indexSaxon,1)
        }
        return chosenSaxon.receiveDamage(chosenViking.strength);
    }
    saxonAttack(){
        let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let chosenViking= this.vikingArmy[indexViking];
        let chosenSaxon = this.saxonArmy[indexSaxon];
        if (chosenViking.health <= chosenSaxon.strength) {
            this.vikingArmy.splice(indexViking, 1)
        }
        return chosenViking.receiveDamage(chosenSaxon.strength);
    }
    showStatus(){
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        return "Vikings and Saxons are still in the thick of battle."
    }   
}