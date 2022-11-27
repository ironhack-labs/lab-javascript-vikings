// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength
    }
    attack () {
        return this.strength;
    }
    receiveDamage(thedamage) {
        this.health -= thedamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
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
        return `Odin Owns You All!`;
    }
}
    
// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength);
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
    constructor (){
        this.vikingArmy =[];
        this.saxonArmy =[];
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon) 
    }

    vikingAttack() {
        let someViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let someVikingStrength = someViking.attack();
        let someSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let result = someSaxon.receiveDamage(someVikingStrength);

        if (someSaxon.health <= 0) {
            const index = this.saxonArmy.indexOf(someSaxon);
            if(index > -1) {
                this.saxonArmy.splice(index, 1);
            }
        }

        return result;
    }


showStatus() {}
}