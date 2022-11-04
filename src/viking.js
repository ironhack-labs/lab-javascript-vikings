// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage; 
    }   
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    } 
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage; 
        
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`;
          }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);

    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage; 
        
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`;
          }
    }
    battleCry() {
        return "Odin Owns You All!";
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [],
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const randomArrVIndex = Math.floor(Math.random()*this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomArrVIndex];
        const randomArrSIndex = Math.floor(Math.random()*this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomArrSIndex];

// should make Saxon receiveDamage() equal to the strength of a Viking
        let damageDone = randomSaxon.receiveDamage(randomViking.attack());

// should remove dead saxons from the army
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        return damageDone;
    }
    saxonAttack() {
        const randomArrVIndex = Math.floor(Math.random()*this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomArrVIndex];
        const randomArrSIndex = Math.floor(Math.random()*this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomArrSIndex];

// should make Saxon receiveDamage() equal to the strength of a Viking
        let damageDone = randomViking.receiveDamage(randomSaxon.attack());

// should remove dead saxons from the army
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        return damageDone;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
