// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }
    receiveDamage(receivedDamage) {
        this.health -= receivedDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

   receiveDamage(receivedDamage) {
    this.health -= receivedDamage;
    if (this.health > 0) {
        return `${this.name} has received ${receivedDamage} points of damage`;
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

    receiveDamage(receivedDamage) {
        this.health -= receivedDamage;
        if(this.health >0) {
        return `A Saxon has received ${receivedDamage} points of damage`;
    } else {
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

    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack () {
        let randomS = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomV = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result = randomS.receiveDamage(randomV.strength);
        if (randomS.health <= 0) {
            this.saxonArmy.splice(randomS, 1);
        }
        return result;
    }

    saxonAttack () {
        let randomS = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomV = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result = randomV.receiveDamage(randomS.strength);
        if (randomV.health <= 0) {
            this.vikingArmy.splice(randomV, 1);
        }
        return result;
    }
    showStatus () {
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {  
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
