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
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return this.name + ` has received ${damage} points of damage`
        } else {
            return this.name + ` has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
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
        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } 
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
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
    // it("should make Saxon receiveDamage() equal to the strength of a Viking", function () {
      //   var oldHealth = saxon.health;
      //   war.vikingAttack();
      //   expect(saxon.health).toEqual(oldHealth - viking.strength);
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        
        const result = randomSaxon.receiveDamage(randomViking.attack());

        if (randomSaxon.health <= 0) {
            this.saxonArmy.pop();
        }

        return result;
    }

    saxonAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        
        const result = randomViking.receiveDamage(randomSaxon.attack());

        if (randomViking.health <= 0) {
            this.vikingArmy.pop();
        }

        return result;
    }
    showStatus() {
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return `Vikings and Saxons are still in the thick of battle.`;
        } else if (this.saxonArmy.length == 0) {
            return `Vikings have won the war of the century!`;
        } else {
            return `Saxons have fought for their lives and survive another day...`;
        }
    }
}
